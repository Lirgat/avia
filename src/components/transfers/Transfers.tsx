import React, { FC, JSX } from "react";
import style from "./style.module.css"

const Transfers:FC = ():JSX.Element => {



    return (
        <div className={ style.TransfersBlock }>
            <h1 className={ style.TransfersBlock_h1 }>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            <div className={ style.Checkboxes }>
                <div className={style.Checkbox}>
                    <input id="all" type="checkbox" className={ style.Checkbox_input }/>
                    <label htmlFor="all" className={style.Checkbox_label}>Все</label>
                </div>
                <div className={style.Checkbox}>
                    <input id="without-transfers" type="checkbox" className={ style.Checkbox_input } />
                    <label htmlFor="without-transfers" className={style.Checkbox_label}>Без пересадок <span className={style.Checkbox_label_span}>ТОЛЬКО</span></label>
                </div>
                <div className={style.Checkbox}>
                    <input id="1-transfer" type="checkbox" className={ style.Checkbox_input } />
                    <label htmlFor="1-transfer" className={style.Checkbox_label}>1 пересадка</label>
                </div>
                <div className={style.Checkbox}>
                    <input id="2&more-transfers" type="checkbox" className={ style.Checkbox_input } />
                    <label htmlFor="2&more-transfers" className={style.Checkbox_label}>2 и более</label>
                </div>
            </div>
        </div>
    )
}

export default Transfers