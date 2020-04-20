// Code your solution in this file

function findMatching(arrayDrivers, name) {
    // takes array of drivers and a string as args and returns matching list of drivers
    // case insensitive 

    // let result = arrayDrivers.filter(element => element === nameOfDriver)

    return arrayDrivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(arrayDrivers, letterToSearch) {
    let lengthOfSearch = letterToSearch.length
    return arrayDrivers.filter(function (letters) {
        return letters.slice(0,lengthOfSearch) === letterToSearch
    })
}

function matchName(arrayDrivers, name) {
    return arrayDrivers.filter(function (driverName) {
        return driverName.name.toLowerCase() === name.toLowerCase()
    })

}