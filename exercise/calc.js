/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById('billTotalInput')

const tipInput = document.getElementById('tipInput')

const numberOfPeople = document.getElementById('numberOfPeople')

const perPersonTotal = document.getElementById('perPersonTotal')







// Get number of people from number of people div

let numOfPeople = Number(numberOfPeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {

    const bill = Number(billInput.value)

    const tipPercentage = Number(tipInput.value) / 100


    const tipAmount = (bill * tipPercentage)
  
    const total = tipAmount + bill

  
    
  
    // calculate the per person total (total divided by number of people)

    const perPersonTotals = total / numOfPeople


  
    // update the perPersonTotal on DOM & show it to user

    perPersonTotal.innerText = `₱${perPersonTotals.toFixed(2)}`

  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {

    numOfPeople += 1
  
  
    // update the DOM with the new number of people
    numberOfPeople.innerText = numOfPeople
  
    // calculate the bill based on the new number of people

    calculateBill()
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    if (numOfPeople <= 1) {
        throw'sorry you cannot have less than 1 person!'
    }
    
    numOfPeople -= 1
  
    
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people

    numberOfPeople.innerText = numOfPeople
  
  
    // calculate the bill based on the new number of people

    calculateBill()
  
  }




// Add input event listener to the tip input field
tipInput.addEventListener('input', function(event) {
  // Get the input value
  const inputValue = event.target.value;
  
  // Remove any non-numeric characters from the input value using regular expression
  const numericValue = inputValue.replace(/[^0-9.]/g, '');
  
  // Update the input field value with the numeric value
  event.target.value = numericValue;
});

// Add input event listener to the tip input field
billInput.addEventListener('input', function(event) {
    // Get the input value
    const inputValue = event.target.value;
    
    // Remove any non-numeric characters from the input value using regular expression
    const numericValue = inputValue.replace(/[^0-9.]/g, '');
    
    // Update the input field value with the numeric value
    event.target.value = numericValue;
  });