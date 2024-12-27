import React, { FC, JSX } from "react";
import { TicketType } from "../../../types";
import style from "./style.module.css";

const Ticket: FC<TicketType> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency
}): JSX.Element => {

  return (
    <div className={style.Ticket}>
      <div className={style.BuyTicket}>
        <h1 className={style.BuyTicket_name}>{carrier}</h1>
        <button className={style.BuyTicket_button}>
          Купить <br /> за {price}{currency === "RUB" ? '₽' : currency === "USD" ? '$' : currency === "EUR" ? '€' : ''}
        </button>
      </div>
      <div className={style.TicketInfo}>
        <div className={style.Departure}>
          <div className={style.DepartureTime}>{departure_time}</div>
          <div className={style.DepartureName}>
            {origin}, {origin_name}
          </div>
          <div className={style.DepartureDate}>{departure_date}</div>
        </div>
        <div className={style.Stops}>
          {stops === 1
            ? `${stops} ПЕРЕСАДКА`
            : stops <= 0
            ? `БЕЗ ПЕРЕСАДОК`
            : `${stops} ПЕРЕСАДКИ`}
        </div>
        <div className={style.Arrival}>
          <div className={style.ArrivalTime}>{arrival_time}</div>
          <div className={style.ArrivalName}>
            {destination}, {destination_name}
          </div>
          <div className={style.ArrivalDate}>{arrival_date}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
