// Створіть змінну str і дайте їй значення 'abcde'. 
// Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// const str =`abcde`;
// alert(str[0]);
// alert(str[1]);
// alert(str[str.length - 1]);

// Напишіть інструкцию, яка приймає рядок як аргумент 
// і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
//const str = "string not starting with capital";

// const str = "string not starting with capital";
// const value = str.slice(1);
// const final = str[0].toUpperCase() + value;

// const value = str.replace('s', 'S')
// console.log(value)

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;

// let num = 1;
// num +=  12;
// num -=  14;
// num *=  5;
// num /=  7;
// num ++;
// num --;

/*
 * Шаблонные строки
 * Написать фразу с помощью конкатенации и шаблонных строк
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
 */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';
// // const massege =  
// // console.log(massege)
// const new_massege = "Hello, my name is" + name + ", I'm" + age + "years old and I like" + body
// console.log(new_massege)

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

// let salary = +prompt("Enter your salary");
// salary *= 1.15;
// alert(`your salary  + bonus is ${salary}`);
// salary *= 0.9;
// alert(`your salary + bonus after tax is ${salary}`);
// salary -= 190;
// alert(`after shoping ${salary}`);
// salary /= 2;
// alert(`after give your wife ${salary}`);
// console.log(salary);


//Створіть функцію endsWith(), яка порівнює підрядок str1 із закінченням вихідного рядка
//str і визначає чи закінчується рядок символами підрядка.
// const str = "Кожен мисливець бажає знати";
// const str1 = "скрипт";
// const str2 = "знати";

// function endsWith(str, substring) {
//     return str.endsWith(substring);

// }

// function endsWith(str, substring) {
//     return str.includes(substring, -substring.length)


// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.
// let sum = 0
// for(let i = 0; i <= 10; i += 1) {
//     sum += i
// }
// console.log(sum);

// let index = 0;
// let sum2 = 0;

// while(index <= 10){
//     sum2 += index;
//     index += 1;
// }

// console.log(sum2);


// let value = 0;
// let sum3 = 0;

// do {
//     sum3 += value;
//     value += 1;
// }while(value <= 10)

// console.log(sum3)


// ??????????????????????????????????????????????????????
// 24

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     }else if(totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     }else if(totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     }else {
//         discount = BASE_DISCOUNT;
//     };
//     // Change code above this line
//     return discount;
//     console.log(discount);
//   }


// getDiscount(137000)
// getDiscount(46900)
// getDiscount(8250)
// getDiscount(1300)
// getDiscount(5000)
// getDiscount(20000)
// getDiscount(50000)
// ?????????????????????????????????????????????


// 25

// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? "Not enough goods in stock!" :  "The order is accepted, our manager will contact you";

//     return message;
//     console.log(message)
//   }
// checkStorage(100, 50) 
// checkStorage(100, 130)
// checkStorage(200, 20)
// checkStorage(200, 150)
// checkStorage(150, 180)


// 26

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     return console.log(message);
//   }

// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

// 27

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case  "starter":// Change this line
//         price = 0; // Change this line
//         break;
  
//       case  "professional":// Change this line
//         price = 20; // Change this line
//         break;
  
//       case  "organization":// Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return console.log(price);
//   }
// getSubscriptionPrice("professional")
// getSubscriptionPrice("organization")
// getSubscriptionPrice("starter")

// 28

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
    // switch (password) { // Change this line
    //     case  null:// Change this line
    //     message = "Canceled by user!"; // Change this line
        
    //     break;
    
    //     case ADMIN_PASSWORD:// Change this line
    //     message = "Welcome!"; // Change this line
        
    //     break;
    
    //     default:
    //     message = "Access denied, wrong password!";

        
    // }
  
//     // Change code above this line
//     console.log(message);
//   }

// checkPassword("mangohackzor")
// checkPassword(null)
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// 29

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
    

//     switch (country) { 
//         case  'China':
//         message = `Shipping to ${country} will cost 100 credits`; 
//         break;

//         case  'Chile':
//         message = `Shipping to ${country} will cost 250 credits`; 
//         break;

//         case  'Australia':
//         message = `Shipping to ${country} will cost 170 credits`; 
//         break;  

//         case  'Jamaica':
//         message = `Shipping to ${country} will cost 120 credits`; 
//         break; 

        
//         default:
//         message = "Sorry, there is no delivery to your country";


//     }
//     // Change code above this line
//     return console.log(message); 
//     // console.log(message)
// }


// getShippingCost("Australia")
// getShippingCost("Germany")
// getShippingCost("China")
// getShippingCost("Chile")
// getShippingCost("Jamaica")
// getShippingCost("Sweden")

// 30

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
//     // return message;
//     return console.log(message);
//   }

// getNameLength("Poly")
// getNameLength("Harambe")
// getNameLength("Billy")
// getNameLength("Joe")

// 31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// // Объявлена переменная courseTopic
// // Значение переменной courseTopic это строка "JavaScript essentials"
// // Объявлена переменная courseTopicLength
// // Значение переменной courseTopicLength это число 21
// // Объявлена переменная firstElement
// // Значение переменной firstElement это строка "J"
// // Объявлена переменная lastElement
// // Значение переменной lastElement это строка "s"
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// 32

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
  
//     // return substring;
//     return console.log(substring);;

//   }

// getSubstring("Hello world", 3)
// getSubstring("Hello world", 6)
// getSubstring("Hello world", 8)
// getSubstring("Hello world", 11)
// getSubstring("Hello world", 0)

// 33

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//     if (message.length > maxLength) {
//         result = `${message.slice(0, maxLength)}` + "..."
//     } else {
//         result = message
//     }
//     /// Change code above this line
//     // return result;
//     return console.log(result)
//   }
  
// formatMessage("Curabitur ligula sapien", 16)
// formatMessage("Curabitur ligula sapien", 23)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 30)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

// 34

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     // return normalizedInput;
//     return console.log(normalizedInput)
//   }

// normalizeInput("Hello world")
// normalizeInput("This ISN'T SpaM")
// normalizeInput("Big SALE")

// 35
// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     //  return result;
//      return console.log(result)
//    }

// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// checkForName("Egor Kolbasov", "egOr")
// checkForName("Egor Kolbasov", "Zhenya")
// checkForName("Vadim Nekrasov", "Vadim")
// checkForName("Vadim Nekrasov", "vadim")
// checkForName("Vadim Nekrasov", "Dima")

// 36

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
    
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
//     // Change code above this line
//     // return result;
//     return console.log(result)
//   }

// checkForSpam("Latest technology news")
// checkForSpam("JavaScript weekly newsletter")
// checkForSpam("Get best sale offers now!")
// checkForSpam("Amazing SalE, only tonight!")
// checkForSpam("Trust me, this is not a spam message")
// checkForSpam("Get rid of sPaM emails. Our book in on sale!")
// checkForSpam("[SPAM] How to earn fast money?")
  
// --------------------------------------------------------------------------------
//    MODUL 2
// --------------------------------------------------------------------------------
// 1


// function checkAge(age) {
//     if (age >= 18) { // Change this line
//     //   return "You are an adult";
//       return console.log("You are an adult")
//     }
  
//     // return "You are a minor";
//     return console.log("You are a minor")
//   }

// checkAge(20) 
// checkAge(8)
// checkAge(14)
// checkAge(38) 


// 2

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
    
  
//     if (password === ADMIN_PASSWORD) {
//     //   return "Welcome!";
//       return console.log("Welcome!")
//     } 
        
    
  
//     // return "Access denied, wrong password!";
//     return console.log("Access denied, wrong password!")
//     // Change code above this line
//   }


// checkPassword("mangohackzor")
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// 3

// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//         // return "Your order is empty!";
//         return console.log("Your order is empty!")
//     } 
    
//     if (ordered > available) {
//         // return "Your order is too large, not enough goods in stock!";
//         return console.log("Your order is too large, not enough goods in stock!")
//     } 

//     // return "The order is accepted, our manager will contact you";
    
  
    
//     return console.log("The order is accepted, our manager will contact you")
//     // Change code above this line
// }

// checkStorage(100, 50)
// checkStorage(100, 130) 
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250) 
// checkStorage(150, 0)

// task 7

// let langs = ['cherry','apple','date', 'banana',];

// // const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]){
//             max = langs[j];
            
//         }
//     }
//     result.push(max)
//     // const delt= langs.splice(langs[i],1)
    

// }
// console.log(langs);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];


// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i] > langs[j]) {            
//             langs[i] = langs[j];
//             langs[j] = max;
//         }
//     }
//     result.push(max);
// }

// console.log(result)
// +++++++++++++++++++++++++++++++++++++++++++++TASK 7+++++++++++++++++++++++++++
// let langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// function sortLetter(langs) {  
//   let max;
//   for (let i = 0; i < langs.length; i++) {
//     for (let j = i + 1; j < langs.length; j++) {      
//       if (langs[i][0] > langs[j][0]) {        
//         max = langs[i];
//         langs[i] = langs[j];
//         langs[j] = max;        
//       }
//     }    
//   }  
//   return langs;  
// }
// console.log(sortLetter(langs));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HW  9
// function getExtremeElements(array) {
//     // Change code below this line
//         const newArr =[]
//         const firstElement = array[0]
//         const lastIndex = array.length-1
//         const lastElement = array[array.length-1]
//         newArr[0] = firstElement
//         newArr[1] = lastElement 

//     // return 
//     console.log(newArr);
  
//     // Change code above this line
//   }
// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])


// 10.

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimiter)
//     // Change code above this line
//     // return words;
//     console.log(words)
//   }
//   splitMessage("Mango hurries to the train", " ")
//   splitMessage("Mango", "")
//   splitMessage("best_for_week", "_")

// 11

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     const words = message.split(" ")
//     const lengMessage = words.length
//     const price = pricePerWord * lengMessage
//     // return message.length * pricePerWord
//     console.log(lengMessage,price)
 
 
//     // Change code above this line
//  }
//  calculateEngravingPrice("JavaScript is in my blood", 10) 
//  calculateEngravingPrice("JavaScript is in my blood", 20) 
//  calculateEngravingPrice("Web-development is creative work", 40) 
//  calculateEngravingPrice("Web-development is creative work", 20) 

//  13

// function slugify(title) {
//     // Change code below this line
//     const words = title.toLowerCase()
//     const splitWords = words.split(" ")
//     const slug = splitWords.join("-")
//     console.log(slug)
  
//     // Change code above this line
//   }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const threeArray = firstArray.concat(secondArray)
    
//     const result = threeArray.slice(0,maxLength)
//     console.log(threeArray, result)

//     // Change code above this line
//   }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// 18

// function calculateTotal(arguments) {
    
//     let sum = 0;
//     for(i = 1; i <= number; i += 1) {
//         sum += i 
     
//    }
//    console.log(sum)
// }  

//    calculateTotal(1)
//    calculateTotal(3)
//    calculateTotal(7)
//    calculateTotal(18)
//    calculateTotal(24)

//20

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for(i = 0; i <order.length; i += 1){
//         total += order[i]
//     }
//     // Change code above this line
//     // return total;
//     console.log(total)
//   }
// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])

// 21

// function findLongestWord(string) {
//     // Change code below this line
//     const str = string.split(' ')
//     let max = ''
//     for(let i = 0; i < str.length; i += 1) {
        
//         if (str[i].length > max.length) {
//             max = str[i]
//         }
        
//     }
    
//     console.log(max);
//     // Change code above this line
//   }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be with you")

// 22

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <=max; i += 1) {
//         numbers.push(i)
//     }
//     // Change code above this line
//     // return numbers;
//     console.log(number)
//   }
// createArrayOfNumbers(1, 3)
// createArrayOfNumbers(14, 17)
// createArrayOfNumbers(29, 34)

// 23
// function filterArray(numbers, value) {
//     const result = [];
//     // Change code below this line
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             result.push(numbers[i])
//         }
//     }
 
//     console.log(result)
//    // Change code above this line
//  }

// filterArray([1, 2, 3, 4, 5], 3) 
// filterArray([1, 2, 3, 4, 5], 4) 
// filterArray([1, 2, 3, 4, 5], 5) 
// filterArray([12, 24, 8, 41, 76], 38) 
// filterArray([12, 24, 8, 41, 76], 20) 

// 24

// planets.includes("Earth")

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     // return fruits.includes(fruit); // Change this line
//     console.log(fruits.includes(fruit))
//   }

// checkFruit("plum") 
// checkFruit("mandarin") 
// checkFruit("pear") 
// checkFruit("Pear") 
// checkFruit("apple") 

// 25

// function getCommonElements(array1, array2) {
//     const result =[];
//     // Change code below this line
//     for (let i =0; i < array1.length; i +=1) {
//         if (array2.includes(array1[i])) {
//             result.push(array1[i])
//         }
//     }
  
//     console.log(result);
//    // Change code above this line
//   }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// 26

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const i of order) {
//       total += i;
//     }
  
//     // Change code above this line
//     // return total;
//     console.log(total);
//   }

// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])
// calculateTotalPrice([])

// 27

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (const number of numbers) {      
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
//     console.log(filteredNumbers);
//     // return filteredNumbers;
//     // Change code above this line
//   }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

//28

// function getEvenNumbers(start, end) {
//     const numbers =[]
//     // Change code below this line
//     for (let i = start; i <= end; i += 1){
//         if (i % 2 == 0) {
//             numbers.push(i)
//         }
//     }
//     console.log(numbers)
//     // return numbers;
//      // Change code above this line
//    }

// getEvenNumbers(2, 5) 
// getEvenNumbers(3, 11) 
// getEvenNumbers(6, 12) 
// getEvenNumbers(8, 8) 
// getEvenNumbers(7, 7) 

// 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

// console.log(number);

// 31
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     // let num =[];
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         console.log(i);        
//       }     
      
//     }else console.log(undefined)
    
//     // return number;
//     // Change code above this line
//   }

// findNumber(2, 6, 5)
// findNumber(8, 17, 3)
// findNumber(6, 9, 4)
// findNumber(16, 35, 7)


// 32

// function includes(array, value) {
//   // Change code below this line
//   for (const nums of array) {
//     if (nums === value)   
//     console.log(true); 
//   }
//   console.log(false);
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3) 
// includes([1, 2, 3, 4, 5], 17)
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// includes(["apple", "plum", "pear", "orange"], "plum") 
// includes(["apple", "plum", "pear", "orange"], "kiwi") 


// Modul 3

// 2

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
//     owner :{
//         name : "Henry",
//         phone : "982-126-1588",
//         email : "henry.carter@aptmail.com"
//     } 
//   };

// 3

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line

// 4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];
//   // Change code above this line

// 5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags)

// 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price=5000
// apartment.rating=4.7
// apartment.owner.name="Henry Sibola"
// apartment.tags.push("trusted")


// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags)

// 7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {}
// apartment.location.country = "Jamaica"
// apartment.location.city = "Kingston"

// console.log(apartment )

// 10

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for(const key in apartment){
//     keys.push(key)
//     values.push(apartment[key])
// }
// console.log(keys);  
// console.log(values);

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
//     }
//   // Change code above this line
// }
// console.log(keys);  
// console.log(values);


// 12

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const prop in object)        
//         if(object.hasOwnProperty(prop)){
//             propCount += 1
//         }

//     // Change code above this line
//     // return propCount;
//     console.log(propCount);  

//   }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// 13

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key])
//   }
//   console.log(keys);
//   console.log(values);


//Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. 
// Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// console.log(vegetables); // "Капуста, Ріпа, Редиска, Морква"
// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];
// console.log(vegetables.join(','));
 
// for(const veg of vegetables){
//   res += veg + ", ";
//  const result = res.slice(0, res.length - 1) 
// }
// console.log(result);

// 2

//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

// var arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// const result = removeDuplicates(arr) {
// const elements = []
// for(const el of arr){
//   if (!elements.includes(el)){
//       elements.push(el)
//   }
// }
//   return (elements)
// }

// console.log(elements); // [php,css,script,html,java]

// var arr = [
//     "php",
//     "php",
//     "css",
//     "css",
//     "script",
//     "script",
//     "html",
//     "html",
//     "java",
//   ];
//   function removeDublicates(arr){
//     return [... new Set(arr)];

//  }
//   const result = removeDublicates(arr)
//   console.log(result);

//   // Напишіть функцію filterFalse(arr), яка очищає масив від хибних (false) значень: false,
// //null, undefined, 0, –0, NaN та "" (пустий рядок).
// const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];

// function filterFalse(arr) {
//   const elements = [];
//   for (const el of arr) {
//     if (el) {
//       elements.push(el)
//     }
//   }
//   return elements
// }
// console.log(filterFalse(array)); // [ 77, -17, 99 ]

// const item = Array(123)
// console.log(item);

// 3

/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
 */

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// function copyArr(clients) {
//   // return clients.slice()
//   return [...clients]
// }

// const copyClients = copyArr(clients)

// console.log(copyClients);
// console.log(copyClients === clients);




// Напишіть функцію union, яка повертає масив, що складається тільки з унікальних
//елементів масиву.
// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7];

// const union = function (array) {
// const newArr = [];
// for(const el of array) {
//   if (array.indexOf(el) === array.lastIndexOf(el)){
//     newArr.push(el)
//   }
//   // console.log(array.lastIndexOf(el));
// }
// return newArr;
// };
// console.log(union(array1)); // [-10,8,5,2,1,-9,3,7]


//todo Основи об'єктів
/*
 * Напиши скрипт, який, для об'єкта user, послідовно:

* додає поле mood зі значенням 'happy'
* замінює значення hobby на 'skydiving'
* замінює значення premium на false
* виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 21,
//   hobby: 'css',
//   premium: true,
// };
// //д


// user.mood = 'happy';
// user['hobby'] = 'skydiving'
// user['premium'] = 'false'

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, user[key]);

// }
// console.log(user);

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let sum =0
// for (const value of values) {
//   sum += value
// }
// console.log(sum);

// Напишіть деструктуруюче присвоєння, яке:

// значення властивості name додати змінній name.
// значення властивості years додати змінній age.
// властивість isAdmin присвоює змінну isAdmin (false, якщо немає такої властивості)

// let user = {
//   name: "John",
//   years: 30,
// };

// const { name, years: age, isAdmine = false} = user
// console.log(name, age, isAdmine);

// Напишіть функцію, яка перевіряє, чи є елемент 
// саме простим об'єктом, а не масивом, null тощо.

// function isPlainObject(par){
//   // return typeof par === 'object' && par !== null && !Array.isArray(par);
//   if (typeof par === 'object'){
//     return true
//   }
//   return false
// }


// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject(undefined));

//todo Масив об'єктів
/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), 
яка приймає масив об'єктів та рядок з назвою каменю. 
Ф-ція рахує і повертає загальну вартість каміння з 
таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Бриліант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(array, stoneName) {

//   for (const stone of array) {
//     if (stone.name === stoneName){
//       return stone.price * stone.quantity
//     }
//   }
//   return 'not found'
//  }
// console.log(calcTotalPrice(stones, 'Ізумруд'));
// console.log(calcTotalPrice(stones, 'Цегла'));



// Опис завдання: Напишіть функцію, яка повертає новий об'єкт
//  без зазначених значень.
// Очікуваний результат: ({ a: 1, b: 2, c: 3 }, 'b', 'c') => { a: 1 }

// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 }

// function without(obj, ...keys) {
//   const newObj = { ...obj };

//   for (const key of keys) {
//     if (newObj.hasOwnProperty(key)) {
//       delete newObj[key];
//     }
//   }

//   return newObj;
// }

// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, 'b', 'c')); // { a: 1 }


// 14

// function countProps(object) {
 

//   const keys = Object.keys(object);
  
//   return keys.length
//   // console.log(keys.length);
 
// }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// 15

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const value = Object.values(salaries)
//   for (const el of value) {
//     totalSalary += el;
//   }
//   // Change code above this line
//   // return totalSalary;
//   // console.log(totalSalary);
// }
// countTotalSalary({})
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const item of colors) {
//   hexColors.push(item.hex)
//   rgbColors.push(item.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

// 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line 
//   for (const item of products) {
    
  
//       if (item.name === productName) {
//           // return price
//           console.log(`${item.price}`)                  
//       }     
      
//   }
//   // Change code above this line
//   // return null
//   console.log(null)  
// }
// getProductPrice("Radar")
// getProductPrice("Grip")
// getProductPrice("Scanner")
// getProductPrice("Droid")
// getProductPrice("Engine")

//19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const element =[]
// function getAllPropValues(propName) {
//   // Change code below this line
// for (const item of products) {
//   if (item.name === propName) {
//     element.push(item.name)
//     // console.log(item.name)
//   }else if(item.price === propName){
//     element.push(item.price)
//     // console.log(item.price)
//   }else if(item.quantity === propName){
//     element.push(item.quantity)
//     // console.log(item.quantity)     
//   }
//   console.log(element);
// }

// console.log(element);
//   // Change code above this line
// }

// getAllPropValues("name")
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("category")


// 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
  
//     for (const product of products){
//         if (product.name === productName){
//             return product.price * product.quantity
            
//   }
//   // return '0'
//   // console.log('0')
//   // break

//   // Пиши код выше этой строки
// }
// return 0
// }
// // calculateTotalPrice("Blaster")
// calculateTotalPrice("Radar")
// // calculateTotalPrice("Droid")
// // calculateTotalPrice("Grip")
// // calculateTotalPrice("Scanner")

// 21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   Change code below this line
  
//   const {
//     yesterday,
//     today,
//     tomorrow,
//   } = highTemperatures
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);

// 22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   } = highTemperatures
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
 
//     const {
//     yesterday :highYesterday ,
//     today : highToday,
//     tomorrow : highTomorrow ,    
//     highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   } = highTemperatures
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

// 25

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  


//   const {
//     today : {
//         high : highToday,
//         low : lowToday,
//         icon : todayIcon
//     },
//     tomorrow: {
//         high : highTomorrow,
//         low : lowTomorrow,
//         icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     }
//   } = forecast,

// 26

// Change code below this line
// function calculateMeanTemperature(forecast) {

//   const {
//   today : {
//             high : todayHigh,
//             low : todayLow,
            
//         },
//         tomorrow: {
//         high : tomorrowHigh,
//         low : tomorrowLow,       
//     }
//   } = forecast
//   // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })
// calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })

// 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

//28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// 29

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);
  

// 30

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     console.log({completed, category, priority, ...data})
//     // Change code above this line.
   
//   }

// makeTask({})
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// makeTask({ category: "Finance", text: "Take interest" })
// makeTask({ priority: "Low", text: "Choose shampoo" })
// makeTask({ text: "Buy bread" })

// 31

// Change code below this line
// function add(...args) {
//     // Change code above this line
//     let sum = 0
//     for (const arr of args) {
//          sum += arr 
         
//     }
//    console.log(sum)
//   }

// add(15, 27)
// add(12, 4, 11, 48)
// add(32, 6, 13, 19, 8)
// add(74, 11, 62, 46, 12, 36)
  
// 32

// Change code below this line
// function addOverNum(...args) {
//     let total = 0;
  
//     for (const arg of args) {
//         if (arg > args[0]){
//             total += arg;
//         }
//     }
//     console.log(total);
//     return total;
//     // Change code above this line
//   }

// addOverNum(50, 15, 27)
// addOverNum(10, 12, 4, 11, 48, 10, 8)
// addOverNum(15, 32, 6, 13, 19, 8)
// addOverNum(20, 74, 11, 62, 46, 12, 36)

// 33

// Change code below this line
// function findMatches(...args) {
//     const matches = []; // Don't change this line
//   for (const arr of args) {
//     if (args[0].includes(arr)){
//         matches.push(arr)
//     }
//   }
//     // Change code above this line
//     return matches;
//     console.log(matches);
//   }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
// findMatches([63, 11, 8, 29], 4, 7, 16)

// 34

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//        return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     }
//     // Change code above this line
//   };
//   bookShelf.getBooks()                  //возвращает строку "Returning all books"  
  
//   bookShelf.addBook("Haze")             // возвращает строку "Adding book Haze" 
  
//   bookShelf.removeBook("Red sunset")            //возвращает строку "Deleting book Red sunset"  
  
//   bookShelf.updateBook("Sands of dune", "Dune")             //возвращает строку "Updating book Sands of dune to Dune"  

// 35

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//         const index = this.books.indexOf(oldName);
//           if (index !== -1) {
//             this.books.splice(index, 1, newName);
// //         } 
//       }
//       return this.books;
//       // Change code above this line
//     },
    
//   };
// bookShelf.updateBook("Haze", "Dungeon chronicles")
// bookShelf.updateBook("The last kingdom", "Dune")

// 38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName) 

//     console.log(thispotions)
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility")
// atTheOldToad.addPotion("Power potion")

// 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
//       const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);
//       console.log(this.potions);

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")

// 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions.splice(index, 1, newName);
//       console.log(this.potions);
//     }
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")

// 41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name, price } = newPotion;
    
//     for (const potion of this.potions) {
//       if (potion.name === name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }

//     this.potions.push({ name, price });
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         break;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         break;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.log(atTheOldToad.getPotions());


// Modul 4

// 1

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);

// 7

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
  
//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//         }
//         });
//     return commonElements;
//     // Change code above this line
  
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// 8

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) =>{
//     // Change code above this line
//     return quantity * pricePerItem;
//   }
//   calculateTotalPrice(5, 100)
//   calculateTotalPrice(8, 60)
//   calculateTotalPrice(3, 400)

// 9

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
  
//   // Change code above this line
// calculateTotalPrice(5, 100)
// calculateTotalPrice(8, 60)
// calculateTotalPrice(3, 400)

// 10

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
//   console.log(totalPrice);
//   return totalPrice;
//   // Change code above this line
// }
// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])


// 11
// Change code below this line

  
//     const filterArray = (numbers, value) => {
//         const filteredNumbers = [];
//         numbers.forEach((number) => {
//             if (number > value) {
//             filteredNumbers.push(number);
//             }
//             });
    

//     // Change code above this line
//     console.log(filteredNumbers);
//     // return filteredNumbers;
//   }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)

// 12

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach( (element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     })


  
//     // Change code above this line
//     console.log(commonElements);
//     return commonElements;
//   }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// 13

// function changeEven(numbers, value) {
//     // Change code below this line    
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     //   }
//     // }
//     const newNumbers =[];
//     numbers.forEach(element => {        
//         if ( element % 2 === 0 ) {
//             newNumbers.push(element + value)
//         }else {
//             newNumbers.push(element)
//         }
        
//     });

//     console.log(newNumbers);
//     // return newNumbers
//     // Change code above this line
//   }

// changeEven([1, 2, 3, 4, 5], 10)
// changeEven([2, 8, 3, 7, 4, 6], 10)
// changeEven([17, 24, 68, 31, 42], 100)
// changeEven([44, 13, 81, 92, 36, 54], 100)

// 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length)
// console.log(planetsLengths);

// 15

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book => book.title);
//   console.log(titles);

// 16

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line
  
//   const genres = books.flatMap(book => book.genres);
  
//   const genre = books.map(book => book.genres);
//   console.log(genres);
//   console.log(genre);

// 17
users = 
[
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];

//   17

// Change code below this line
// const getUserNames = users => {
//     return users.map(user => user.name)

// };
// // Change code above this line
// console.log(getUserNames);

// 18

// const getUserEmails = users => {
//     return users.map(user => user.email)

// };

// 19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => !(number % 2));
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 20

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );
//   console.log(allGenres);
//   console.log(uniqueGenres);


// 21

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
//   const booksByAuthor = books.filter(({author}) => author >= AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// 22

// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(({eyeColor}) => eyeColor === color)

// };
// // Change code above this line

// getUsersWithEyeColor(users, 'blue')
// getUsersWithEyeColor(users, 'green')
// getUsersWithEyeColor(users, 'brown')
// getUsersWithEyeColor(users, '')

// 23

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(({age}) => age >= minAge && age <= maxAge)

// };
// // Change code above this line

// getUsersWithEyeColor(users, 20, 30)
// getUsersWithEyeColor(users, 30, 40)
// getUsersWithEyeColor(users, 80, 100)
// getUsersWithEyeColor(users, '')

// 24

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter((user) => user.friends.includes(friendName))
// };
// // Change code above this line

// getUsersWithFriend(users, "Briana Decker")
// getUsersWithFriend(users, "Goldie Gentry")
// getUsersWithFriend(users, "Adrian Cross")

// 25

// Change code below this line
// const getFriends = users => {
//    users.flatMap(user => user.friends)
//    const newFriends  = getFriends.filter(
//   (course, index, array) => array.indexOf(course) === index
//   );
//   console.log(newFriends);
//   return newFriends
// };
// Change code above this line

// 26

// Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };
// console.log(getActiveUsers);
// // Change code above this line

// 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === "The Dream of a Ridiculous Man");
// const bookByAuthor = books.find(book => book.author === "Robert Sheckley");


// console.log(bookWithTitle)
// console.log(bookByAuthor)


// 29

// Change code below this line
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email)
};
// Change code above this line
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));