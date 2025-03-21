<template>
    <main class="EventCreationComponent">
        <article class="background">
            <form class="form">
                <h1 class="title">Create your event!</h1>

                <input
                    v-model="eventName"
                    label="Event Name"
                    class="field name-field"
                    placeholder="Event Name"
                />

                <input
                    v-model="maximumAttendees"
                    label="Maximum Attendees"
                    class="field maxAtt-field"
                    placeholder="Maximum Attendees"
                />

                <textarea
                    v-model="description"
                    label="Description"
                    class="field description-field"
                    placeholder="Description"
                />

                <input
                    v-model="price"
                    label="Price"
                    class="field price-field"
                    placeholder="Price"
                />
                <section class="datetime-content">
                    <input
                        v-model="date"
                        label="Date"
                        type="date"
                        class="field date-field"
                    />
    
                    <input
                        v-model="time"
                        label="Time"
                        type="time"
                        class="field time-field"
                    />

                </section>

                <section class="privacy-content">
                    <label>Is the event private?</label>
                    <input
                        v-model="privateEvent"
                        label="Private"
                        type="checkbox"
                        class="privacy-field"
                    />
                </section>

                <button 
                    class="submit-button" 
                    type="submit" 
                    @click="eventSubmitted"
                >
                    Create event
                </button >
            </form>
        </article>
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

    const eventName = ref<string>('');
    const maximumAttendees = ref<string>('');
    const description = ref<string>('');
    const date = ref<string>('');
    const time = ref<string>('');
    const price = ref<string>('');
    const privateEvent = ref<boolean>(false);

    function eventSubmitted(): void {
        console.log('event created')
    }

</script>

<style scoped lang="css">
    .EventCreationComponent {
        width: 100vw;
    }

    .background {
        padding: 5em 10em 10em 10em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form {
        background-color: #b2b6b9;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        display: flex;
        flex-direction: column;

        gap: 1em;
        padding: 2em;
        width: 50vw;

    }

    .title {
        color: rgb(0, 0, 0);
        align-self: center;

        position: relative;
        bottom: 9px;

    }

    .field {
        color: white;
        background-color: #154261;
        border: 1px solid #000000;
        border-radius: 5px;

        padding: 6px;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, .7);
    }

    .description-field {
        height: 15em;
    }

    .datetime-content {
        display: flex;
        gap: 5px;

    }

    .date-field, .time-field {
        width: 50%;
    }

    .privacy-content {
        display: flex;
        gap: 5px;
    }

    .submit-button {
        align-self: self-end;
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, .7);

    }

    .submit-button:hover {
        background-color: #2980b9;
        box-shadow: none;
    }

</style>