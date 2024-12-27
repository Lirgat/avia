const converter = (newCurrency, prevCurrency, prevValue) => {
    const rates = {
        USD: {
            RUB: 75,
            EUR: 0.85
        },
        RUB: {
            USD: 0.0133,
            EUR: 0.0113
        },
        EUR: {
            USD: 1.18,
            RUB: 88.30
        }
    };
    
    const conversionRate = rates[prevCurrency][newCurrency];
    const newValue = prevValue * conversionRate;

    return Math.round(newValue);
};

export default converter