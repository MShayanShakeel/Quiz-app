//  //correct statment
//  alert("You're learning JavaScript!");

//  // my choice statment
//  alert("Hello, MY name is Areeb Ali.");

//  //                  chapter 2
//  var myVariableName = "echapter 2";

//  var myStringVariable;
//  myStringVariable = "string.";
//  var teamName = "Areeb jav";

//  alert(teamName);
//  var bestMan = "Areeb";
//  bestMan = "Ali";

//  /// chapter no 3
//  var caseQty;
//  caseQty = 144;
//  var num = parseInt("9");
//  var num1, num2, sum;
//  num1 = 5;
//  num2 = 7;
//  sum = num1 + num2;

//  // chapter n0 12

//  var variable1 = 10;
//  var variable2 = 8;

//  if (variable1 >= variable2) {
//      alert("Variable 1 is greater than equal to Variable 2");
//  } else {
//      alert("Variable 1 is less than Variable2");
//  }
//  var marks = parseFloat(prompt("Enter your marks:"));

//  if (isNaN(marks)) {
//      alert("Please enter a valid number for marks.");
//  } else if (marks >= 90 && marks <= 100) {
//      alert("Your percentage is " + marks + "%.\nGrade: A");
//  } else if (marks >= 80 && marks < 90) {
//      alert("Your percentage is " + marks + "%.\nGrade: B");
//  } else if (marks >= 70 && marks < 80) {
//      alert("Your percentage is " + marks + "%.\nGrade: C");
//  } else if (marks >= 60 && marks < 70) {
//      alert("Your percentage is " + marks + "%.\nGrade: D");
//  } else if (marks < 60) {
//      alert("Your percentage is " + marks + "%.\nGrade: F");
//  } else {
//      alert("Invalid input for marks. Please enter a number between 0 and 100.");
//  }

//  /////chapter mo 13

//  if (a === b && c === d) {
//      // Rest of the code ifboth conditions are true
//  }
//  if (a === b || c !== d) {
//      // rest the code if either both conditions are true
//  }
//  if ((name === "Hamza" || name === "Areeb") && age < 60) {
//      //  if both conditions are true
//  }
//  var variable1 = 5;
//  var variable2 = 10;

//  if (variable1 < variable2 || variable1 > variable2) {
//      alert("first variable is less than and greater than second variable.");
//  }
//  //
//  var firstName = "YourFirstName";
//  var lastName = "YourLastName";

//  var userInputFirstName = prompt("Ente first name:");
//  var userInputLastName = prompt("Ente last name:");
//  //

//  if (userInputFirstName === firstName && userInputLastName === lastName) {
//      alert("Your first and last names match!");
//  } else {
//      alert("first and last names do not match.");
//  }

//  ////chapter 14

//  var password = "example123";

//  if (password !== "") {
//      if (password.length <= 5) {
//          alert("Password must greatr than 5.");
//      } else {
//          alert("OK bhai");
//      }
//  }
//  if (a === 1) {
//      if (c === "Max") {
//          alert("OK vbhai");
//      }
//  }
//  if (a === 1 && c === "Max") {
//      alert("OK");
//  }

//  //
//  var variable1 = 7;
//  var variable2 = 7;

//  if (variable1 === variable2) {
//      if (variable1 <= variable2) {
//          alert("Both conditions true congrats!");
//      }
//  }

//  //chapoter  15
//  var emptyArray = [];
//  var stringArray = ["Hello"];
//  var alphabet = ["h", "i", "j", "k"];
//  alert(alphabet[2]);
//  //output j

//  //
//  var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
//  var arrayLength = alphabet.length;
//  alert("The total length of the array is: " + arrayLength);

//  //
//  var myArray = ["First Element"];
//  myArray[1] = "Second Element";
//  alert(myArray[1]);

//  //  chapter 20

//  /// class practice question
//  // var a = ["A","B","C","D","E"];
//  // var b = [1,2,3,4,5,6,7,8,9];

//  var a = ["a", "b", "c", "d", "e"];
//  var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  var mergedArray = [];

//  for (var i = 0; i < b.length; i++)
//   {
//      for (var j = 0; j < a.length; j++) {
//          mergedArray.push(b[i] + a[j]);
//      }
//  }

//  console.log(mergedArray);

// // var bill = 90;
// // // var bill = 90;

// // if (bill <= 90)
// // {
// //     console.log("5 units");
// // }
// // else if(bill == 50 )
// // {
// //     console.log("15 units");
// // }
// // else
// // {
// //     console.log("35 units");
// // }

// //                                   //   user input biill bharna

// // var bill = alert(parseFloat(prompt("Enter your billing ammount")));

// // if (bill <= 200)
// // {
// //     console.log(bill * 5,"you have 10 units");
// // }

// //                         // multiple condetions to aik sath chala sakty hain

// // var age = 10;
// // var cnic = true;
// // var studendcards = true;

// // if(age >= 18 || studendcards == true)
// // {
// //     console.log("bhago yhan say");

// // }

// //                        // practicekari hai  usi codwe ki

// // var age = 10;
// // var cnic = false;

// // if(age == 18 || cnic == true )
// // {
// // console.log("Allow");
// // }
// // else {
// //     console.log("not allow");
// // }

// //                         // ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY
// // var arr = ["A","B","C"];
// //    console.log(arr[2]);
// //    arr[2] = 12;
// //    console.log(arr);

// //    arr[4] = "D";
// //    console.log(arr);

// // // last mai koi value dalni ho

// //    arr.push("D");
// //   arr.pop();
// //    console.log(arr);

// // //    start ki vale shift karna

// // arr.shift();
// // arr.unshift("2");

// // //  EXACT KARTA HAI ARRAY KI VALUE

// // var arr = ["A","B","C","D","E"]
// // var a = arr.slice(0, 2);
// // console.log(a);

//                   // YA AJJ KA KAM HAI AJJ DATE HAI 9 DECEMBER 2023 OR SATURDAY HAI
//                   //, ARRAYS

// // ager ab ko kisi bhi lafz ka index pata karna Hho to,, mno ka indexmalom kar rahay hain
// //kay mno kis index per hai yai batai ga 1 per hai 2 per hai ya 3 per

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'xyz']
// var i = a.indexOf('mno')
// console.log(i);

// //index may 'gye' nahi hai tu yai -1 print kray ga \

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz']
// var i = a.indexOf('gye');
// console.log(i);

// //array may gye hai tu word found print karay ga ager gye nahi hai to work not found karay print

// var i = a.indexOf("gye");
// if(i != -1){
//   console.log("word found");
// }
// else{
//   console.log("word not found");
// }

// //array ki lengthcount kraya ga 4 hai 5 hai ya 6 hai

// var count = a.length;
// console.log(count);

// //last wala index print karay ga ap ka

// var lastIndex = count-1;
// console.log(a[lastIndex]);

// //start say end tak saray elemnt la dega

// var lastElement = a.slice(1);
// console.log(lastElement);

// //array ko reverse kar sakaty hain asay

// var nev = a.reverse();
// console.log(nev);

// //array ko merge karna hai asay

// var combineLetters = a.join("");
// console.log(combineLetters);

// //in dono array ko apas may join karn hai

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz']
// var b = [1,2,3,4,5];

// var combineArray = a.concat(b);
// console.log(combineArray);

// //index may lafz ho ga to true ager nahi hoga tu false

// var i = a.includes('abc');
// console.log(i);

//             //yai bhi ajj ka kam hai loop loop loop loop loop
//             //loop loop loop loop loop loop loop loop klooop loop loop loop
//             //loop loop lopp lopp loop loop loop loop loop loop loop loop
//             //loop loop loop loop loop loop loop loop loop loop loop loop

// //sareay index print kar dega

// for(i = 0; i < 10; i++)
// {
//     console.log(i);
// }

// //Array print kar dega sab

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz'];
// for(i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz' , 'ano'];
// var b = 'ano';
// for (i = 0; i < a.indexOf(b); i++)
// {
//     if(i = b)
//     {
//         console.log("word hai");
//       }
//       else{
//         console.log("word nahi hai");
//       }
// }
// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz' , 'ano'];
// var b = 'ano';
// for (i = 0; i < a.indexOf(b); i++)
// {
//     if(i = b)
//     {
//         console.log("word hai");
//       }
//       else{
//         console.log("word nahi hai");
//       }
// }

//  //nested looop nested loop nested looop nested
//   //loop nested looop nested loop nested looop
//   //nested loopnested looop nested loopnested
//   //looop nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested looop
// //nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested
//  //looop nested loopnested looop nested loop
//  //nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested
//  //looop nested loopnested looop nested loop

// for(var i = 0; i < 10; i++)
//  for(var j = 0; j < 5; j++)
// {
//     console.log(i,j);
// }

// // var a = ["A","B","C","D","E"];
// // var b = [1,2,3,4,5,6,7,8,9];

// var a = ["A", "B", "C", "D", "E"];
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var mergedArray = [];

// for (var i = 0; i < b.length; i++)
//  {
//     for (var j = 0; j < a.length; j++) {
//         mergedArray.push(b[i] + a[j]);
//     }
// }

// console.log(mergedArray);

//changing case

//changing case
//changing case
//changing case
//changing case
//changing case
//changing case
//changing case
//changing case//changing case
//changing case\

///user capital or small spelling dalay tu yai accept karay ga to lower case kay through

// var a = "Karachi";
// a = a.toLowerCase();

// var b = prompt("Enter City Name");
// b = b.toLowerCase();

// if(a == b){
//   console.log("City Matched");
// }

////   city found karayy ga ap kay arrya may hai  ya nahi

// var city = ['karachi' , 'lahore' , 'islamabad' , 'quetta' , 'peshawar' , 'hyderabad']
// city = city.toLowerCase();
// var loog = prompt("Enter City Name");
// for (a = 0; a < city.length; a++)
// {
//   console.log(city[a]);
//   if(city[a] == loog)
//   {
//     alert(loog,"matched");
//   }
//   else(city[a] != loog)
//   {
//     alert(loog, "city not matched");
//   }
// }

////   city found karayy ga ap kay arrya may hai  ya nahi

// var arr = ['karachi' , 'lahore' , 'islamabad' , 'quetta' , 'peshawar' , 'hyderabad']
// var a = prompt("Enter City Name");
// a = a.toLowerCase("entercity");

// for (a = 0; a < city.length; a++)
// {
//   console.log(arr[i]);
//   arr[i] = arr[i].toLowerCase();
//   console.log(arr[i])
// }

/// staurday word found kiya hai
// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";

// for(var i = 0; i < a.length; i++)
// {
// var checkLetter = a.slice (i, i + 8);
// console.log(checkLetter);
// if(checkLetter == word)
// {
//   console.log("word Found");
// }
// }

// saturdayki jagah kal chutti hai word add kar diya

// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing Saturday elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore saturday odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";
// var secondword = "Kal chhhutti hai";
// var startingText;
// var endingText;

// for(var i = 0; i < a.length; i++)
// {
//   var checkLetter = a.slice(i,i + 8);
//   if(checkLetter == word)
//   {
//     console.log(checkLetter, i);
//     startingText = a.slice(0, i);
//     endingText = a.slice(i + 8);
//     console.log(startingText);
//     console.log(endingText);

//   }

// }
// a = startingText + secondword + endingText;
// console.log(a);

// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing Saturday elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore saturday odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";
// var secondword = "Kal chhhutti hai";
// var startingText;
// var endingText;

// for(var i = 0; i < a.length; i++)
// {
//   var checkLetter = a.slice(i,i + 8);
//   if(checkLetter == word)

//   {
//     console.log(checkLetter, i);
//     startingText = a.slice(0, i);
//     endingText = a.slice(i + 8);
//     console.log(startingText);
//     console.log(endingText);
//     a = startingText + secondword + endingText;

//   }
//   console.log(checkLetter);

// }
// a = a.replace(/Saturday/, secondword);
// console.log(a);

// console.log(a);

//                         // round off karde ga value ko
// var a = 3.5;
// var b = Math.round(a);
// console.log(b);

//           ///  point walay number ko zaya nahuii karay ga, or agay lay jai ga

// var a = 45.1;
// var b = Math.ceil(a);
// console.log(b);

//       // 16.9 hay to 17 nahi karay ga 16 per hi lay kar aye ga

// var a = 16.9;
// var b = Math.floor(a);
// console.log(b);

//     // random number generatotr karay ga har bar

// var a = Math.random();
// var b = Math.round(a);

// console.log(a, b);

//            /// practice kari haiu\

// var a = 4;
// var b =  Math.round(a);
// console.log(b);

//   // value fixed karay ga lambi value aye to short kar dega

// var a = 100 / 3;
// var b = a.toFixed(2);
// console.log(b);

//       // number barhanay hon to yai us kay liye haicode

// var a = 34.349;
// console.log(a*2000);

// var b = a.toFixed(2);
// console.log(b * 2000);

// //           // date wagaira set karna
// // //           date and time
// // //           1/6/2024
// // //           saturday

// // var currentDate = new Date("2023-12-01T12:30:50");

// // console.log(currentDate .getDate());
// // console.log(currentDate .getMonth());
// // console.log(currentDate .getFullYear());
// // console.log(currentDate .getHours());
// // console.log(currentDate .getMinutes());
// // console.log(currentDate .getSeconds());

// var currentDate = new Date();

// console.log(currentDate .getDate(15));
// console.log(currentDate.getDate());

// console.log(currentDate .setFullYear(2024));
// console.log(currentDate.getFullYear());

// console.log(currentDate .setMonth(2));
// console.log(currentDate.getMonth());

//  // pakistan ka date or time batai ga

// var currentDate = new Date()
// currentDate.getDate()

// currentDate.getMonth()

// currentDate.getTime()

// currentDate.getDay()

// currentDate.getFullYear()

// currentDate.getHours()

// // date time months setting back on previous month

// var currentDate = new Date("2023-12-01T12:30:50")

// console.log(currentDate .getDate());
// console.log(currentDate .getMonth());
// console.log(currentDate .getFullYear());
// console.log(currentDate .getHours());
// console.log(currentDate .getMinutes());
// console.log(currentDate .getSeconds());
// // var currentDate = new Date("2023-12-01T12")
// // currentDate.setDate = ((new setDate).setDate(-11));

// //function

// function abc(){
//   console.log("ABC");
// }
// abc();

// //             minus kar raja hai

// // function abc(){
// //   var amount =  a - 200;
// //   console.log(amount);

// // }
// // abc(500);
// // abc(1000);
// // abc(700);
// // abc(900);

// //minus

// function abc(a, b){
//   var amount = a - b;
//   console.log(amount);

// }
// abc(500, 100);
// abc(1000, 200);
// abc(700, 500);
// abc(900, 700);

//  //practice quiz

// var a;
// function abc(){
//   a = 10;
// }
// console.log(a);
// abc();

// var a;

// function abc(){
//   a = 10;
// }
// abc();

// console.log(a);

// var a;

// function abc(){
//   a = 20;
// }
// function xyz(){
//   console.log(a, "Function XYZ");
// }
// abc();
// xyz();

//////                            switch case
//////                                        switch case
//////                                                 switch case
//////                                              switch case
//////                               switch case
//////                switch case
// var day = "mon";

// switch (day) {
//   case "mon":
//     console.log("monday alert!");
//     break;
//   case "tue":
//     console.log("tuesday alert!");
//     break;
//   case "wed":
//     console.log("wednesday alert!");
//     break;
//   case "thu":
//     console.log("thursday alert!");
//     break;
//   case "fri":
//     console.log("friday alert!");
//     break;
//   case "sat":
//     console.log("saturday alert!");
//     break;
//   case "sun":
//     console.log("chutti alert!");
//     break;
//   default:
//       console.log("is week nahi hai");

// }

// /////////////      /////////////////////////////WHILE LOOOOOOOOOOOOOOOOOOOOOOOOOOPPPP

// var i = 0;
// while(i<10)
// {
//   i++
//   console.log(i)
// }

// var i = 0;
// while(i<10)
// {
//   console.log(i)
//   i++
// }

//              ///////////////// DO WHILE ////////////////// DO WHHILE

// var i = 0;
// do{
//   console.log(i)
//   i++

// }while(i<1)

////////// PRACTICE JAVA SCRIPt

// var array1 = [2, 4, 6, 8, 1, -1, 5, 7, 29, 23, -1];
// // [-1,-1,1,2,4,5,6,7,8,23,29]
// var resultArray = [];

// for(var i = 0 ; i <= array1.length ; i++){
//     if(array1[i] < 0){
//         resultArray.unshift(array1[i])
//     }
//     else{
//         resultArray.push(array1[i])
//     }
// }
// console.log(resultArray);

// function clickbtn(){
//   console.log("KHUL JAA BHAI !");
// }

function flip(elemnt, value) {
  console.log(elemnt, value);
  if (value) {
    elemnt.style.backgroundImage = "url(./images/images.png)";
  } else {
    elemnt.style.backgroundImage = "url(./images/download.png)";
  }
}

//  //correct statment
//  alert("You're learning JavaScript!");

//  // my choice statment
//  alert("Hello, MY name is Areeb Ali.");

//  //                  chapter 2
//  var myVariableName = "echapter 2";

//  var myStringVariable;
//  myStringVariable = "string.";
//  var teamName = "Areeb jav";

//  alert(teamName);
//  var bestMan = "Areeb";
//  bestMan = "Ali";

//  /// chapter no 3
//  var caseQty;
//  caseQty = 144;
//  var num = parseInt("9");
//  var num1, num2, sum;
//  num1 = 5;
//  num2 = 7;
//  sum = num1 + num2;

//  // chapter n0 12

//  var variable1 = 10;
//  var variable2 = 8;

//  if (variable1 >= variable2) {
//      alert("Variable 1 is greater than equal to Variable 2");
//  } else {
//      alert("Variable 1 is less than Variable2");
//  }
//  var marks = parseFloat(prompt("Enter your marks:"));

//  if (isNaN(marks)) {
//      alert("Please enter a valid number for marks.");
//  } else if (marks >= 90 && marks <= 100) {
//      alert("Your percentage is " + marks + "%.\nGrade: A");
//  } else if (marks >= 80 && marks < 90) {
//      alert("Your percentage is " + marks + "%.\nGrade: B");
//  } else if (marks >= 70 && marks < 80) {
//      alert("Your percentage is " + marks + "%.\nGrade: C");
//  } else if (marks >= 60 && marks < 70) {
//      alert("Your percentage is " + marks + "%.\nGrade: D");
//  } else if (marks < 60) {
//      alert("Your percentage is " + marks + "%.\nGrade: F");
//  } else {
//      alert("Invalid input for marks. Please enter a number between 0 and 100.");
//  }

//  /////chapter mo 13

//  if (a === b && c === d) {
//      // Rest of the code ifboth conditions are true
//  }
//  if (a === b || c !== d) {
//      // rest the code if either both conditions are true
//  }
//  if ((name === "Hamza" || name === "Areeb") && age < 60) {
//      //  if both conditions are true
//  }
//  var variable1 = 5;
//  var variable2 = 10;

//  if (variable1 < variable2 || variable1 > variable2) {
//      alert("first variable is less than and greater than second variable.");
//  }
//  //
//  var firstName = "YourFirstName";
//  var lastName = "YourLastName";

//  var userInputFirstName = prompt("Ente first name:");
//  var userInputLastName = prompt("Ente last name:");
//  //

//  if (userInputFirstName === firstName && userInputLastName === lastName) {
//      alert("Your first and last names match!");
//  } else {
//      alert("first and last names do not match.");
//  }

//  ////chapter 14

//  var password = "example123";

//  if (password !== "") {
//      if (password.length <= 5) {
//          alert("Password must greatr than 5.");
//      } else {
//          alert("OK bhai");
//      }
//  }
//  if (a === 1) {
//      if (c === "Max") {
//          alert("OK vbhai");
//      }
//  }
//  if (a === 1 && c === "Max") {
//      alert("OK");
//  }

//  //
//  var variable1 = 7;
//  var variable2 = 7;

//  if (variable1 === variable2) {
//      if (variable1 <= variable2) {
//          alert("Both conditions true congrats!");
//      }
//  }

//  //chapoter  15
//  var emptyArray = [];
//  var stringArray = ["Hello"];
//  var alphabet = ["h", "i", "j", "k"];
//  alert(alphabet[2]);
//  //output j

//  //
//  var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
//  var arrayLength = alphabet.length;
//  alert("The total length of the array is: " + arrayLength);

//  //
//  var myArray = ["First Element"];
//  myArray[1] = "Second Element";
//  alert(myArray[1]);

//  //  chapter 20

//  /// class practice question
//  // var a = ["A","B","C","D","E"];
//  // var b = [1,2,3,4,5,6,7,8,9];

//  var a = ["a", "b", "c", "d", "e"];
//  var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  var mergedArray = [];

//  for (var i = 0; i < b.length; i++)
//   {
//      for (var j = 0; j < a.length; j++) {
//          mergedArray.push(b[i] + a[j]);
//      }
//  }

//  console.log(mergedArray);

// // var bill = 90;
// // // var bill = 90;

// // if (bill <= 90)
// // {
// //     console.log("5 units");
// // }
// // else if(bill == 50 )
// // {
// //     console.log("15 units");
// // }
// // else
// // {
// //     console.log("35 units");
// // }

// //                                   //   user input biill bharna

// // var bill = alert(parseFloat(prompt("Enter your billing ammount")));

// // if (bill <= 200)
// // {
// //     console.log(bill * 5,"you have 10 units");
// // }

// //                         // multiple condetions to aik sath chala sakty hain

// // var age = 10;
// // var cnic = true;
// // var studendcards = true;

// // if(age >= 18 || studendcards == true)
// // {
// //     console.log("bhago yhan say");

// // }

// //                        // practicekari hai  usi codwe ki

// // var age = 10;
// // var cnic = false;

// // if(age == 18 || cnic == true )
// // {
// // console.log("Allow");
// // }
// // else {
// //     console.log("not allow");
// // }

// //                         // ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY ARRAY
// // var arr = ["A","B","C"];
// //    console.log(arr[2]);
// //    arr[2] = 12;
// //    console.log(arr);

// //    arr[4] = "D";
// //    console.log(arr);

// // // last mai koi value dalni ho

// //    arr.push("D");
// //   arr.pop();
// //    console.log(arr);

// // //    start ki vale shift karna

// // arr.shift();
// // arr.unshift("2");

// // //  EXACT KARTA HAI ARRAY KI VALUE

// // var arr = ["A","B","C","D","E"]
// // var a = arr.slice(0, 2);
// // console.log(a);

//                   // YA AJJ KA KAM HAI AJJ DATE HAI 9 DECEMBER 2023 OR SATURDAY HAI
//                   //, ARRAYS

// // ager ab ko kisi bhi lafz ka index pata karna Hho to,, mno ka indexmalom kar rahay hain
// //kay mno kis index per hai yai batai ga 1 per hai 2 per hai ya 3 per

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'xyz']
// var i = a.indexOf('mno')
// console.log(i);

// //index may 'gye' nahi hai tu yai -1 print kray ga \

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz']
// var i = a.indexOf('gye');
// console.log(i);

// //array may gye hai tu word found print karay ga ager gye nahi hai to work not found karay print

// var i = a.indexOf("gye");
// if(i != -1){
//   console.log("word found");
// }
// else{
//   console.log("word not found");
// }

// //array ki lengthcount kraya ga 4 hai 5 hai ya 6 hai

// var count = a.length;
// console.log(count);

// //last wala index print karay ga ap ka

// var lastIndex = count-1;
// console.log(a[lastIndex]);

// //start say end tak saray elemnt la dega

// var lastElement = a.slice(1);
// console.log(lastElement);

// //array ko reverse kar sakaty hain asay

// var nev = a.reverse();
// console.log(nev);

// //array ko merge karna hai asay

// var combineLetters = a.join("");
// console.log(combineLetters);

// //in dono array ko apas may join karn hai

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz']
// var b = [1,2,3,4,5];

// var combineArray = a.concat(b);
// console.log(combineArray);

// //index may lafz ho ga to true ager nahi hoga tu false

// var i = a.includes('abc');
// console.log(i);

//             //yai bhi ajj ka kam hai loop loop loop loop loop
//             //loop loop loop loop loop loop loop loop klooop loop loop loop
//             //loop loop lopp lopp loop loop loop loop loop loop loop loop
//             //loop loop loop loop loop loop loop loop loop loop loop loop

// //sareay index print kar dega

// for(i = 0; i < 10; i++)
// {
//     console.log(i);
// }

// //Array print kar dega sab

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz'];
// for(i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }

// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz' , 'ano'];
// var b = 'ano';
// for (i = 0; i < a.indexOf(b); i++)
// {
//     if(i = b)
//     {
//         console.log("word hai");
//       }
//       else{
//         console.log("word nahi hai");
//       }
// }
// var a =['abc' , 'kjl' , 'yut' , 'mno' , 'omn' , 'xyz' , 'ano'];
// var b = 'ano';
// for (i = 0; i < a.indexOf(b); i++)
// {
//     if(i = b)
//     {
//         console.log("word hai");
//       }
//       else{
//         console.log("word nahi hai");
//       }
// }

//  //nested looop nested loop nested looop nested
//   //loop nested looop nested loop nested looop
//   //nested loopnested looop nested loopnested
//   //looop nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested looop
// //nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested
//  //looop nested loopnested looop nested loop
//  //nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested looop
// // nested loopnested looop nested loopnested
// // looop nested loopnested looop nested loopnested
//  //looop nested loopnested looop nested loop

// for(var i = 0; i < 10; i++)
//  for(var j = 0; j < 5; j++)
// {
//     console.log(i,j);
// }

// // var a = ["A","B","C","D","E"];
// // var b = [1,2,3,4,5,6,7,8,9];

// var a = ["A", "B", "C", "D", "E"];
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var mergedArray = [];

// for (var i = 0; i < b.length; i++)
//  {
//     for (var j = 0; j < a.length; j++) {
//         mergedArray.push(b[i] + a[j]);
//     }
// }

// console.log(mergedArray);

//changing case

//changing case
//changing case
//changing case
//changing case
//changing case
//changing case
//changing case
//changing case//changing case
//changing case\

///user capital or small spelling dalay tu yai accept karay ga to lower case kay through

// var a = "Karachi";
// a = a.toLowerCase();

// var b = prompt("Enter City Name");
// b = b.toLowerCase();

// if(a == b){
//   console.log("City Matched");
// }

////   city found karayy ga ap kay arrya may hai  ya nahi

// var city = ['karachi' , 'lahore' , 'islamabad' , 'quetta' , 'peshawar' , 'hyderabad']
// city = city.toLowerCase();
// var loog = prompt("Enter City Name");
// for (a = 0; a < city.length; a++)
// {
//   console.log(city[a]);
//   if(city[a] == loog)
//   {
//     alert(loog,"matched");
//   }
//   else(city[a] != loog)
//   {
//     alert(loog, "city not matched");
//   }
// }

////   city found karayy ga ap kay arrya may hai  ya nahi

// var arr = ['karachi' , 'lahore' , 'islamabad' , 'quetta' , 'peshawar' , 'hyderabad']
// var a = prompt("Enter City Name");
// a = a.toLowerCase("entercity");

// for (a = 0; a < city.length; a++)
// {
//   console.log(arr[i]);
//   arr[i] = arr[i].toLowerCase();
//   console.log(arr[i])
// }

/// staurday word found kiya hai
// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";

// for(var i = 0; i < a.length; i++)
// {
// var checkLetter = a.slice (i, i + 8);
// console.log(checkLetter);
// if(checkLetter == word)
// {
//   console.log("word Found");
// }
// }

// saturdayki jagah kal chutti hai word add kar diya

// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing Saturday elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore saturday odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";
// var secondword = "Kal chhhutti hai";
// var startingText;
// var endingText;

// for(var i = 0; i < a.length; i++)
// {
//   var checkLetter = a.slice(i,i + 8);
//   if(checkLetter == word)
//   {
//     console.log(checkLetter, i);
//     startingText = a.slice(0, i);
//     endingText = a.slice(i + 8);
//     console.log(startingText);
//     console.log(endingText);

//   }

// }
// a = startingText + secondword + endingText;
// console.log(a);

// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing Saturday elit Nostrum laudantium numquam suscipit enim doloremque quisquam erroquae! Explicabo iusto ipsam istetempore saturday odit quam qui amet totam. Vitae, voluptate perspiciatis";
// var word = "Saturday";
// var secondword = "Kal chhhutti hai";
// var startingText;
// var endingText;

// for(var i = 0; i < a.length; i++)
// {
//   var checkLetter = a.slice(i,i + 8);
//   if(checkLetter == word)

//   {
//     console.log(checkLetter, i);
//     startingText = a.slice(0, i);
//     endingText = a.slice(i + 8);
//     console.log(startingText);
//     console.log(endingText);
//     a = startingText + secondword + endingText;

//   }
//   console.log(checkLetter);

// }
// a = a.replace(/Saturday/, secondword);
// console.log(a);

// console.log(a);

// round off karde ga value ko
// var a = 3.5;
// var b = Math.round(a);
// console.log(b);

// ///  point walay number ko zaya nahuii karay ga, or agay lay jai ga

// var a = 45.1;
// var b = Math.ceil(a);
// console.log(b);

// // 16.9 hay to 17 nahi karay ga 16 per hi lay kar aye ga

// var a = 16.9;
// var b = Math.floor(a);
// console.log(b);

// // random number generatotr karay ga har bar

// var a = Math.random();
// var b = Math.round(a);

// console.log(a, b);

// /// practice kari haiu\

// var a = 4;
// var b = Math.round(a);
// console.log(b);

// // value fixed karay ga lambi value aye to short kar dega

// var a = 100 / 3;
// var b = a.toFixed(2);
// console.log(b);

// // number barhanay hon to yai us kay liye haicode

// var a = 34.349;
// console.log(a * 2000);

// var b = a.toFixed(2);
// console.log(b * 2000);

// //           // date wagaira set karna
// // //           date and time
// // //           1/6/2024
// // //           saturday

// // var currentDate = new Date("2023-12-01T12:30:50");

// // console.log(currentDate .getDate());
// // console.log(currentDate .getMonth());
// // console.log(currentDate .getFullYear());
// // console.log(currentDate .getHours());
// // console.log(currentDate .getMinutes());
// // console.log(currentDate .getSeconds());

// var currentDate = new Date();

// console.log(currentDate.getDate(15));
// console.log(currentDate.getDate());

// console.log(currentDate.setFullYear(2024));
// console.log(currentDate.getFullYear());

// console.log(currentDate.setMonth(2));
// console.log(currentDate.getMonth());

// // pakistan ka date or time batai ga

// var currentDate = new Date();
// currentDate.getDate();

// currentDate.getMonth();

// currentDate.getTime();

// currentDate.getDay();

// currentDate.getFullYear();

// currentDate.getHours();

// // date time months setting back on previous month

// var currentDate = new Date("2023-12-01T12:30:50");

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// // var currentDate = new Date("2023-12-01T12")
// // currentDate.setDate = ((new setDate).setDate(-11));

// //function

// function abc() {
//   console.log("ABC");
// }
// abc();

// //             minus kar raja hai

// // function abc(){
// //   var amount =  a - 200;
// //   console.log(amount);

// // }
// // abc(500);
// // abc(1000);
// // abc(700);
// // abc(900);

// //minus

// function abc(a, b) {
//   var amount = a - b;
//   console.log(amount);
// }
// abc(500, 100);
// abc(1000, 200);
// abc(700, 500);
// abc(900, 700);

// //practice quiz

// var a;
// function abc() {
//   a = 10;
// }
// console.log(a);
// abc();

// var a;

// function abc() {
//   a = 10;
// }
// abc();

// console.log(a);

// var a;

// function abc() {
//   a = 20;
// }
// function xyz() {
//   console.log(a, "Function XYZ");
// }
// abc();
// xyz();

/////// OBJECT // OBJECT//// OBJECT/////

/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////
/////// OBJECT // OBJECT//// OBJECT/////////
/// OBJECT // OBJECT//// OBJECT/////

// var aliabject = {
//   name: "AREEBALI",
//   age: 22,
//   email: "areebali893@gmail.com",
//   ready: true,
//   hobbies: ["coding", "heyy world"],
// };
// console.log(aliabject.hobbies[0]);

// var arr =["abc", 456]
// console.log(arr)



/////////////////////////// PRACTICE 2 PRACTICE 2PRACTICE 2 PRACTICE 2PRACTICE 2 
//PRACTICE 2PRACTICE 2
//PRACTICE 2PRACTICE 2
 //PRACTICE 2PRACTICE 2 
//PRACTICE 2PRACTICE 2 
//PRACTICE 2PRACTICE 2 
//PRACTICE 2
 //PRACTICE\
 // 2 PRACTICE
 // 2PRACTICE 2
 // PRACTICE 2

 var myNestedObj = [
  {
      name: "Abc",
      name1: "Xyz",
      name2: ["Arsalan", "Hamza", {
          teachersName: "Sir basit",
          headtechaer: ["Sir ali", "Hamza"],
          stdNames: {
              std1: "Mubashir",
              std2: "Yousuf",
              std3: "hassan",
              std4: "Shaheer",
              std5: {
                  stdExclude: ["Muneed", "Usaid"]
              }
          }
      }]
  }
]
console.log(myNestedObj[0].name2[2].stdNames.std5.stdExclude[1])





function quizDisplay(){
  
}

var questions = [
  {
      question:"Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
  },
  {
      question:"Css Stands For _______________________",
      options: [
          "Casecading Style Sheet",
          "Java",
          "Ram",
          "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
  },
  {
      question:"Js Stands For _______________________",
      options: [
          "Java Style",
          "Java Script",
          "Script",
          "Script Src"
      ],
      correctAns: "Java Script",
  },
  {
      question:"Dom Stands For _______________________",
      options: [
          "Document Object Model",
          "html",
          "Css",
          "Java"
      ],
      correctAns: "Document Object Model",
  },
  {
      question:"Ram Stands For _______________________",
      options: [
          "Read Only Memory",
          "Dom",
          "Random Acccess Memory",
          "For Pc"
      ],
      correctAns: "Random Acccess Memory",
  },
  {
      question:"Rom Stands For _______________________",
      options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
  },
];
