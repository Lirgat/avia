export interface Tickets {
    tickets: TicketsState
} 

export interface TicketsTableInterface {
    currentCurrency: Currency
    prevCurrency: Currency
    tickets: TicketsState
}

export interface CurrentCurrency {
    currentCurrency: Currency
    setNewCurrency: CallableFunction
}

export interface TicketType {
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: number
    price: number
}

export type TicketsState = TicketType[] | []

export type Currency = "RUB" | "USD" | "EUR" | ''

