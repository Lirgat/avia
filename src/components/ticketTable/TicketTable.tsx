import React, { FC, JSX, useEffect, useState } from "react";
import { TicketsState, TicketsTableInterface, TicketType } from "../../types";
import Ticket from "./ticket/Ticket.tsx";
import style from "./style.module.css";
import converter from "../../utils/converter.ts";

const TicketTable: FC<TicketsTableInterface> = ({
  currentCurrency,
  prevCurrency,
  tickets,
  filters
}): JSX.Element => {
  const [convertedTickets, setConvertedTickets] = useState<TicketsState>(tickets);

  useEffect(() => {
    if (prevCurrency === "") {
      setConvertedTickets(tickets);
    } else {
      const newConvertedTickets: TicketsState = tickets.map((ticket, idx): TicketType => {
        return {
          ...ticket,
          price: converter(currentCurrency, prevCurrency, convertedTickets[idx].price),
        };
      });
      setConvertedTickets(newConvertedTickets);
    }
  }, [currentCurrency, tickets]);

  // Фильтрация билетов на основе выбранных фильтров
  const filteredTickets = convertedTickets.filter((ticket) => {
    if (filters.all) return true; 
    if (filters.withoutTransfers && ticket.stops === 0) return true; 
    if (filters.oneTransfer && ticket.stops === 1) return true; 
    if (filters.twoOrMoreTransfers && ticket.stops >= 2) return true;
    return false; 
  });

  return (
    <div className={style.TicketsList}>
      {filteredTickets.map((ticket, idx): JSX.Element => {
        return <Ticket {...ticket} key={idx} currency={currentCurrency}/>;
      })}
    </div>
  );
};
export default TicketTable;