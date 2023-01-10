// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //return customerName
    }

//var bestCustomer
function setBestCustomer(){
    globalThis.bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'asdf';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob'
}