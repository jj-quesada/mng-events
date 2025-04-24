// src/stores/events.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';
import { Event } from '@/interfaces/event';

export const useEventStore = defineStore('event', () => {

  const events = ref<Event[]>([]);
  const selectedEvent = ref<Event | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchEvents = async () => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await supabase
          .from('events')
          .select('*');

      if (fetchError) throw fetchError;
      if (data) {
        events.value = data.map((item: any): Event => {
            const baseItem = {
              id: item.id,
              creationTime: item.creation_time,
              ownerId: item.owner_id,
              name: item.name,
              maximumAttendees: item.maximum_attendees,
              description: item.description,
              location: item.location,
              celebrationDate: item.celebration_date,
              price: item.price,
              privateEvent: item.private_event,
              imageURL: item.image_url || undefined
            };
            return baseItem;
          })
        }

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const fetchEventById = async (eventId: string) => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await supabase
          .from('events')
          .select(`
          *,
          user_profiles(username)
        `)
          .eq('id', eventId)
          .single();

      if (fetchError) throw fetchError;

      selectedEvent.value = {
        ...data,
        ownerName: data.user_profiles?.username || 'Unknown user',
        celebrationDate: new Date(data.celebration_date.replace(' ', 'T')) // Conversión explícita
      };

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const createEvent = async (eventData: Event, image : File | undefined) => {
    loading.value = true;
    error.value = null;

    try {
      var imageURL = '';

      // const filePath = `event-images/${eventData.ownerId}_${eventData.name}_${Date.now()}`;
      // console.log(filePath);

      if(image) {

        const filePath = `event-images/${eventData.ownerId}_${eventData.name}_${Date.now()}`;
        console.log(filePath);

        const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(filePath, image);

        if (uploadError) throw new Error(`Error al subir la imagen: ${uploadError.message}`);

        const { data: publicUrlData } = supabase.storage
            .from('event-images')
            .getPublicUrl(filePath);

        if (!publicUrlData?.publicUrl) {
          throw new Error('No se pudo obtener la URL pública de la imagen.');
        }

        imageURL = publicUrlData.publicUrl;
      }

      const { error: insertError } = await supabase
          .from('events')
          .insert([
            {
              creation_time: new Date().toISOString(),
              owner_id: eventData.ownerId,
              name: eventData.name,
              maximum_attendees: eventData.maximumAttendees,
              description: eventData.description,
              location: eventData.location,
              celebration_date: eventData.celebrationDate.toISOString(),
              price: eventData.price,
              private_event: eventData.privateEvent,
              image_url: imageURL
            }
          ]);

      if (insertError) throw new Error(`Error al insertar el evento: ${insertError.message}`);
      await fetchEvents(); // refresh

    } catch (err: any) {
      error.value = err.message;
      console.error(err.message);
      throw err;

    } finally {
      loading.value = false;
    }
  };

  const updateEvent = async (eventId: string, updatedData: Partial<Event>) => {
    loading.value = true;
    error.value = null;

    try {
      const { error: updateError } = await supabase
          .from('events')
          .update(updatedData)
          .eq('id', eventId);

      if (updateError) throw updateError;
      await fetchEvents();

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const deleteEvent = async (eventId: string) => {
    loading.value = true;
    error.value = null;

    try {
      const { error: deleteError } = await supabase
          .from('events')
          .delete()
          .eq('id', eventId);

      if (deleteError) throw deleteError;
      await fetchEvents();

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  return {
    events,
    selectedEvent,
    loading,
    error,
    fetchEvents,
    fetchEventById,
    createEvent,
    updateEvent,
    deleteEvent
  };
});

