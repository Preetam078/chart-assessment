// Currency options
export const currencyOptions = [
    { value: 'USD', label: 'USD ($)', rate: 1 },       // Base currency
    { value: 'EUR', label: 'EUR (€)', rate: 0.92 },    // Example conversion rates
    { value: 'INR', label: 'INR (₹)', rate: 83 },      // Example: 1 USD = 83 INR
    { value: 'GBP', label: 'GBP (£)', rate: 0.78 },
];

// Currency symbols
export const currencySymbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    INR: '₹',
    GBP: '£',
};
