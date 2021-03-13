
it('should calculate the monthly rate correctly', function () {
  let figures = {
      amount: 10000,
      years: 10,
      rate: 3.25
  };
  expect(calculateMonthlyPayment(figures)).toEqual('-70.64'); 
  
});

it("should return a result with 2 decimal places", function() {
  // ..
  let figures2 = {
      amount: 100,
      years: 2,
      rate: 2.0

  };
  expect(calculateMonthlyPayment(figures2)).toEqual('-4.09');
});

/// etc
