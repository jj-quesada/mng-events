export interface Event {
    id?: string,
    creationTime?: Date,
    ownerId: string,
    name: string,
    maximumAttendees: number,
    description: string,
    location: string,
    celebrationDate: Date,
    price: number,
    privateEvent: boolean,
    imageURL?: string
}