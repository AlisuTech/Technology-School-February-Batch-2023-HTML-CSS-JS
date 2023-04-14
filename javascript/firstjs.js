import { addNumbers } from "./newjs.js"

// Objects are compositions of a real life system

// Objects are collection of different variables

// Car Object - Make, Model, Number, Producer

 
console.log("start")
console.log(addNumbers(20,30,50))
let car = {
    make: "Toyota",
    model: "Camry",
    number: 97857,
    producer: "Toyota Inc."
}

let userObject = {
    firstname: "",
    lastname: "",
    gender: "",
    address: ""
}

let listObject = ["Tesla", "Toyota", "Mercedes Benz", "Chevrolet", "Volkswagen"]
let users = [
    {
        firstname: "Joy",
        lastname: "Nnadiegbulam",
        gender: "female",
        address: "PD"
    },

    {
        firstname: "Oniro",
        lastname: "Oburoh",
        gender: "female",
        address: "PH"
    },
    {
        firstname: "Lawrence",
        lastname: "Samuel",
        gender: "male",
        address: "Benue"
    }
]

export function testJson(){
    let json='{ "fullname":"Joy Chidinma", "age":22, "isFemale":true, "address":"Port Harcourt", "schoolDetails":{ "name":"Uni Port", "address":"Choba", "postalCode":500272, "viceChancellor":{ "name":"-", "address":"University Park", "sog":"Rivers" }, "faculties":["Engineering","Law","Medicine","Pharmacy","Management"] } }'
    let jsonObject=JSON.parse(json);
    console.log(jsonObject.fullname)
    console.log(jsonObject["fullname"])
    console.log(jsonObject.schoolDetails.viceChancellor.address)
    console.log(jsonObject["schoolDetails"]["viceChancellor"]["address"])
    document.getElementById("searchitems").innerHTML="<h1>Student Details</h1><h3>Name: <b>"+jsonObject.fullname+"</b></h3>"+"<h3>Age: <b>"+jsonObject.age+"</b></h3>"+"<h3>Address: <b>"+jsonObject.address+"</b></h3>"
}

export function testObjects() {
    try{
        console.log("JS"/20)
        console.log(addNumbers(10,5,10))
    }
    catch(err){
        console.log(err)
        console.log("An error occurred while trying to add numbers")
    }
    car.model = "Camry 2011"
    console.log(car.model)
}
function printUser() {
    let fname = document.getElementById("firstname").value
    let lname = document.getElementById("lastname").value
    let gender = document.getElementById("gender").value
    let address = document.getElementById("address").value
    userObject.firstname = fname
    userObject.lastname = lname
    userObject.gender = gender
    userObject.address = address
    userObject.fullname = fname + " " + lname
    console.log(userObject)
}
function accessList() {
    console.log(listObject[4]);
    for (let lcv = 0; lcv < listObject.length; lcv++) {
        const element = listObject[lcv];
        console.log(element)
    }

    for (let element in listObject) {
        console.log(listObject[element])
    }
    // Push - Adds items at the end
    users.push(
        {
            firstname: "Victory",
            lastname: "Ebere",
            gender: "female",
            address: "Imo"
        })

    for (let user in users) {
        console.log(users[user].firstname);
        console.log(users[user]["firstname"]);
    }
    // Pop - Removes Last Item
    users.pop()
    users.pop()
    // Shift - removes first item
    users.shift()
    for (let user in users) {
        console.log(users[user].firstname);
    }
    //Unshift - Adds an item at the beginning
    users.unshift(
        {
            firstname: "Vivian",
            lastname: "Ada",
            gender: "female",
            address: "Lagos"
        })
    for (let user in users) {
        console.log(users[user].firstname);
    }
}
function accessList_Contd(){
    let carMakes1=["Toyota", "Benz","Hyundai"]
    let carMake2=["Volkswagen", "Tesla"]
    let carMake3=["Mitsubishi", "Lexus"]
    let newList=carMakes1.concat(carMake2,carMake3)
    console.log(newList)

    carMakes1.splice(0,3,"Lexus")
    console.log(carMakes1)
    let newList2=newList.slice(3)
    console.log(newList2)

    newList.sort()
    console.log(newList)
    newList.reverse()
    console.log(newList)
}

function searchList(){
    let listOfNumbers=[10,20,40,99,11,9]
    const numAbove20=listOfNumbers.filter(numAbove20Func)
    console.log(numAbove20)

    let searchVar="tor"
    let listOfNames=["Ifeanyi","Lawrence","Joy","Oniro","Pablo","Victory","Victoria"]
    const namesWithtor=listOfNames.filter(namesWithtorFunc)
    console.log(namesWithtor)

    let name=""
    name.indexOf("")//if character is within the string then index >=0 else <0
}
function numAbove20Func(value){
    return value>20
}
function namesWithtorFunc(value){
    return value.indexOf("o")>=0
}
export function searchAction(){
    let searchId=document.getElementById("searchid").value.toLowerCase()
    let listOfNames=["Ifeanyi","Lawrence","Joy","Oniro","Pablo","Victory","Victoria","Immanuel","Abel","Deborah","Chidinma","Silas","Samuel"]
    const searchedNames=listOfNames.filter((x)=>x.toLowerCase().indexOf(searchId)>=0)//Anonymous Function
    document.getElementById("searchitems").innerText=searchedNames.join(", ")
}
function filterFunc(value){
    let searchId=document.getElementById("searchid").value.toLowerCase()
    return value.toLowerCase().indexOf(searchId)>=0
}

function mathFunctions(){
    console.log(Math.sin(60))
    console.log(Math.cos(30))
    console.log(Math.pow(30,2))
    console.log(Math.random()) //- Generates numbers between 0 to <1
    console.log(Math.floor(Math.random()))
    console.log(Math.floor(Math.random() * 10)) // 0 to <10
    console.log(Math.floor(Math.random() * 100)) //0 to <100
    console.log(Math.floor(Math.random() * 1000)) //0 to <1000
    console.log(new Date())
    document.getElementById("searchitems").innerText=new Date()
    console.log(new Date(2023,3,20))
    console.log(new Date(2023,3,20,15,50,0))
    console.log(new Date(2023,3,20,15,50,0).toDateString())
    console.log(new Date(2023,3,20,15,50,0).toISOString ())
    console.log(new Date(2023,3,20,15,50,0).toString())
    console.log(new Date(2023,3,20,15,50,0).toUTCString())
}

// JSON - JavaScript Object Notation