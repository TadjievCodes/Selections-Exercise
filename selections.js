const Tadjiev = prompt("What's your name?", "Muhammed");



//const askingUser = parseInt(prompt("Enter the integer number please?"));

/*if (askingUser % 2 === 0) {
    console.log(askingUser);
}*/


//Function to determine whether its an odd or even number

function findOddEven() {
    //get the input value
    var num = document.getElementById('num').value;

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if (num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is an Even number';
    } else {
        document.getElementById('result').innerHTML = num + ' is an Odd number';
    }
}








/*

const higherLowerInteger = integer(prompt("Enter two integer numbers please?"));

function integer(a, b) {
    var message = " ";
    if (a >= 0 && b >= 0) {
        if (a != b) {
            message = "The larger number is " + Math.max(a, b);
        } else {
            message = "Both numbers are equal!";
        }
    } else {
        message = "Please add an integer!";
    }
}




console.log(integer(-1, -1));

*/


//Main Function I'm trying to solve
/*
var firstOne = integer(parseInt(prompt("Enter an integer number please?"), parseInt(prompt("Enter another integer number please?"))));
//var secondOne = integer(prompt("Enter another integer number please?"));

function integer(a, b) {
    var message = " ";
    console.log(typeof a);
    console.log(typeof b);
    if (a >= 0 && b >= 0) {
        if (a != b) {
            message = "The larger number is " + Math.max(a, b);
        } else {
            message = "Both numbers are equal!";
        }
    } else {
        message = "Please add an integer!";
    }
    return message; // This bit was missing
}
//var aLetter = -1;
//var bLetter = -1;

//console.log(integer(2, 2));
//console.log(integer(firstOne, secondOne, aLetter, bLetter));
console.log(firstOne);
//console.log(integer(2, 3));

*/

/*

 const question1 = function() {
    var asking = prompt("Enter an integer number please?");
    var message = " ";
    if (a >= 0 && b >= 0) {
        if (a != b) {
            message = "The larger number is " + Math.max(a, b);
        } else {
            message = "Both numbers are equal!";
        }
    } else {
        message = "Please add an integer!";
        return message; // This bit was missing
    }
    // return message; // This bit was missing

};

*/







/*

// Wes Functions Exercise

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log("Running Calculate Bill!!");
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;

}


const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function calling or Running part
//const myTotal = calculateBill(100, 0.13);
//const myTotal2 = calculateBill(200, 0.13);
//console.log(myTotal, myTotal2);





// Funcion Definition

function sayHiTo(firstName) {
    return `Hello ${firstName}`;

}

const greeting = sayHiTo("Wes");
console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

*/















/*for (i = 1; i < 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}  */




/*
var higherLowerInteger = integer(prompt("Enter two integer numbers please?"));

function integer(numbers) {
    var numArr = numbers.split(',');
    var a = numArr[0];
    var b = numArr[1];
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else if (a === b) {
        return 'equal';
    }
}
console.log(higherLowerInteger);
*/
/*

const firstOne = integer(prompt("Enter an integer number please?"));
const secondOne = integer(prompt("Enter another integer number please?"));

function integer(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else if (a === b) {
        return 'equal';
    }
}
console.log(integer(firstOne, secondOne));

*/



/*
// Simple calculation own example
function laugh(Tax, price) {
    var calculation = Tax * price;
    //var answer = "hahahahahahahahahaha!";
    return calculation;
}

console.log(laugh(0.13, 50));

*/
/*
function laugh(num) {
    for (var counter = 0; counter <= num.length; counter++) {



    }
    return counter;
}
console.log(laugh(3));
*/


var a = parseInt(prompt("Enter an integer number please?"));
var b = parseInt(prompt("Enter another integer number please?"));
var message = "Greatest num ";
if (a > b) {
    console.log(message + a)
} else if (a < b) {
    console.log(message + b)
}


//var andrew = (10 > 9); // So as it;s correct this variable just returns true on the console

///

/*
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").onclick = "count";
});

let counter = 0;

function count() {
    counter++;
    document.querySelectorAll("#counter").innerHTML = "counter";
}

*/