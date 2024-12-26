
import React, { useEffect, useState } from "react";
import style from "./style.module.css"
import Currencies from "./components/currencies/Currencies.tsx";
import Transfers from "./components/transfers/Transfers.tsx";
import { Currency, TicketsState } from "./types.ts";
import TicketTable from "./components/ticketTable/TicketTable.tsx";

function App() {
  const [tickets, setTickets] = useState<TicketsState>([])
  const [currency, setCurrency] = useState<Currency>("RUB")

  const setNewCurrency = (newCurrency:Currency):void => {
    setCurrency(newCurrency)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./tickets.json")
        if(!response.ok){
          throw new Error("Not ok")
        }

        const jsonData = await response.json()
        const ticketArray = jsonData.tickets
        setTickets(ticketArray)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={style.TicketsBlock}>
      <div className={style.TicketsMenu}>
        <Currencies currentCurrency={ currency } setNewCurrency={setNewCurrency}></Currencies>
        <Transfers></Transfers>
      </div>
      <TicketTable tickets={tickets}></TicketTable>
    </div>
  );
}

export default App;
