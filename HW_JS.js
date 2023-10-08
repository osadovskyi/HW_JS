// 1

// let hamburger = 3;
// let fries = 1;

function eat (hamburger, fries) {
    if(fries >= 1 && hamburger >= 3){
        console.log('Ми поїли');
        }else{
                console.log('Ми йдемо в інше кафе');
            }
}

eat(3, 1)



// 2
// let price = 1905
function price1(price){
    if(price >= 1000 && price <= 1900){
        console.log('в потрібному діапазоні');
    }else{
        console.log('змініть ціну');
    }
}
price1(99)

// 3


let price2 = 1901;

if(price2<=1000){
    console.log('< 1000');
} else if (price2 <= 1900){
    console.log('< 1900');
} else {
    console.log('good job');
}


// let price2 = 1899;
function priceList(price2) {
    if(price2 <= 1000 || price2 >= 1900){
        console.log(`в потрібному діапазоні - ${price2}`)
        } else {
            console.log(`змініть ціну - ${price2}`)
        }
}
priceList(1899)


// let price3 = 1900;

function priceList2(price3) {
    if(!(price3 >= 1000) || !(price3 <= 1900)){
        console.log(`в потрібному діапазоні - ${price3}`)
        } else {
            console.log(`змініть ціну - ${price3}`)
        }
}
priceList2(1111)

// 4

// let season = 4;
function seasonsOfTheYear(season) {
    if(season == 1){
        console.log('winter');
    } else if (season == 2){
        console.log('spring');
    } else if (season == 3) {
        console.log('summer');
    } else if (season == 4) {
        console.log('autumn');
    } else {
        console.log('unexpected season!');
    }
}
seasonsOfTheYear(3)

// 5
// let a = 40;
// let b = 20;
// let c = 10;

function average(a, b, c) {
    if (a > b) {
        if (a < c) {
            console.log(a);
        } else if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    } else {
        if (b < c) {
            console.log(b);
        } else if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    }
}
average(11, 5, 6)



// 6

// let day = 8

function week(day) {
    switch(day){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Tuesday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('unexpected day');
            break;
    }
}
week(6)


// 7

let x = 1000;
let y = 2;
le
x += y

function calculator(x, y) {
let c = x *= y
    switch(x){
        case x -= y:
            console.log(c);
            break;
        case x += y:
            console.log(c);
            break;
        case x *= y:
            console.log(c);
            break;
        case x /= y:
            console.log(c);
            break;
        default:
            console.log('error!');
            break;
    }
}
calculator(10, 5)

// 8
function arr1() {
    let myArray = [];
    for(let i = 1; i <= 5; i++){
    myArray.push(i);
    }
    console.log(myArray)
}
arr1()


// 9

function arr2() {
    let array3 = []
    for (let i = 1; i < 10; i += 2){
        array3.push(i);
        
    }
    console.log(array3)
}
arr2()


function arr3() {
    let array4 = []
    for (let i = 2; i < 10; i += 2){
        array4.push(i);
        
    }
    console.log(array4)
}
arr3()


  // 10
    let arr4 = () => {
        let total = 0;
        const myArr = [2, 3, 4, 5, 6];
        for(total; total < myArr.length; total++){
          console.log(myArr[total])
        } 
    }
arr4()


  // 11
function arr5() {
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    for ( let i = 0; i < arr.length; i++){
      for(let a = 0; a < arr[i].length; a++){
          console.log(arr[i][a])
      } 
    }
}
arr5()



  //12
function sum() {
    const arr1 = [[1, 2], [3, 4], [5, 6, 7]];
    let product = 1;
    for (a = 0; a < arr1.length; a++){
      for (let i = 0; i < arr1[a].length; i++){
          product += arr1[a][i]
      }
    }
    console.log(product);
}
sum()

  // 13 ці рішення з інтрнету, сам не зміг зробити
  
  function removeVowels(word) {
    const vowelsRegex = /[aeiou]/gi;
    let result = word.replace(vowelsRegex, '');
    return result;
  }
  
  word = "test";
  console.log(removeVowels(word)); 


  let disemvowel = (str) => str.replace(/[aeiouy]/gi, '')

console.log(disemvowel('create'));



  // 14


//   let meters = 1000;
//   let kilometers = meters / 1000
//   let secondPart = 'метри це'

function solution(meters) {
    let kilometers = meters / 1000
    let secondPart = 'метри це'
    if (meters >= 2000 && meters < 4000) {
        console.log(meters + ` ${secondPart} ` + kilometers + " кілометри");
      } else if (meters < 1000) {
        console.log(meters + ` ${secondPart} ` + kilometers + " кілометра");
      } else if (meters >= 5000) {
        console.log(meters + ` ${secondPart} ` + kilometers + " кілометрів")
      } else 
        console.log(meters + ` ${secondPart} ` + kilometers + " кілометр")
}
solution(900)


  

