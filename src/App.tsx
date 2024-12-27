import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Currencies from "./components/currencies/Currencies.tsx";
import Transfers from "./components/transfers/Transfers.tsx";
import { Currency, Filters, TicketsState } from "./types.ts";
import TicketTable from "./components/ticketTable/TicketTable.tsx";

function App() {
  const [tickets, setTickets] = useState<TicketsState>([]);
  const [currency, setCurrency] = useState<Currency>("RUB");
  const [prevCurrency, setPrevCurrency] = useState<Currency>("");
  const [filters, setFilters] = useState<Filters>({
    all: true,
    withoutTransfers: false,
    oneTransfer: false,
    twoOrMoreTransfers: false
  })

  const setNewCurrency = (newCurrency: Currency): void => {
    setPrevCurrency(currency);
    setCurrency(newCurrency);
  };

  const handleFilterChange = (filter: string, value: boolean) => {
    if (filter === "all" && value !== false) {
      setFilters({
        all: true,
        withoutTransfers: false,
        oneTransfer: false,
        twoOrMoreTransfers: false,
      });
    } else if (filter === "withoutTransfers" && value !== false) {
      setFilters({
        all: false,
        withoutTransfers: true,
        oneTransfer: false,
        twoOrMoreTransfers: false,
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [filter]: value,
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./tickets.json");
        if (!response.ok) {
          throw new Error("Not ok");
        }

        const jsonData = await response.json();
        const ticketArray = jsonData.tickets;
        setTickets(ticketArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.TicketsBlock}>
      <div className={style.TicketsMenu}>
        <Currencies
          currentCurrency={currency}
          setNewCurrency={setNewCurrency}
        ></Currencies>
         <Transfers filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <TicketTable
        prevCurrency={prevCurrency}
        currentCurrency={currency}
        tickets={tickets}
        filters={filters}
      ></TicketTable>
    </div>
  );
}

export default App;
