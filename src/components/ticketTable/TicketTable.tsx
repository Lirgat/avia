import React, { FC, JSX, useEffect, useState } from "react";
import { TicketsState, TicketsTableInterface, TicketType } from "../../types";
import Ticket from "./ticket/Ticket.tsx";
import style from "./style.module.css";
import converter from "../../utils/converter.ts";

const TicketTable: FC<TicketsTableInterface> = ({
  currentCurrency,
  prevCurrency,
  tickets,
}): JSX.Element => {
  const [convertedTickets, setConvertedTickets] = useState<TicketsState>(tickets);

  useEffect(() => {
    if (prevCurrency === "") {
      setConvertedTickets(tickets);
    } else {
      const newConvertedTickets:TicketsState = tickets.map((ticket, idx):TicketType => {
        return {
          ...ticket,
          price: converter(currentCurrency, prevCurrency, convertedTickets[idx].price),
        };
      });
      setConvertedTickets(newConvertedTickets);
    }
  }, [currentCurrency, tickets]);

  return (
    <div className={style.TicketsList}>
      {convertedTickets.map((ticket, idx): JSX.Element => {
        return <Ticket {...ticket} key={idx} />;
      })}
    </div>
  );
};

export default TicketTable;