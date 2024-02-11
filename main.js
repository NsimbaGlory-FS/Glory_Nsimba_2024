alert("Hello and welcome to the Memory Lane Assignment");
alert(
  "I hight suggest openiong the Console first and then refreshing the page"
);

alert(
  "First Up Grade letter Calculator. Give me the number grade and I will give you the letter grade"
);

let points = prompt("What number grade did you get in the class?");
// let send message to console the grade for A

if (points >= 90) {
  console.log(
    "You have a(n)" +
      points +
      "% which means you have earned a(n) A in the class!"
  );
}
// let send message to console the grade for B
if (points <= 89 && points >= 80) {
  console.log(
    "You have a(n)" +
      points +
      "% which means you have earned a(n) B in the class!"
  );
}
//let send message to console the grade for C
if (points <= 79 && points >= 70) {
  console.log(
    "You have a(n)" +
      points +
      "% which means you have earned a(n) C in the class!"
  );
}
//let send message to console the grade for D
if (points <= 69 && points >= 60) {
  console.log(
    "You have a(n)" +
      points +
      "% which means you have earned a(n) D in the class!"
  );
}
//let send message to console the grade for F
if (points < 60) {
  console.log(
    "You have a(n)" +
      points +
      "% which means you have earned a(n) F in the class!"
  );
}

//let prompt the Weight of the Books

// the prompt will show the result by console

alert(
  "Next Up, it sell Books. Tell me how much your Books weighs and I will tell you what it costs"
);

// le prompt the weight

let weight = parseFloat(prompt("PLease enter the weight of the Books picked!"));
console.log("Your Books of " + weight.toFixed(2));

//let make alert to the problem 3
alert(
  " The last problem is loyalty Card, I will determine if you get a discount on your purschage"
);

//let prompt the user item 1 cost

let item1Cost = parseFloat(prompt("What is the cost for first Book?"));

// let prompt item 2 cost

let item2Cost = parseFloat(prompt("What is the cost of second Books?"));

//let calculate the both cost items

let item1 = item1Cost + item2Cost;

console.log("total Books is lbs " + item1.toFixed(2));

// let calculate the total of member

let member = parseFloat(
  prompt(" Are you prefered customere? Please only answer Yes or No!")
);
// let membertotal = item1 + member;
// console.log("total is lbs" + membertotal.toFixed(2));
