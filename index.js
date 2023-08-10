// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);   
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const returnLastTwoDrivers = function(drivers2) {
    return drivers2.slice(-2);   
  }
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(driversArray, driverSelectorFunction) {
    return driverSelectorFunction(driversArray);
  };
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
  console.log(fareDoubler(10)); 
  console.log(fareTripler(10)); 
  