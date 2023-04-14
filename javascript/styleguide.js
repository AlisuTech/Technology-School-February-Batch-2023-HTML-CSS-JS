// Naming Convention
// Pascal Case - FullName, LastName, NameOfSchool
// Camel Case - fullName,lastName, nameOfSchool
// Lower Case / Upper Case - FULLNAME, fullname
// separator Case - full_name, first_name, name_of_school

// Naming Variables - Camel Case or lower case

// Leave a space around operators
let add = 5 * 7

// Proper Indentation and Spacing within your code
function checkAgeGroup() {
    let age = 20
    if (age < 20) {
        console.log("You are an adult")
    }
    let list = [2, 3, 5]
    for (let x in list) {
        console.log(x)
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
    return true
}

// place your javascript code in a different file

// Always Initiatialise your variable
function addNumbers(){
    let x = 20
    let y = 30
    z=x+y
    areaOfCircle(8)
    areaOfCircle(10)
    areaOfCircle(20)
}

// User const for object that is not changing

function areaOfCircle(r){
    const schools=["UPH","UI","OAU"]
    const pi=3.142
    let area=pi * r**2
    schools.push("UNILAG")
    return area
}