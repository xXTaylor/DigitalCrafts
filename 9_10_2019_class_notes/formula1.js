// The Formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically exetremly high in Sales
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.

var ltvFunction = function(ARPA,MM, churn) {

    var LTV=(ARPA* MM)/churn;
    return LTV;
}

console.log(ltvFunction(10, 2, 5));  

console.log("Steve thinks the LTV should be " + ltvFunction(5, 2, 10));

console.log("John thinks the LTV should be " + ltvFunction(7, 2, 10));
//
//
//Calculate Area of a Circle


var circleFunction = function(radius){
	var area= 3.14* radius* radius;
	return area;

}

console.log(circleFunction(2))

console.log(circleFunction(600))
