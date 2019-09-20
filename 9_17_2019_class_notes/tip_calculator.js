// Step 1) Points Calculator

// Design a away for calculating the amount of points the waiter has earned. Each of the following activities will score the waiter/waitress a 1 point each:
// - Did the waiter greet you?
// - Did they bring bread/water to start?
// - They check on drink refills?
// - Did they check if the food was ok?
// - Were they prompt in getting the check?

var surveyAnswer;
var ratingPoint;


var greeting = function (surveyAnswer) {
    if (surveyAnswer == "yes") {
        return true;
    }  else {
        return false;
    }
};

var breadandwater = function (surveyAnswer) {
    if (surveyAnswer == "yes") {
        return true;
    } else {
        return false;
    }
};


var refill = function (surveyAnswer) {
    if (surveyAnswer == "yes") {
        return true;
    } else  {
        return false;
    }
};

var check = function (surveyAnswer) {
    if (surveyAnswer == "yes") {
        return true;
    } else {
        return false;
    }
};

var prompt = function (surveyAnswer) {
    if (surveyAnswer == "yes") {
        return true;
    } else  {
        return false;
    }
};


var pointsCalc = function(greeting, breadandwater, refill, check, prompt) {
    var ratings = [];
    var totalPoints = 0;


    if (greeting == "yes") {
        ratings.push(1);
    } else {
        ratings.push(0);
    }

    if (breadandwater == "yes") {
        ratings.push(1);
    } else {
        ratings.push(0);
    }

    if (refill == "yes") {
        ratings.push(1);
    } else {
        ratings.push(0);
    }

    if (check == "yes") {
        ratings.push(1);
    } else {
        ratings.push(0);
    }

    if (prompt == "yes") {
        ratings.push(1);
    } else {
        ratings.push(0);
    }

    for (var i = 0; i < ratings.length; i++) {
        totalPoints += ratings[i];
    }

    return totalPoints;

}

console.log(pointsCalc("yes", "no", "yes", "no", "yes"));
console.log(pointsCalc("no", "no", "no", "no", "no"));
console.log(pointsCalc("yes", "yes", "yes", "yes", "yes"));




// Step 2) Design A Tip Calculator

// Design a way for calculating the tip. The tip should take the total bill and given the waiter/waitress a percentage based on the points. The tip should be calculated as follows:
// 0 points - 1% tip.
// 1 points - 2% tip
// 2 points - 4% tip
// 3 points - 7% tip
// 4 points - 10 % tip
// 5 points - 15% tip



function tipCalculator(bill, pointsCalc) {
    var bill;
    var tip;
    var totalBill;
    var message;

    if (pointsCalc == 0) {
        tip = bill * 0.01;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    if (pointsCalc == 1) {
        tip = bill * 0.02;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    if (pointsCalc == 2 ) {
        tip = bill * 0.04;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    if (pointsCalc == 3) {
        tip = bill * 0.07;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    if (pointsCalc == 4) {
        tip = bill * 0.1;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    if (pointsCalc == 5) {
        tip = bill * 0.15;
        totalBill = bill + tip;
        message = "Based on your rating, your total bill is: $ " + totalBill;
    }

    return message;
}

console.log(tipCalculator(120, pointsCalc("yes", "no", "yes", "no", "yes")));
console.log(tipCalculator(120, pointsCalc("no", "no", "no", "no", "no")));
console.log(tipCalculator(120, pointsCalc("yes", "yes", "yes", "yes", "yes")));
