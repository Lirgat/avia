import React, { FC, JSX, useEffect, useState } from "react";
import style from "./style.module.css";
import { TransfersProps } from "../../types";

const Transfers: FC<TransfersProps> = ({ filters, onFilterChange }): JSX.Element => {
    const [localFilters, setLocalFilters] = useState(filters);

    const handleCheckboxChange = (filter: string) => {
        const newValue = !localFilters[filter];

        // Если изменяется состояние "1 пересадка" или "2 и более", сбрасываем "Все" и "Без пересадок"
        if (filter === "oneTransfer" || filter === "twoOrMoreTransfers") {
            setLocalFilters((prev) => ({
                ...prev,
                all: false,
                withoutTransfers: false,
                [filter]: newValue,
            }));
            onFilterChange("all", false);
            onFilterChange("withoutTransfers", false);
            onFilterChange(filter, newValue);
        } else {
            setLocalFilters((prev) => ({
                ...prev,
                [filter]: newValue,
            }));
            onFilterChange(filter, newValue);
        }
    };

    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    return (
        <div className={style.TransfersBlock}>
            <h1 className={style.TransfersBlock_h1}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            <div className={style.Checkboxes}>
                <div className={style.Checkbox}>
                    <input
                        id="all"
                        type="checkbox"
                        className={style.Checkbox_input}
                        checked={localFilters.all}
                        onChange={() => handleCheckboxChange("all")}
                    />
                    <label htmlFor="all" className={style.Checkbox_label}>Все</label>
                </div>
                <div className={style.Checkbox}>
                    <input
                        id="without-transfers"
                        type="checkbox"
                        className={style.Checkbox_input}
                        checked={localFilters.withoutTransfers}
                        onChange={() => handleCheckboxChange("withoutTransfers")}
                    />
                    <label htmlFor="without-transfers" className={style.Checkbox_label}>Без пересадок <span className={style.Checkbox_label_span}>ТОЛЬКО</span></label>
                </div>
                <div className={style.Checkbox}>
                    <input
                        id="1-transfer"
                        type="checkbox"
                        className={style.Checkbox_input}
                        checked={localFilters.oneTransfer}
                        onChange={() => handleCheckboxChange("oneTransfer")}
                    />
                    <label htmlFor="1-transfer" className={style.Checkbox_label}>1 пересадка</label>
                </div>
                <div className={style.Checkbox}>
                    <input
                        id="2&more-transfers"
                        type="checkbox"
                        className={style.Checkbox_input}
                        checked={localFilters.twoOrMoreTransfers}
                        onChange={() => handleCheckboxChange("twoOrMoreTransfers")}
                    />
                    <label htmlFor="2&more-transfers" className={style.Checkbox_label}>2 и более</label>
                </div>
            </div>
        </div>
    );
};

export default Transfers;