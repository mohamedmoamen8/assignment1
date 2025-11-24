//task number 1
let Str = "123";
let Num = Number(Str) + 7;
console.log({ Num });
// tassk number 2
let Num1 = 0;
if (Num1 == false) {
  let Str1 = "ivaild";
  console.log({ Str1 });
}
// taskk number 3
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log({ i });
}
//taskk number 4
const Num2 = [2, 3, 5, 7, 8, 10, 120, 30, 40];
const Result = Num2.filter(checkEven);
function checkEven(Num2) {
  return Num2 % 2 == 0;
}
console.log({ Result });

//taskk number 5
const Arr1 = [1, 2, 3];
const Arr2 = [4, 5, 6];
const Arr3 = [...Arr1, ...Arr2];
console.log({ Arr3 });

//taskk number 6
var Day = 7;
switch (Day) {
  case 1:
    console.log({ Day }, "sunday");
    break;

  case 2:
    console.log({ Day }, "monday");
    break;
  case 3:
    console.log({ Day }, "thuesday");
    break;
  case 4:
    console.log({ Day }, "wednesday");
    break;
  case 5:
    console.log({ Day }, "thursday");
    break;
  case 6:
    console.log({ Day }, "friday");
    break;

  case 7:
    console.log({ Day }, "saturday");
    break;

  default:
    console.log({ Day }, "invaild");
    break;
}
// taskk number 7
const Arr4 = ["ab", "a", "abc"];
let Arr5 = Arr4.map((str) => str.length);
console.log(Arr5);

//taskk number 8
let Num3 = 60;
if (Num3 % 3 == 0 && Num3 % 5 == 0) {
  console.log("divided by both  ");
} else {
  console.log("not divded by both");
}
// task n 9
let val = 5;
let square = (x) => x * x;

console.log(square(val));
//task n 10
const user1 = {
  name1: "mohamed",
  age1: 21,
};
console.log(Object(user1.name1 + " is " + user1.age1 + " years old "));

//task n 11
function Multiple (...nums){
    let sum = 0;
    for (let n of  nums ){
        sum += n;
    }
    return sum
}
console.log((Multiple(5,6,7,10)))
//task n 13

const Arr9=[1,3,5,7,2,4]
let max =0;
for (let i = 1; i < Arr9.length; i++) {

    if (Arr9[i]>max) {
       max= Arr9[i];
    }
    
}
console.log(max)
//task n 14
const userInformation = {
  name: "mohamed",
  age: 21,
  gender: "male",
};
console.log(Object.keys(userInformation));
//task n 15
var text = "the quick brown fox";
var Arr8 = text.split(" ");
console.log(Arr8);
