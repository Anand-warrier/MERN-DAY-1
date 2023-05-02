//console.log("hi");
//console.log("second")
//var
//var a =10
//console.log(a)
//let  cannot reassign let variables
//let p=23;

// if block
//{
//    let b=23
//    console.log(b)
//}
//let b=25
//console.log(b)
//let b=10
//let c=20
// console.log(b%c)
// console.log(b*c)
// console.log(b+c)
// console.log(b-c)
// console.log(b/c)
// let a=10;
// var b=6;
// if(a==b){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// b=b+a;
// b+=a
// console.log(b)
// var a="hi"
// var b= "world"
// var c=a+b
// console.log(`my name is  ${a} ${b}`)//to provide spaces or other characters while conctatenation
//object and classes
// let car={
//     model:"alto",
//     color:"red",
//     price:"5.64l"

// }
// console.log(car.color)
// console.log(car.color+car.price)
// console .log(`the car is ${car.model} and ${car.color}`)
// let person={//person is name given not class
//     name:"anand",
//     college:"cce",
//     class:"s4",
//     address:{
//         hsname:" houseabce",
//         road:"abcd",
//         place:"tcr"
//     }

// }
// console.log(`${person.name} ${person.address.hsname}`)
// array
// let fruits=["apple","orange","a","b"]//any datatype can be mixed
// console.log(fruits[1])
// console.log(fruits.length)
// fruits.push("grapes")//push at back
// console.log(fruits)
// fruits.unshift("mango")//push at front
// console.log(fruits)
// fruits.pop()//remove last element
// console.log(fruits)
// fruits.shift()//remove from front
// console.log(fruits)

//array of objects

// let todo=[
//     {id:1,
//      task: "buy book"  

//     },
//     //no name given
//     {id:2,
//         task: "cleanhouse"  
   
//        },
//     {id:3,
//         task: "music"  
   
//        }
// ]
// console.log(todo)
// console.log(todo[1])
// console.log(todo[1].task)

//functions
// function Abo(a,b){
//     console.log(a*b)
// }
// let a=2
// let b =3
// Abo(a,b);
// function Abo1(a,b){
//     console.log(a-b)
// }

// Abo1(a,b);
// function Abo2(a,b){
//     console.log(a/b)
// }

// Abo2(a,b);

//functions easy way
// add = (a,b) => {
//     console .log(a ,b)
// }
// add(20,50)

// mul=(a,b) =>{
//     console.log(a*b)

// }
// mul(3,5)

// myfnc =(a,b) =>{
//     let c=a+b;
//     if(c>10){
//         console.log("greater than 10")
//     }
//     else{
//         console.log("less than 10")
//     }
// }
// myfnc(3,5)
// myfnc(10,1)

let numbers=[1,2,3,4,5,6,7]
console.log("forloop")
myfncfor = (a) =>{
for (var i=0;i<a.length;i++){
    console.log(a[i])

}}


myfncfor(numbers)


console.log("while")
myfncwhile = (a) =>{
var i=0;
while(i<a.length){
    console.log(a[i])
i++;}

}
myfncwhile(numbers)

console.log("dowhile")
myfncdowhile = (a) =>{
var i=0;
do{
    console.log(a[i])
i++;} while(i<a.length)

}
myfncdowhile(numbers)
