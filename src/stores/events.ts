// src/stores/events.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';
import type { Event } from '@/interfaces/event';

export const useEventStore = defineStore('events', () => {
  const events = ref<Event[]>([]);
  const loading = ref(false);

  const fetchEvents = async () => {
    loading.value = true;

    let { data, error} = await supabase
      .from('events')
      .select('*')

    
    console.log('Eventos recibidos desde Supabase:', data);
    events.value = data as Event[];


    loading.value = false;
  };

  return {
    events,
    fetchEvents,
    loading
  };
});
