function exxercise(){
for(let i=0;i<5;i++){
    console.log("letssss::::",i);
}
// console.log("let::::",i);
}
// exxercise()
function exxercisesss(){
 for (var j=0;j<6;j++){
    console.log("fff",j);
 }  
 console.log("dxfcgvhbjnkm:",j);
}
// 


//prototye
// function Employee(){
    
//     var test1= function(){
//         console.log("Test111");
//     }
//     this.test2=function(){
//         console.log("test22")
//     }

// }

// var emp= new Employee();
// emp.test2();

// Employee.prototype.nam="Riya";
// Employee.prototype.test3=function(){
//     console.log(emp.nam);
// }
// emp.test3();
// console.log(emp.nam)
      


// class
class Person{
    constructor(names){
        this.names=names;
    }
    greet(){
        console.log("Welcome Pradeepa");
    }
}
class Student extends Person{

}
let std= new Student();
// std.greet();



console.log("start");
for(var i=0;i<10;i++){
(function(num){
    setTimeout(function(){
        console.log(num);
    }, i*1000)
})(i);
}
console.log("ENd");