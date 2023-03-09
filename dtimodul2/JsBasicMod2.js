var carName = "Volvo"
var x = 50
var y= 10
console.log(x+y)
var z=x+y
console.log(z)
console.log(5*10)
console.log(10/2)
console.log(15%2)//mod


//function
function myFunction(){
   return "hello";
}
console.log(myFunction())

//Object
// var car = {type : "Ford", wheel : "4"};
// console.log(car.wheel)
// var person= {firstname:"John",lastname:"Doe"};
// console.log(person.lastname)

//Arrays
var cars = ["saab", "volvo", "BMW"];
//dimulai dari 0
var name= cars[1];
//mengganti isi array
cars[0]="Ford";
console.log(cars.length)
console.log(cars[0])

//Conditional Statement
var greeting="";
var hour =13;
if(hour<13){
    greeting="Good day"
}
else {
    greeting="Okay"
}

// //OOP
// class person {
//     constructor(name){s
//         this.name=name;
//     }
//     //method to return the string
//     toString(){
//         return (`Name: ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name,id){
//         //super keyword to for calling above class constructor
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return (`${super.toString()}, Student ID: ${this.id}`);
//     }
// }
// let student1 = new student ('Hriday', 35)
// console.log(student1.toString())

// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }
//     add_Addres(add){
//         this.add = add;
//     }
//     getDetails(){
//         console.log(`Name is ${this.name}, Address is : ${this.add}`)
//         ; 
//     }
// }
// let person1 =new person('Mukul', 21);
// person1.add_Addres('Delhi');
// person1.getDetails();

// Construction and Object Instances
//************ Kinda old *************//
// function createNewPerson(name){
//     const obj ={};
//     obj.name = name;
//     obj.greeting = function(){
//         console.log('Hi! I\'m' + obj.name + '.');
//     };
//     return obj; 
// }

// //Create new person
// const calva = createNewPerson('Clava')
// calva.name;
// calva.greeting(); 

// //Shortcut
// function Building (height){
//     this.height = height;
//     this.alert = function(){
//         console.log(`be carefull, this building has ${this.height} m height`);
//     };
// }

// let building1 = new Building(2)
// let building2 = new Building(200)

// building1.alert();

//Inheritance JavaScript
function Person(first, last, age, gender, interest){
  this.name = {
      first,
      last
  };  
  this.age = age;
  this.gender = gender;
  this.interest = interest;
};

//The JavaScript prototype property also allows you to add new methods to objects constructors
Person.prototype.greeting = function() {
    console.log('Hi! I\m ' + this.name.first + '.');
}

function Teacher(first, last, age, gender, interest, subject){
    Person.call(this) //Call the parents

    this.subject = subject //add new property
}

let person1 = new Person ('Lulu','Mila','Female',['cook', 'dance'])
person1.greeting();



// class Person {

//     constructor(name) {
//       this.name = name;
//     }
//     introduce() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
  
//   }
  
//   const otto = new Person('Otto');
  
//   otto.introduce();

//JSON
// var superheroes = {
// "squadName" : "Super hero squad",
// "hometown" : "Metro City",
// "formed" : "2016",
// "secretBase" : "super tower",
// "active" : true,
// "members" :[
//     {
//     "name" :"molecule man",
//     "age": 29,
//     "secretidentity" : " Dan Jukes",
//     "powers" : [
//         "Radiation Resistance",
//         "turning tiny",
//         "radiation blast"
//     ]
// },
// ]
// };

// console.log(superheroes.hometown)
// console.log(superheroes.members[0].name)
// console.log(superheroes.members[0].powers.length)

// superheroes.members.push(
//     {
//     "name" :"superman",
//     "age": 29,
//     "secretidentity" : " Dan Jukes",
//     "powers" : [
//     "Radiation Resistance",
//     "turning tiny",
//     "radiation blast"]
//     }
// );
// console.log(superheroes.members[1].name)**/