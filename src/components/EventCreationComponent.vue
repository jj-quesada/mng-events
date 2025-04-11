<template>
    <main class="EventCreationComponent">
        <article class="background">
            <form class="form">
                <h1 class="title">Create your event!</h1>

                <v-text-field
                    v-model="eventName"
                    label="Event Name"
                    class="field name-field"
                    placeholder="Event Name"
                />

                <v-text-field
                    v-model="maximumAttendees"
                    label="Maximum Attendees"
                    class="field maxAtt-field"
                    placeholder="Maximum Attendees"
                />

                <v-textarea
                    v-model="description"
                    label="Description"
                    class="field description-field"
                />

                <v-text-field
                    v-model="price"
                    label="Price"
                    class="field price-field"
                    placeholder="Price"
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
                    v-model="imageFile"
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
                        @click="eventSubmitted"
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

    const eventName = ref<string>('');
    const maximumAttendees = ref<string>('');
    const description = ref<string>('');
    const date = ref<string>('');
    const time = ref<string>('');
    const price = ref<string>('');
    const privateEvent = ref<boolean>(false);
    
    const imageFile = ref<File | null>(null);

    function eventSubmitted(): void {
        console.log('event created', {eventName: eventName.value})

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
        width: 50vw;

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