// 3.1.6
// 1

function boolean(num) {
    return num % 10 === 0 ? true: false;
}

console.log(boolean(50));
console.log(boolean(35));

// 2

function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    return("You will be a " +jobTitle +" in " +location +", and married to " +partnerName +", with " +numberOfChildren +" kids.");
  }
  
  function tellFortune2(numberOfChildren, partnerName, location, jobTitle) {
    var future = "You will be a " +jobTitle +" in " +location +", and married to " +partnerName +", with " +numberOfChildren +" kids."
    return(future);
  }
  console.log(tellFortune("2", "Daniela", "Bucharest", "Engineer"));
  console.log(tellFortune("2", "Daniela", "Giurgiu", "Deveoper"));
  console.log(tellFortune2("2", "Daniela", "Brasov", "Driver"));
  console.log(tellFortune2("2", "Daniela", "Sibiu", "Architect"));

//   3

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);

// 3.2.7

// 1

let i 
let a = 10
console.log
for (i=1;i<=a;i++)
{
  if(i%2==0){
    console.log(i)
  }
}

// 2

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

for (var ii = 0; ii < numbers.length; ii++) {
    sum += numbers[ii];
}

console.log(+ sum);

// 3

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12345)));

// 4

var s = "String de test"


function countVowels(s) {
  var c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}

console.log(countVowels(s))

// 3.3.7

// 1

var favoriteRecipe = {
  title: "pizza",
  servings: 3,
  ingredients: ["sunca", "masline", "ciuperci", "ketchup"]
};

console.log ("Title: " + favoriteRecipe.title);
console.log ("Servings: " + favoriteRecipe.servings);
console.log ("Ingredients:");

for (i=0; i<favoriteRecipe.ingredients.length; i++) {
  console.log(favoriteRecipe.ingredients[i]);
}

// 2

function eliminateProperty(obj, property) {
  const { [property]: omit, ...rest } = obj;
  return rest;
}

const object = { a: 1, b: 2 };
const property = "b";
const result = eliminateProperty(object, property);
console.log(result);

// 3

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isRead: true
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    isRead: false
  },
  {
    title: "1984",
    author: "George Orwell",
    isRead: true
  }
];

function displayBookStatus(books) {
  books.forEach((book) => {
    const { title, author, isRead } = book;
    if (isRead) {
      console.log(`You have already read "${title}" by ${author}.`);
    } else {
      console.log(`You need to read "${title}" by ${author}.`);
    }
  });
}
displayBookStatus(books);

// 3.4.5

// 1

console.log(Math.pow(5, 2));
console.log(5 ** 2)

const square = (number) => number ** 2
console.log(square(5))

// 2

function getRandom(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
      throw new Error;
  }

  if (start >= end) {
      throw new Error;
  }

  const interval = end - start;

  return start + Math.floor(Math.random() * interval);
}

const start = 1;
const end = 100;
const randomNumber = getRandom(start, end);
console.log("random number is:", randomNumber);

// 3

function letterCount(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));

// 4

function addNumber(a, b, c, d, e) {
  return a + b + c + d + e;
}

const number = [1, 2, 3, 4, 5];

console.log(addNumber(...number));