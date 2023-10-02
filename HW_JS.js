// 1

let hamburger = 3;
let fries = 1;
if(fries >= 1 && hamburger >= 3){
console.log('Ми поїли');
}else{
        console.log('Ми йдемо в інше кафе');
    }


// 2
let price = 1889
if(price >= 1000 && price <= 1900){
    console.log('в потрібному діапазоні');
}else{
    console.log('змініть ціну');
}

// 3


let price1 = 1901;
if(price1<=1000){
    console.log('< 1000');
} else if (price1 <= 1900){
    console.log('< 1900');
} else {
    console.log('good job');
}


let price2 = 999;
if(price2 >= 1000 && price2 <= 1900){
console.log(`неправильный - ${price2}`)
} else {
    console.log(`good job - ${price2}`)
}

let price3 = 1901;
if(!(price3 <= 1000) && !(price3 >= 1900)){
console.log(`неправильный - ${price3}`)
} else {
    console.log(`good job - ${price3}`)
}
// 4

let season = 4;
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

// 5
let a = 40;
let b = 20;
let c = 10;
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



// 6

let day = 5
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

// 7

let x = 1000;
let y = 2;
x /= y
switch(x){
    case x -= y:
        console.log(x);
        break;
    case x += y:
        console.log(x);
        break;
    case x *= y:
        console.log(x);
        break;
    case x /= y:
        console.log(x);
        break;
    default:
        console.log('error!');
        break;
}

// 8
let myArray = 1;
for(myArray; myArray <= 5; myArray ++){
console.log([myArray])
}


// 9
for (let array = 1; array <= 9; array++) {
    if (array % 2 == 0) {
      console.log(array);
    }
  }

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 1; i < array3.length; i += 2){
    console.log(array3[i])
}  

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < array4.length; i += 2){
    console.log(array4[i])
}


for (let array2 = 1; array2 <= 9; array2++) {
    if (array2 % 2 == 1) {
      console.log(array2);
    }
  }

  // 10

  let total = 0;
  const myArr = [2, 3, 4, 5, 6];
  for(total; total < myArr.length; total++){
    console.log(myArr[total])
  }


  // 11

  const arr = [ [1, 2], [3, 4], [5, 6] ];
  for ( let i = 0; i < arr.length; i++){
    for(let a = 0; a < arr[i].length; a++){
        console.log(arr[i][a])
    } 
  }


  //12

  const arr1 = [[1, 2], [3, 4], [5, 6, 7]];
  let product = 1;
  for (a = 0; a < arr1.length; a++){
    for (let i = 0; i < arr1[a].length; i++){
        product *= arr1[a][i]
    }
  }
  console.log(product);

  // 13
  

  // 14



  