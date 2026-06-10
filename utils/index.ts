export const formatCurrency = (amount: number, hasDecimal: boolean = true) => {
    return amount.toLocaleString('en-US',  hasDecimal ? {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    } : {})
}