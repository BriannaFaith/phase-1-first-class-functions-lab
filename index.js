const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0 , 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice (-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}
const createFareMultiplier = multiplier => fare => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
