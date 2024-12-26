import React, { FC, JSX } from "react";
import { Tickets } from "../../types";
import Ticket from "./ticket/Ticket.tsx";
import style from "./style.module.css"

const TicketTable:FC<Tickets> = ({tickets}):JSX.Element => {
    return(
      <div className={style.TicketsList}>
        {
                tickets.map((ticket, idx):JSX.Element => {
                    console.log(ticket)
                    return(
                    <Ticket {...ticket} key={idx} />
                )       
                })
            }
      </div>
    )
}

export default TicketTable