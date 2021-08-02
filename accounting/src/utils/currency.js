export const currency = (amount) =>
    new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(amount);
