export interface Event {
    id: string,
    name: string,
    maximumAttendees: number,
    description: string,
    location: string,
    dateTime: Date,
    price: number,
    privateEvent: boolean,
    imageFile: string | undefined
}