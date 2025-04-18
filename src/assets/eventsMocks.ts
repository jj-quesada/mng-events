import { ref, Ref } from "vue";
import { Event } from "@/interfaces/event";
import imageFile from "@/assets/logo.png";


export const events : Ref<Event[]> = ref<Event[]>([
    {
        id: 'a1b2c3d4-5678-4e9f-a1b2-1234567890ab',
        name: 'Vue.js Conference',
        maximumAttendees: 300,
        description: 'A conference for Vue.js developers.',
        location: 'San Francisco, CA',
        dateTime: new Date('2025-06-10T09:00:00'),
        price: 199.99,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
    },
    {
        id: 'bb22ee44-8899-4a7d-bb22-abcdef123456',
        name: 'Hackathon 2025',
        maximumAttendees: 150,
        description: '24-hour coding competition.',
        location: 'Berlin, Germany',
        dateTime: new Date('2025-07-15T10:00:00'),
        price: 0,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
    },
    {
        id: 'ccdd7788-3344-4f1c-ccdd-fedcba654321',
        name: 'Frontend Fiesta',
        maximumAttendees: 100,
        description: 'A fun and insightful frontend gathering.',
        location: 'Madrid, Spain',
        dateTime: new Date('2025-08-20T14:30:00'),
        price: 49.99,
        privateEvent: true,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
    },
    {
        id: 'de98ab76-1234-4cab-98de-a1b2c3d4e5f6',
        name: 'Tech Talks Night',
        maximumAttendees: 200,
        description: 'An evening of short, powerful tech talks.',
        location: 'Remote (Zoom)',
        dateTime: new Date('2025-09-05T18:00:00'),
        price: 10,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
    },
    {
        id: 'f1e2d3c4-1111-4a2b-b3c4-abcdefabcdef',
        name: 'AI & ML Summit',
        maximumAttendees: 400,
        description: 'Exploring the future of artificial intelligence and machine learning.',
        location: 'Toronto, Canada',
        dateTime: new Date('2025-10-12T09:00:00'),
        price: 299.99,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
      {
        id: '123e4567-e89b-4d3a-a456-426614174000',
        name: 'Product Design Camp',
        maximumAttendees: 80,
        description: 'Hands-on design sprint and prototyping bootcamp.',
        location: 'Copenhagen, Denmark',
        dateTime: new Date('2025-11-02T10:30:00'),
        price: 149.99,
        privateEvent: true,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
      {
        id: '7890abcd-5678-4abc-90ef-abcdef123123',
        name: 'Cybersecurity Forum',
        maximumAttendees: 250,
        description: 'Learn the latest trends in cybersecurity and data protection.',
        location: 'Singapore',
        dateTime: new Date('2025-12-01T13:00:00'),
        price: 199,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
      {
        id: 'bada55f0-9cde-4def-a2b3-001122334455',
        name: 'GreenTech Expo',
        maximumAttendees: 600,
        description: 'Showcasing eco-friendly technology and innovations.',
        location: 'Amsterdam, Netherlands',
        dateTime: new Date('2026-01-18T11:00:00'),
        price: 0,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
      {
        id: 'deadbeef-0000-4c0d-beef-faceb00c1234',
        name: 'Blockchain Bootcamp',
        maximumAttendees: 120,
        description: 'Master blockchain concepts in a 3-day intensive workshop.',
        location: 'Austin, TX',
        dateTime: new Date('2026-02-20T09:30:00'),
        price: 299.99,
        privateEvent: true,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
      {
        id: 'feedface-9876-4bee-cafe-babe12345678',
        name: 'Remote Work Conference',
        maximumAttendees: 350,
        description: 'The future of distributed teams and asynchronous collaboration.',
        location: 'Online',
        dateTime: new Date('2026-03-10T17:00:00'),
        price: 25,
        privateEvent: false,
        imageFile: imageFile,
        creationDate: new Date('2025-04-10T09:00:00')
      },
]);