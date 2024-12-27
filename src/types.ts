export interface Tickets {
    tickets: TicketsState
} 

export interface TicketsTableInterface {
    currentCurrency: Currency
    prevCurrency: Currency
    tickets: TicketsState
    filters: Filters
}

export interface TransfersProps {
    filters: {
      all: boolean;
      withoutTransfers: boolean;
      oneTransfer: boolean;
      twoOrMoreTransfers: boolean;
    };
    onFilterChange: (filter: string, value: boolean) => void;
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
    currency: Currency
}

export interface Filters {
    all: boolean
    withoutTransfers: boolean
    oneTransfer: boolean
    twoOrMoreTransfers: boolean
}

export type TicketsState = TicketType[] | []

export type Currency = "RUB" | "USD" | "EUR" | ''

