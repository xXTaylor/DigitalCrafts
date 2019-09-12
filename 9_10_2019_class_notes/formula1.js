// The Formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically exetremly high in Sales
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.

var ARPA = 13;
var GrossMargin = 20;
var CCR= 2;
var LTV=(ARPA* GrossMargin/CCR);

console.log(LTV);  
