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