// Dte , rest, spread, dom

// let date = new Date();


// console.log(typeof data);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.toTimeString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());


// Destructing

//let arr = [10,20,30,40,50];

// let num = arr[2]

//let [num1,num3]=arr;
//...is rest operator
//console.log(num1);
//console.log(num3);
//console.log(num1,num2);
let obj = {
  firstName :"Daivik",
  lastName :"Sharma",
  address:"jaipur",
  gender :"male"
}

let{firstName,address}=obj;

console.log(firstName);

let obj1 ={

}
//obj.firstName ="vinay"
obj1[firstName]="XYZ";
console.log(obj1);

