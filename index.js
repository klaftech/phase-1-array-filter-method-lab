// Code your solution here
const myTestDrivers = ['Bobby', 'Steve','Bobby'];

function findMatching(arrayDrivers,filterString){
    const result = arrayDrivers.filter((driver) => driver.toLowerCase() == filterString.toLowerCase())
    return result;
}

function fuzzyMatch(arrayDrivers,filterString){
    const result = arrayDrivers.filter((driver) => driver.toLowerCase().startsWith(filterString.toLowerCase()))
    return result;
}

function matchName(arrayDriverObjs,filterString){
    const result = arrayDriverObjs.filter((driverObj) => driverObj["name"].toLowerCase() == filterString.toLowerCase())
    return result;
}
//findMatching(myTestDrivers,"Bobby")