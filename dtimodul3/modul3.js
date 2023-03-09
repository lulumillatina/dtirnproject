//JavaScript Variable
var array = [];
for (var i=0; i<3; i++){
    array.push(i);
}
console.log(array);
console.log(i);


//di dalam class function tidak perlu dideklarasikan
function penjumlahan(a,b){
    return a+b
}

//arrow function
//bisa pakai let atau var 
var perkalian = (a,b) => {
    return a*b
}

var hasil1=penjumlahan(2,3)
var hasil2=perkalian(2,3)

console.log(hasil1, 'dan' ,hasil2)

//class
class Car {
    constructor(brand){
        this.carname=brand;
    }
}
mycar= new Car("Ford")
mysecondcar= new Car("Honda")

console.log(mycar.carname)
console.log(mysecondcar.carname)

//super class dan sub class
class myclass{
    constructor(a=5){
        this.a=a;
    }
}
class class2 extends myclass{
    constructor(a,b){
        super(a);
        this.b=b;
    }
}
var myobj = new class2(2,16);

console.log("value of a "+ myobj.a);



//rest operator:memiliki paramater yang tidak terbatas
function sum (...theArgs){
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
    }
console.log(sum(1,2,3,10,12,17));

//array function
var numbers = [4,9,16,25,29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value >18;
}

console.log(first)

const myName = 'Dave'
const greeting = `Hello my name is ${myName}`;
console.log(greeting)
