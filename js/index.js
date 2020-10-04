//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const fizzBuzz = function (n) {

//     for(let i=1; i <= n; i++){
// if (i%3 === 0 $$ i%5 === 0) {
//     console.log('fizzbus')
// } else if (i%3 === 0) {
//     console.log('fizz')
// } else if (!(!%5)) {
//     console.log('buzz')
// } else { 
//     console.log(i)
// }
//     }

// }
// console.log(fizzBuzz(2)); 

// const fizzBuzz = function(n) {
//     for (let i=1; i<=n; i ++) {
//         if ( i%3 === 0 $$ i%5 === 0){
//             console.log('fizzbuzz')
//         } else if (i%3 === 0) {
//             console.log('fizz')
//         } else if (!(i%5)) {
//             console.log('buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15)
// ============================= задача 2
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// let fn = function () {    
// for (const key in salaries) {
//     return
// } 
// }
// for (const key in salaries) {
//      sum += salaries[key]    }
   
// console.log(sum);


// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
//================================= задача 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let name = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     a: 1,
//   };
  
//   const multiplyNumeric = function (obj) {
//     for (const key in obj) {       
//         console.log(obj[key] );

//     if (typeof obj[key] === "number"){
//         obj[key] *=2
//         }
//   }
//   return obj
// }
//   console.log(multiplyNumeric(name));


//============================= кальккулятор

// const calculator = {
//     state:0,
//     plus(n) {
//         calculator.state+=n
//     },
//     minus(n) {
//         calculator.state-=n
//     },
//     mul(n) {
//         calculator.state*=n
//     },
//     div(n) {
//         calculator.state/=n
//     },
//     showResult() {
//         console.log(calculator.state);
//     }
// }

// let show = calculator.showResult;
// let plus = calculator.plus;
// let minus = calculator.minus;

// show();
// plus(2);
// show();

//========== практика


// const car = {
//     speed:0,
//     color:"",
//     isEnginOn: false,
//     isLightsOn: true,
//     turnEngineToggle(){
//         car.isEnginOn =!car.isEnginOn;
//         console.log(car.isEnginOn);
//     },
//         speedOn(n) {
//         car.isEnginOn ? car.speed += n : console.log('Заведите двигатель');
//         car.isEnginOn ? console.log(`Скорость увеличена на ${n} и равна ${car.speed}`): '';
//     },
//         speedOf() {
//         if (this.isEnginOn !== true ){
//             console.log(car.speed = 0);
//         }
        
//     },
    
//     lightsToggle(){
//         if (this.isEnginOn !== true ){
//             console.log(this.isLightsOn = false);
//         }
        
//     },
//     showResult(){
//         console.log(car.speed);
//     }
// }

// car.turnEngineToggle();
// car.speedOn(10)

// const workers = [
//     {name:'Alex', salary: 110, isActive: true },
//     {name:'Rita', salary: 100, isActive: false },
//     {name:'John', salary: 100, isActive: true },
//     {name:'Derek', salary: 200, isActive: false }    
  
// ]
// console.log(workers);
// for ( let i=0; i < workers.length; i += 1){
//     if ( workers[i].salary > 100 && !workers[i].isActive ) {
//         console.log(workers[i]);
//         console.log(i);
//         workers.splice(i,1)
//     }
// }
// console.log(workers);


// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
//======================================== Задача
// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня. 
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];
// const allNames = ['Изумруд','Бриллиант','Сапфир','Щебень']
// let summ = 0;
//  const stonePrice = function (array, stoneName) {
//      for (let i=0; i<array.length; i++) {
//           for (let j=0; j<stoneName.length; j++) {
//             array[i].name === stoneName[j]? summ += (array[i].price*array[i].quantity):"";
//          }         
//      }
//      return summ;
//  }
// console.log(stonePrice(stones,allNames));
let password = '';

do {
  password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);