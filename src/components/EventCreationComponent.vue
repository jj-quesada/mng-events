<template>
    <main class="EventCreationComponent">
        <button class='back-button' onclick="history.back()"> Volver </button>
        <article class="background">
            <form class="form" @submit.prevent="eventSubmitted">
                <h1 class="title">Create your event!</h1>

                <v-text-field
                    v-model="eventName"
                    label="Event Name"
                    class="field name-field"
                    placeholder="Event Name"
                />

                <section class="attendees-price">
                    <v-text-field
                        v-model="maximumAttendees"
                        type="number"
                        label="Maximum Attendees"
                        class="field maxAtt-field"
                        placeholder="Maximum Attendees"
                    />
    
                    <v-text-field
                        v-model="price"
                        type="number"
                        label="Price"
                        class="field price-field"
                        placeholder="Price"
                    />
                </section>

                <v-textarea
                    v-model="description"
                    label="Description"
                    class="field description-field"
                />

                <v-text-field
                    v-model="location"
                    label="Location"
                    class="field price-field"
                    placeholder="Location"
                />

                <section class="date-time">
                    <v-text-field
                        v-model="date"
                        type="date"
                    ></v-text-field>
    
                    <v-text-field
                        v-model="time"
                        type="time"
                    ></v-text-field>
                </section>

                <v-file-input
                    v-model="images"
                    accept="image/*"
                    label="upload-image"
                />
                
                <section class="final-section">
                    <v-switch
                        v-model="privateEvent"
                        label="Private Event"
                        class="privacy-field"
                        color="green"
                    />
    
                    <button 
                        class="submit-button" 
                        type="submit" 
                    >
                        Create event
                    </button >
                </section>
            </form>
        </article>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Event } from '@/interfaces/event';

    const eventName = ref<string>('');
    const maximumAttendees = ref<string>('');
    const description = ref<string>('');
    const date = ref<string>('');
    const time = ref<string>('');
    const realDate = ref<Date>(new Date());
    const price = ref<string>('');
    const location = ref<string>('');
    const privateEvent = ref<boolean>(false);
    
    const images = ref<File | undefined>(undefined);

    function eventSubmitted(): void {

        if (!eventName.value || !maximumAttendees.value || !location.value || !description.value || !date.value || !time.value || !price.value) {
            console.error('Please fill in all fields');
            return;
        }
        
        const timeGroup : string[] = time.value.split(':');
        const dateGroup : string[] = date.value.split('-');

        realDate.value.setFullYear(parseInt(dateGroup[0]), parseInt(dateGroup[1]), parseInt(dateGroup[2]));
        realDate.value.setHours(parseInt(timeGroup[0]));
        realDate.value.setMinutes(parseInt(timeGroup[1]));

        const event: Event = {
            id: crypto.randomUUID(),
            name: eventName.value,
            maximumAttendees: parseInt(maximumAttendees.value),
            description: description.value,
            dateTime: realDate.value,
            price: parseFloat(price.value),
            location: location.value,
            privateEvent: privateEvent.value,
            imageFile: images.value
        };

        console.log('Event created', event);

    }
  
</script>

<style scoped lang="css">
    .EventCreationComponent {
        width: 100vw;
    }

    .background {
        padding: 5em 0 5em 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form {
        background-color: var(--third-color);
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        display: flex;
        flex-direction: column;

        gap: .5em;
        padding: 2em 2em 0 2em;
        width: 45em;

    }

    .title {
        color: var(--first-color);
        align-self: center;

        position: relative;
        bottom: 9px;

    }

    .field {
        color: var(--first-color);
    }

    .field::placeholder {
        color: var(--third-color);
    }

    .description-field {
        height: 15em;
    }

    .attendees-price{
        display: flex;
        gap: 1em;
    }

    .date-time {
        display: flex;
        gap: 1em;

    }

    .final-section {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .submit-button {
        background-color: var(--accent-one);
        color: var(--third-color);
        border: none;

        height: 3em;

        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, .7);

    }

    .submit-button:hover {
        background-color: var(--accent-two);
    }
</style>