export function formatNumber(num:number | string) {
    if (typeof num === 'string' && !/^\d+$/.test(num)) {
        return num; // Return as-is if it's not a valid number
    }

    num = Number(num); // Convert to actual number

    if (isNaN(num)) return num; // Edge case: If conversion fails, return original

    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    
    return num.toString(); // Return as string
}