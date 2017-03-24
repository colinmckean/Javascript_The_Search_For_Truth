// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; //string
/* 1.3 */ true; //boolean
/* 1.4 */ []; //object
/* 1.5 */ {}; //object
/* 1.6 */ 1.1; //number
/* 1.7 */ var myVariable; //undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; //true
/* 2.4 */ NaN; //false
/* 2.5 */ []; //true
/* 2.6 */ {}; //true
/* 2.7 */ undefined; //false
/* 2.8 */ ""; //false
/* 2.9 */ 0; //false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number // 
var myNumber = 101;
// 3.2 Assign a variable that is a string // 
var myString = "HIYA";
// 3.3 Assign a variable that is a boolean // 
var howTrue = true;
// 3.4 Assign a variable that is an object 
var obj = {name: "Colin", age: 21, worldFamous: true};

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
console.log(howTrue ? "hello" : "bye");


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable // 
var firstAnimal = animals[0];
// 5.2. Assign the last element to a variable // 
var lastAnimal = animals[animals.length-1];
// 5.3. Assign the length of an array to a variable 
var arrLength = animals.length;
// 5.4. Add an item to the end of the array 
animals.push("cow");
// 5.5. Add an item to the start of the array
animals.unshift("horsey");
// 5.6. Assign the index of hedgehog to a variable
var indexOfHedgehog = animals.indexOf("hedgehog");

// Section 6

// 6.1 Create an array of 5 vegetables
var arrayOfFiveVegetables = ["carrot", "onion", "turnip", "spuds", "sprouts"];
// 6.2 Loop over the array and write to the console using a "while"
console.log(" ");
//making a space
var vegIndex = 0;
while(vegIndex < arrayOfFiveVegetables.length){
  console.log(arrayOfFiveVegetables[vegIndex]);
  vegIndex++;
}
// 6.3 Loop again using a "for" with a counter
console.log(" ");
//making a space
for(var counter = 0; counter < arrayOfFiveVegetables.length; counter++){
  console.log(arrayOfFiveVegetables[counter]);
}
// 6.4 Loop again using a "for of"
console.log(" ");
//making a space
for(veg of arrayOfFiveVegetables){
  console.log(veg);
}


// Section 7

var accounts = [
{ name: 'jay',
amount: 125.50,
type: 'personal'
},
{ name: 'val',
amount: 55125.10,
type: 'business'
},
{ name: 'marc',
amount: 400.00,
type: 'personal'
},
{ name: 'keith',
amount: 220.25,
type: 'business'
},
{ name: 'rick',
amount: 1.00,
type: 'personal'
},
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
function calculateTotalCash(accounts) {
    return accounts.reduce(function(acc, val){
        return acc + val.amount;
    }, 0);
}

console.log(calculateTotalCash(accounts))

// 7.2 Find the amount of money in the account with the largest balance
function findAmountOfMoneyWithTheLargestBalance(){
    return accounts.sort(function(a, b){return b.amount-a.amount})[0].amount.toFixed(2);
}

console.log(findAmountOfMoneyWithTheLargestBalance());

// 7.3 Find the name of the account with the smallest balance
function findTheNameOfTheAccountWithTheLowestBalance(){
    return accounts.sort(function(a, b){return a.amount-b.amount})[0].name;
}

console.log(findTheNameOfTheAccountWithTheLowestBalance(accounts));

// 7.4 Calculate the average bank account value
function calculateAverage(accounts){
    return (calculateTotalCash(accounts) / accounts.length).toFixed(2);
}

console.log(calculateAverage(accounts));

// 7.5 Find the value of marcs bank account
function findMarcsBankAccountValue(){
   return accounts.find(function(element) {
       return element.name === "marc";
   }).amount;
}

console.log(findMarcsBankAccountValue(accounts));

// 7.6 Find the holder of the largest bank account

function findTheHolderOfTheLargestBalance(accounts){
    return accounts.sort(function(a, b){return b.amount-a.amount})[0].name;
}

console.log(findTheHolderOfTheLargestBalance(accounts));

// 7.7 Calculate the total cash in business accounts
function findTheTotalCashInBusinessAccounts(accounts){
    var business_accounts = accounts.filter(function(account){
        return account.type === "business";
    });
    return calculateTotalCash(business_accounts);
}

console.log(findTheTotalCashInBusinessAccounts(accounts));

// 7.8 Find the largest personal account owner
function findTheLargestPersonalAccountOwner(accounts){
    var personal_accounts =  accounts.filter(function(account){
        return account.type === "personal";
    });
    return findTheHolderOfTheLargestBalance(personal_accounts);
}

console.log(findTheLargestPersonalAccountOwner(accounts));

// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var myPerson = {
  name: "colin",
  height: 6.5, 
  favouriteFood:
  "Cake", 
  eat: function(food){
    if(food === myPerson.favouriteFood){
      console.log("yay cake!");
    }else{
      console.log("yuk! what are you trying to feed me?!");
    }
  }
}
console.log(" ");
//making a space
myPerson.eat("Cake");
myPerson.eat("rainbows");

