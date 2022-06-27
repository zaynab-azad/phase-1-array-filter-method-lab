// Code your solution here
function findMatching(driversArray, nameToFind) {
    return driversArray.filter(driver => driver.toLowerCase() === nameToFind.toLowerCase())
    // const finalArray = [];
    // for (const driver of driversArray) {
    //     if (driver.toLowerCase() === nameToFind.toLowerCase()) { finalArray.push(driver) }
    // }
    // return finalArray
}