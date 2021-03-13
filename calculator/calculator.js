window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
    let initialValues = {amount: 100, years: 2, rate: 2.0}
    // get amount from dom
    let domAmount = document.getElementById("loan-amount");
    domAmount.value = initialValues.amount;
    // get years from dom
    let domYears = document.getElementById("loan-years");
    domYears.value = initialValues.years;
    // get rate from dom
    let domRate = document.getElementById("loan-rate");
    domRate.value = initialValues.rate;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let currentValues = getCurrentUIValues();
    // Now update values in updateMonthly calculator
    updateMonthly(calculateMonthlyPayment(currentValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let ratePerMonth = values.rate/1200;
    let powerNumber = Math.floor(values.years * 12);
    let goesToTop = ratePerMonth * values.amount;
    let goesToBottom = (1 - Math.pow((1 + ratePerMonth), powerNumber));
    return (goesToTop/goesToBottom).toFixed(2); // Not my concept for toFixed
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    let monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.innerText = monthly;
}
