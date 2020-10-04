// 1. Объекты







//! --- Создание объекта ---


// const arr = ["vfsddsf", {key: "gsdhjfds"}];
// console.log(arr)
// console.dir(arr);

// // 

// console.log("---------------------")

// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item.name)
// console.log(item["name"])
// console.dir(item)

// example ---------------------

// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число; 

// const cart = {
//      products: {
//          items:20,
//          price:10,
//      }

//     }
// console.log(cart.products)



//! --- Доступ к свойствам ---
// example ---------------------
// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item["characteristics"]["color"]);
// console.log(item["characteristics"].color);


// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: false,
// }
// console.log(user.name,user.age,user.status);
// console.log(user["name"], user["age"], user["status"]);

// let fn = function(dfdf) {
//     if (dfdf = "true") {
    
//     return dfdf="Пользователь находится в сети"
// } else if (dfdf = "false"){
//     return dfdf="Пользователь не в сети"
// }
// }
// console.log(fn(user.isOnline));
// Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами: 
//     через квадратные скобки;
//     как свойство объекта.
//  Если пользователь активный (isOnline) выведите в консоль 
// "Пользователь находится в сети" иначе "Пользователь не в сети"

//! --- Удаление свойств ---
// example ---------------------

// const item = {
//     "name hjfjhfd": "iphone",
//     name: "fargo",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// item["name hjfjhfd"] = "gjchdgc";
// console.log(item["name hjfjhfd"]);


// item.characteristics.isColored = true;
// console.log(item.characteristics);
// item.characteristics = ["fhggf"]
// console.log(item.characteristics);

// item.name = item.name.toUpperCase()
// console.log(item.name);
// // item.characteristics = 

// delete item.name;
// console.log(item);
// item.characteristics.weight = 320;

// console.log(item);




// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// delete user.status
// console.log(user);
// delete user.isOnline  
// console.log(user);

// Удалите єлементы "status" и "isOnline"


//! --- Отсутствующие свойства ---
// example ---------------------
// const item = {
//     name : "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item.dev)



// --- Короткие свойства ---

// const name = "Iphone";
// const price = 320;
// const color = "gray";
// const width = 120;


// const item = { name, price }

// console.log(item)

// example ---------------------

// task ------------------------
// const name = "Alex";
// const age = 25;

// const boy = { name, age }
// console.log(boy);

// Используя короткие свойства объектов создайте объект с полями "name", "age";


//! --- Вычисляемые свойства ---
// example ---------------------

// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item["name"])


// const key1 = "name";
// const key2 = "characteristics";

// console.log(item[key1])
// console.log(item["name"])
// console.log(item[key2])
// console.log(item["characteristics"])

// console.log(item.key)


// console.log("name" === "name")


// const item = {
//     "name": "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
//     fsdsfd: "daffdsf",
//     gdhhdfsjksfd: "sfdsdfsdsdf",
//     sfds: "fsddf",
// };


// console.log(item)

// const key = "name1";
// const key2 = "characteristics"
// console.log(item["name"]);
// console.log(item["characteristics"]);


// const keys = ["name", "characteristics"];

// for (const key of keys) {
//     console.log('item[key]', item[key])
// }
// -------------------------- example ---------------------

// const stuff = {
//     germany: "Mercedes",
//     usa: "Ford",
//     france: "Renault",
//     koreya: "Kia",
// }

// const products = {
//     germany: "1",
//     usa: "2",
//     france: "3",
//     koreya: "4",
// }

// stuff.ukraine = "Tavria";
// // console.log(stuff);

// const list = [
//     "usa",
//     "france",
//     "ukraine"
// ];

// for (const element of list) {
//     console.log("Stuff:", stuff[element]);
//     console.log("Products:", products[element]);
//     console.log("=========================")
// }



// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Выведите в консоль значения свойств объекта по ключам, которые находятся в массиве:
// const keys = ["name", "age", "status"];

// for (const key of keys) {
//     console.log( user["name"],user["age"],user["status"] );

// }


//! --- Методы объекта ---
// example ---------------------

// const nail = "гвоздь"

// const hummer = {
//     weight: 300,
//     length: 320,
//     height: 100,
//     bit: function (){
//         console.log(`Я забиваю ${nail}`);
//     },
//     bit() {
//         console.log(`Я забиваю ${nail}`);
//     },
// }

// hummer.bit();

// -----------------------------

// const person = {
//     name: "Alex",
//     age: 25,
//     getInfo: function(){
//         console.log("Name: Alex")
//         console.log("Age: 25")
//     }
// }
// person.getInfo()
// --------------------------

// const fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd = function (name, age) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }

// const person = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo: fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd
// }
// person.getInfo(person.name , person.age)


// console.log(person);

// person.getInfo(32,45);





// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
//     sayHello(){
//         console.log("Hello");
//     }
// }
// user.sayHello()

// Добавьте в объект user метод sayHello, который выводит в консоль приветствие: "Hello"
// Выведите в консоль результат


//! --- Доступ к объекту через this ---
// example ---------------------
// const fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd = function (name, age) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }

// -------------------------------------

// const person = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo: function () {
        
//     }
// }
// console.log(person);
// // -------------------------------

// const getInfo = function () {
//     console.group(`${this.name}'s info`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.groupEnd()
// }


// const user = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo
// };

// const user1 = {
//     name: "Nikita",
//     age: 35,
//     position: "teacher",
//     getInfo
// };

// user.getInfo();
// user1.getInfo();


// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
//     sayHello(){
//         console.group(`${this.name}`);
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`ID: ${this.id}`);
//         console.log(`Status: ${this.status}`);
//         console.log(`isOnline? ${this.isOnline}` );
//         console.groupEnd()
//     }
// }

// console.log(user.sayHello());

// Добавьте в объект user метод sayHello, 
// который выводит всю информацию о пользователе.
// Используйте console.group()


// ---------------------
// const products = {
//     items: []
// };

// products.items.push({name: "Milk", price: 30});
// products.items.push(["ssdds", "sfsdfsd"]);
// products.items.push("Bread");
// products.items.push("Meat");

// console.log(products)

// const saray = {
//     toolBox: [
//         {name: "hummer",
//          weight: 300, 
//          bit(){
//              console.log("72")
//          }
//         }, 

//         {name: "screwDriver",
//          weight: 100, 
//          screw(){
//              console.log("screw")
//          }
//         }, 
//     ]
// }
// saray.toolBox[0].bit();




// task ------------------------
// const apple = {
//     name:"apple",
//     price:1,
// };
// const pear = {
//     name:"pear",
//     price:6,
// };
// const melon = {
//     name:"melon",
//     price:2,
// };

// const cart = {
//     products:[],
//     amount:0,
//     price:0,
//     add(product) {
//         this.products.push(product.name)
//         this.price += product.price
//         this.amount += 1
//         }
// }
// cart.add(apple)
// cart.add(pear)
// cart.add(melon) 
// console.log(cart);

   
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число; 
// добавьте в корзину ( в поле products) несколько товаров(объектов);
// Создайте метод, который подсчитывает количество товаров в корзине и общую сумму.
// создайте метод, который логирует все продукты корзины 



// --------------------------------------------------------------------
//! 2. Перебор объекта

//! --- Цикл for...in ---


// const arr = [1, 2, 3, 4, 5];

// for(const number of arr) {
//     console.log(number)
// }


// ---------------------
// const user = {
//     name: "Alex",
//     age: 35,
// }

// const keys = [];

// for(const item in user){
//     keys.push(item); //["name", "age"]
//     keys.push(user[item])//["Alex", 35]
// }

// console.log(keys);

// // for (const key of keys) {
// //     console.log(user[key])
// // }








// --- Object.keys(), Object.values(), Object.entries() ---
    // const user = {
    //     name: "Alex",
    //     age: 35,
    //     getInfo(){
    //         console.log("Hello")
    //     }
    // }

    // const userKeys = Object.keys(user);
    // // const userKeys = ["name, "age"];

    // const userValues = Object.values(user);

    // const userEntries = Object.entries(user);
    
    // console.log(userKeys);
    // console.log(userValues);
    // console.log(userEntries);

// ----------------------------------------------------------------------

//! 3. Операция spread и rest

//! --- Операция spread ---
//! --- Распыление аргументов ---

//! --- Распыление массивов ---

//! --- Распыление объектов ---

//! --- Операция rest ---

// ------------------------------------------------------------------
//! 4. Деструктуризация

//! --- Деструктуризация объектов ---

//! --- Деструктуризация массивов ---