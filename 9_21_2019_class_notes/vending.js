/*Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.
*/

var snacks = [
    {name: "Snickers", cost: 1.25},
    {name: "Popcorn", cost: 1.00},
    {name: "Chewing Gum", cost: 0.25},
    {name: "Nuts", cost: 0.50},
    {name: "Cookies", cost: 1.70},
    {name: "Cup Noodles", cost: 2.25}
 ];
 var monies = [
    {currency: "Nickel", value: 0.05},
    {currency: "Dime", value: 0.10},
    {currency: "Quarter", value: 0.25},
    {currency: "Dollar", value: 1.00}
 ];
 var paidAmount = function(coins) {
    totalAmountPaid = 0;
    for (var i=0; i<coins.length; i++) {
        var coin = coins[i];
        if(coin == "Nickel") {
            totalAmountPaid += 0.05;
        } else if(coin == "Dime") {
            totalAmountPaid += 0.10;
        } else if(coin == "Quarter") {
            totalAmountPaid += 0.25;
        } else if(coin == "Dollar") {
            totalAmountPaid += 1.00;
        } else {
            console.log("Coin returned. Please try again.");
        }
    }
    return totalAmountPaid.toFixed(2);
 };



 var costAmount = function(item) {
    for (var i=0; i<snacks.length; i++) {
        var cost = 0;
        if(item == "Snickers") {
            cost = 1.25;
        } else if(item == "Popcorn") {
            cost = 1.00;
        } else if(item == "Chewing Gum") {
            cost = 0.25;
        } else if(item == "Nuts") {
            cost = 0.50;
        } else if(item == "Cookies") {
            cost = 1.70;
        } else if(item == "Cup Noodles") {
            cost = 2.25;
        } else {
            console.log("Invalid selection");
        }
    }
    return cost.toFixed(2);
 };


 
 var vendingItem = function(item, costAmount, paidAmount) {
    var message = "";
    var changeAmount = 0;
    console.log("Please make your selection: ");
    for (var i=0; i<snacks.length; i++) {
        console.log("- " + snacks[i].name + " $ " + snacks[i].cost.toFixed(2));
    };
    if (paidAmount < costAmount) {
        message = "Not enough $ paid. Please try again."
    } else if (paidAmount >= costAmount) {
        changeAmount = paidAmount - costAmount;
        message = "Here is your item: " + item + " plus $ " + changeAmount + " change";
    } else if (costAmount == 0) {
        message = "Here is your $ " + paidAmount + " money back";
    }
    return message;
 };
 console.log(vendingItem("Snickers", costAmount("Snickers"), paidAmount(["Dollar", "Dollar"])));


