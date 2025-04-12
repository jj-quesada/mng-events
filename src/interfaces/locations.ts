export interface Country {
    id: string
    name: string
    phoneCode: string
    emojiU: string
    native: string
}
  
export  interface State {
    id: string
    name: string
    stateCode: string
    countryId: string
}

export  interface City {
    id: string
    name: string
    stateId: string
}