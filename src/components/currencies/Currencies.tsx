import React, { FC, JSX, useCallback } from "react";
import style from "./style.module.css"
import { CurrentCurrency } from "../../types";

const Currencies:FC<CurrentCurrency> = ({currentCurrency, setNewCurrency}):JSX.Element => {

    const handleClick = useCallback((e):void => {
        setNewCurrency(e.target.textContent)
    }, [currentCurrency])

    return(
        <div className={style.CurrencyBlock}>
            <h1 className={style.CurrencyBlock_h1}>ВАЛЮТА</h1>
            <div className={style.Currency_btns}>
                <button onClick={ handleClick } className={`${style.CurrencyBlock_btn} ${currentCurrency === "RUB" ? style.active : ''}`}>RUB</button>
                <button onClick={ handleClick } className={`${style.CurrencyBlock_btn} ${currentCurrency === "USD" ? style.active : ''}`}>USD</button>
                <button onClick={ handleClick } className={`${style.CurrencyBlock_btn} ${currentCurrency === "EUR" ? style.active : ''}`}>EUR</button>
            </div>
        </div>
    )
}

export default Currencies