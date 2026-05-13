// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //20
//     "togri boshliq tanlang va koproq hato qiling",//20-30
//     "uzingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investisiya qiling", //50-60
//     "endi dam oling foydasi yoq endi", //60
// ]

//  async function maslahatBering (a) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//             // setInterval(() => {
//             //     resolve(list[5]);
//             // }, 1000);
//         });
//         // setTimeout(function () {
//         //     return list[5];
//         // }, 5000);
//     }
//  }

//  //then/catch
// //  console.log("passed here 0");
// //  maslahatBering(25)
// //  .then((data) => {
// //    console.log("javob:", data);
// //  })
// //  .catch((err) => {
// //   console.log("ERROR:", err);
// //  });
// //  console.log("passed here 1");  

// //asyn/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob); 
// }
// run(); 




// console.log('+++++++++++++++++++');
// console.log("Train task !");
// console.log('+++++++++++++++++++++');

// //  MITTASK A

// let count = 0;
// function num(heart, inc) {
//     for (let i = 0; i < heart.length; i++) {
//         if (heart[i] === inc) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(num("Mimi", "i"));


//MITTASK-B

// console.log("====================");
// console.log("Train task 2");
// console.log("====================");

// let count = 0;

// function calculate(tutu) {
//  for(let i = 0; i < tutu.length; i++) {
//     if (tutu[i] <= 7 && tutu[i] >= 9) {
//         count ++
//     }
//   }
//     return count;
//  }
//  console.log(calculate("911cabriolet2027"));

//MITTASK-C

// const moment = require("moment");

// const realTime = moment().format('MMMM Do YYYY, h:mm a');

// class Shop {
//     constructor(same, same, same) {
     
//     }
// }



// const moment = require('moment');
// const time = moment().format('MMMM Do YYYY, h:mm a');

// class Shop {
  
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {  
//   console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!`);
// }

//   sotish(product, others) {
//     this[product] -= others;
//     console.log(`Hozir ${time}da ${this.non}ta non , ${this.lagmon}ta lag'mon va ${this.cola}ta cola sotildi!`);

//   }

//   qabul(product, others) {
//     this[product] += others;
//     console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola qabul qilindi!`);

//   }

// }
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();


//MITASK-D

// function angel(a, b) {
//   return a !== b
// }
 
// const result = angel("brazil", "brazil");
// console.log("next:", result);

// const list1 = [];
// const list2 = [];
// function angel(item1, item2) {
//     for (let i = 0; i < item1.length; i++) {
//         list1.push(item1[i])
//         list1.sort()
//     }

//     for (let i = 0; i < item2.length; i++) {
//         list2.push(item2[i])
//         list2.sort()
//     }

//     return list1.toString() == list2.toString()
 
// }

// console.log(angel("brazil", "arbzil"));

//MITASK-E

// function getReverse(angel) {
//     return angel.split('').reverse().join('');
// }
// console.log(getReverse("hello")); // "olleh"

//MITASK-F

// function findDoublers(an) {
//   for (let i = 0; i < an.length; i++) {
//     if (an.indexOf(an[i]) !== i) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDoublers("hello")); // true

//MITASK-G

// function getHighestIndex(a) {
//     let max = a[0];
//     let highestIndex = 0;

//     let i = 0;
//     for (let num of a) {
//         if (num > max) {
//             max = num;
//             highestIndex = i;
//         }
//         i++;
//     }

//     return highestIndex;
// }

// console.log(getHighestIndex([5, 21, 122, 12, 8])); //0 dan boshlab katta sonini indexi 2 boladi

// MITASK-H

function getPositive(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }

    return result;
}
console.log(getPositive([7, -7, 77]));