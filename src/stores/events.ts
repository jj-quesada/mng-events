// src/stores/events.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';
import { Event } from '@/interfaces/EventInterfaces';

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
      events.value = data;

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
          .select('*')
          .eq('id', eventId)
          .single();

      if (fetchError) throw fetchError;
      selectedEvent.value = data;

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const createEvent = async (eventData: Event) => {
    loading.value = true;
    error.value = null;

    try {
      const { error: insertError } = await supabase
          .from('events')
          .insert([eventData]);

      if (insertError) throw insertError;
      await fetchEvents(); // refresh

    } catch (err: any) {
      error.value = err.message;

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

