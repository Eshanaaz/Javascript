///////////////////////////////////CHAPTER 01 //////////////////////////////////////////

//////////////////////QUESTION 01///////////////
// Q1 Write a script to greet your website visitor using JS alert box.

//  alert("HELLO FELLLAS!!  \n\n\n Have a nice day!")


// //////////////////////QUESTION 02///////////////
// // Q2  :Write a script to display following message on your web page:


//  alert("ERROR! Please enter a valid password.")


// //////////////////////QUESTION 03///////////////
// // Q3  :Write a script to display following message on your web 
// // page: (Hint : Use line break)

// alert("Welcome to JS Land.... \n HAPPY CODING!")



//  ////////////////////////QUESTION 04///////////////
// // Q4  :Write a script to display following messages in sequence.

// alert("Welcome to JS Land.... ")
// alert(" Happy Coding! \n Prevent this page from creating additional dialogs.")



// //////////////////////QUESTION 05///////////////
// // Q5  :Generate the following message through browser’s developer console:


//  alert("Hello....I can run JS through my web browser's console")


////////////////////////QUESTION 07///////////////

// CORRECT ANSWER IS D. 



///////////////////////////////////CHAPTER 02//////////////////////////////////////////


////////////////////////QUESTION 01///////////////



// // Q1: Declare a variable called username


//  var userName;




// ////////////////////////QUESTION 02///////////////
// // Q2:Declare a variable called myName & assign to it a string 
// // that represents your Full Name


// var myName= "Esha Naz";
// alert(myName);


////////////////////////QUESTION 03///////////////

//Q3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// // c) Display the message in alert box.


// // a// and //b//
//    var message= "Hello World";

//    ///c///
//    alert(message);




// ////////////////////////QUESTION 04///////////////


//  var userName=prompt("Enter Your Name", "your Name")
//  alert(userName);    


//  var userAge=prompt("Enter Age", "Enter Age");
//  alert(userAge);

//  var userInstitute=prompt("Enter Institute Name", "Enter Institute Name");
//  alert(userInstitute);




// ////////////////////////QUESTION 05///////////////

// var pizza= "Pizza\nPizz\nPiz\nPi\nP";
// alert(pizza);     



// ////////////////////////QUESTION 06///////////////

// var email="My email address is "+ " " +"@eshanaz76@gmail.com"
// alert(email);


// ////////////////////////QUESTION 07///////////////

// var book= "I am trying to learn from the book A smarter way to learn JavaScript."
// alert(book);

// ////////////////////////QUESTION 08///////////////



// var textWrite= prompt( "Write a message");
// document.write("Yah! I can write HTML content through JavaScript");



// ////////////////////////QUESTION 09///////////////


//  var stoRe="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
//  alert(stoRe);




///////////////////////////////////CHAPTER 03 //////////////////////////////////////////

////////////////////////QUESTION 01///////////////

// var age= prompt ( "Enter Age")
// alert("I am "+age+" years old");

// ////////////////////////QUESTION 02///////////////

// var n=prompt("visiting times", "Visiting times")
// alert("You have visited this site " + " "+ n + " "+ "times" )




////////////////////////QUESTION 03///////////////


//  var birthYear=prompt("My birth Year is","My bith Year is")
//  document.write("My birth Year is" +" "+ birthYear);



////////////////////////QUESTION 04///////////////

// var userName=prompt("Enter Name", "Enter Name");
// document.write(userName + " ");


// var order=prompt("ordered","n T-Shirts");
// document.write( "ordered"+ " "+ " "+ order + " "+ "T-Shirts");

// var store=prompt("XYZ clothing store", "XYZ clothing store");
// document.write(store)





                          ///////////////////////////////////CHAPTER 04 //////////////////////////////////////////


////////////////////////QUESTION 01///////////////

// Using var
// Using let
// Using const


//or//


//var a, b, c



////////////////////////QUESTION 02///////////////


// LEGAL VARABLES ARE:

// 1-camelCase .... userName
// 2-name12   ..... 
// 3-$name
// 4-first_Name
// 5-name12name




// ILLEGAL VARIABLES ARE :


// 1-?name
// 2-123name
// 3-spacename
// 4-*name
// 5- /name 


////////////////////////QUESTION 03///////////////



// var blank_1 = "numbers";
// var ab="$" ;
// var blank_3 ="_";
// var blank_2 ="a letter";
// var blank_4 ="sensitive",blank_5="keywords" ;



// var a= " <h2> Rules for naming JS variables</h2> <br> <br>"
// document.write(a);
// document.write("<h4> Variable names can only contains "+blank_1+" , "+ab+" and "+blank_3+". For example $my_1stVariable");
// document.write("<br>Variable must begin with "+blank_2+","+ab+" or "+blank_3+". For example $name, _name or name");
// document.write("<br>Variable names are case"+blank_4);
// document.write("<br>Variable names are case "+blank_5 );



                        ///////////////////////////////////CHAPTER 05 //////////////////////////////////////////



////////////////////////QUESTION 01///////////////


// var a=+prompt("value1" , "value1")
// var b=+prompt("value2" , "value2")
// var c=(a+b)
// document.write( "Sum of" + " " + a + " " + "and" + " " + b+ " " + "is" + " " +c)


// ////////////////////////QUESTION 02///////////////


// var a=prompt("value1" , "value1")
// var b=prompt("value2" , "value2")
// var c=(a-b)

// document.write( "Sum of" + " " + a + " " + "and" + " " + b+ " " + "is" + " " +c)




////////////////////////QUESTION 02///////////////


// var a=prompt("value1" , "value1")
// var b=prompt("value2" , "value2")
// var c=(a*b)

// document.write( "Sum of" + " " + a + " " + "and" + " " + b+ " " + "is" + " " +c)



// ////////////////////////QUESTION 02///////////////


// var a=prompt("value1" , "value1")
// var b=prompt("value2" , "value2")
// var c=(a/b)

// document.write( "Sum of" + " " + a + " " + "and" + " " + b+ " " + "is" + " " +c)



// ////////////////////////QUESTION 02///////////////

// var a=prompt("value1" , "value1")
// var b=prompt("value2" , "value2")
// var totolMarks= a + b
// var per = (totolMarks / 200) * 100
// document.write("<br/> Percentage: "  + per)


// ////////////////////////QUESTION 04///////////////

// var a=prompt("cost of ticket")
// var b=prompt("how many tickets" )
// var c=(a*b)
// document.write ("Total cost to buy  " +" "+ b +  " "+ " tickets to a movies is " + c)







// ////////////////////////QUESTION 05///////////////


var num =+prompt("Table number ?? ");
document.write("<br>");
document.write("<br> Table of "+num);
document.write("<br>");
for(i=0;i<=10;i++){
    mul=num*i;
    document.write(num+" x "+i+" = "+mul);
    document.write("<br>");
}



                         ///////////OR///////////


// document.write ("Table of 4" + " " + "<br>");


// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");



// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");


// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");



// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");


// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");



// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");


// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");



// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");


// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");



// var a=prompt("Table");
// var b=prompt("* number");
// var c= a*b ;

// document.write(a + "*" + b + " "+ "=" + c + "<br>");


// ////////////////////////QUESTION 06///////////////

// // c=(F -32) * 5 /9


// var Fah = +prompt("Enter temperature in fahrenhitrate?? ");
// var C = (Fah-32)*5/9;
// document.write(Fah+"F is "+C+"C");
// document.write("<br>");







// //F=(C*9/5)+32
// var cel = +prompt("Enter temperature in celsius?? ");
// var F = (cel*9/5)+32;
// document.write(cel+"C is "+F+"F");
// document.write("<br>");


// ////////////////////////QUESTION 07///////////////


// var item1=+prompt("Price of item 1  " )
// document.write("Price of item1 is :"+item1+ "<br>" )

// var item2 = +prompt("Price of item 2?? ");
// document.write("Price of item2 is :"+item2+ "<br>" )

// var qun1=+prompt("Quantity of item 1 ")
// document.write("Quantity of item1 is:  "+ qun1+ "<br>")

// var qun2 = +prompt(" Ordered quantity of item 2?? ");
// document.write("Quantity of item2 is:  "+ qun2+ "<br>")



// var ship=100
// var tot_cost=(item1*qun1)+(item2*qun2);
// document.write("The total cost is "+tot_cost);









// ////////////////////////QUESTION 08///////////////



// var sub1 = +prompt("Urdu mark")
// var sub2 = +prompt("JS mark")
// var sub3 = +prompt("HTML mark")
// var obtainedMarks = sub1 + sub2 + sub3
// document.write("Obtained Marks:"   + obtainedMarks +"<br>")

// var totalMarks=300
// document.write("Total Marks :" + totalMarks)

// var per = (obtainedMarks / 300) * 100

// document.write("<br/> Percentage: "  + per)






                                        //////////CHAPTER 06 -- 09 //////////////////////////////////////////

// // ////////////////////////QUESTION 01///////////////
// var a = 10;

// document.write("<h3> Result </h3><br>");
// document.write("The value of a is : "+a );


// document.write(" <hr><br><br>The value of ++a is : "+(++a));
// document.write("<br>Now the value of a is : "+a);

// document.write("<br> <br> The value of a++ is:" +a++)
// document.write("<br> Now the value of a is:" +a)

// document.write("<br> <br> The value of --a is:" +--a )
// document.write("<br> Now the value of a is:" +a)

// document.write("<br> <br> Now the value of a-- is:" +a--)
// document.write("<br> Now the value of a is:" +a)




// ////////////////////////QUESTION 02///////////////

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--
// document.write(result)


// var a=2, b=1;
// var result = --a
// document.write("the value  --a is " + " "+ result   +"<br>")

// var a=2, b=1
// var result= --a - --b 
// document.write("the value --a - --b is " + " "+ result +"<br>")

// var a=2, b=1
// var result = --a - --b + ++b
// document.write("the value --a - --b + ++b is " + " " + result  +"<br>")


// var a=2, b=1
// var result = --a - --b + ++b + b--
// document.write("the value  --a - --b + ++b + b-- is " + " " + result  +"<br>")

                                   ///SHORTCUT//////////////


// var a = 2,b=1,result ;
// var result= --a - --b + ++b + b--;
// document.write("<br> a is" + a)
// document.write(" <br> b is " + b)
// document.write(" <br>result is " + result);


// ////////////////////////QUESTION 03//////////////



// var $nam=prompt("Your name, Sir?? ");
// document.write("Hello "+$nam + " Nice to meet you!")



// ////////////////////////QUESTION 04//////////////

// var sub1=prompt("Enter 1st subject name");
// var sub2=prompt("Enter 2nd subject name");
// var sub3=prompt("Enter 3rd subject name");
// var sub1m=+prompt("Enter obtained marks out of 100 :")
// var sub2m=+prompt("Enter obtained marks out of 100 :")
// var sub3m=+prompt("Enter obtained marks out of 100 :")
// obt=sub1m+sub2m+sub3m 
// per=obt/300*100


// document.write("<h3> Subjects &emsp; Total_Marks &emsp; Obtained_Marks &emsp; Percentage");
// document.write("<br>");
// document.write("<br>");


// document.write( sub1 +" &emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;" + sub1m+  "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; " +sub1m+ "%" )
// document.write("<br>");


// document.write( sub2 +" &emsp;&emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;"+ sub2m+  "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; " +sub2m+ "%")
// document.write("<br>");

// document.write( sub3 +" &emsp;&emsp;&emsp;&emsp;&emsp; 100 &emsp;&emsp;&emsp;&emsp;&emsp;" + sub3m+  "&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;" +sub3m+ "%" )
// document.write("<br>");


// document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 300 &emsp;&emsp;&emsp;&emsp;&emsp;"+obt+" &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp; "+per+"%");




// Question:5

// var tab =prompt("write a number")
// document.write("Table of" + tab +"</br>")
// document.write( tab + "X1=" + (tab *1) + "</br>" );
// document.write( tab + "X2=" + (tab *2) + "</br>" );
// document.write( tab + "X3=" + (tab *3) + "</br>" );
// document.write( tab + "X4=" + (tab *4) + "</br>" );
// document.write( tab + "X5=" + (tab *5) + "</br>" );
// document.write( tab + "X6=" + (tab *6) + "</br>" );
// document.write( tab + "X7=" + (tab *7) + "</br>" );
// document.write( tab + "X8=" + (tab *8) + "</br>" );
// document.write( tab + "X9=" + (tab *9) + "</br>" );
// document.write( tab + "X10=" + (tab *10) + "</br>" );

// Question:6

// var C =prompt("Provide the Celsius value")
// var F =prompt("Provide the Fahrenheit value")

// var F = (C *9/5)+32;
// var C = (F - 32) *5/9

// document.write(C + "oC is" + F +"oF</br>");
// document.write(F + "oF is" + C +"oC</br>");

// Question:7

// var item1 =prompt("Price of item 1:")
// var quant1 =prompt("Quantity of item 1:")
// var item2 =prompt("Price of item 2:")
// var quant2 =prompt("Quantity of item 2:")
// var ship = 100;

// var total1 = item1 * quant1 + item2 * quant2 +ship;

// document.write("Price of item 1 is:" + item1 + "</br>")
// document.write("Quantity of item 1 is:" + quant1 + "</br>")
// document.write("Price of item 2 is:" + item2 + "</br>")
// document.write("Price of item 2 is:" + quant2 + "</br>")
// document.write("Shipping Charges:" + ship + "</br>")
// document.write("Total cost of your order is:" + total1 + "</br>")

// Question:8

// var tMarks =prompt("Total marks?")
// var oMarks =prompt("Obtain marks?")

// var per = oMarks / tMarks *100;

// document.write("Total Marks" + tMarks + "</br>")
// document.write("Obtain Marks" + oMarks + "</br>")
// document.write("Percentage" + per + "%</br>")

// Question:9

// var US =prompt("How many US dollars do you have?")
// var SR =prompt("How many Saudi Riyals do you have?")

// var con1 = US * 104.80;
// var con2 = SR * 28;
// var con3 = con1 + con2;
// document.write("Total Currencyin PKR" + con3 + "</br>")


// Question:10

// var x = +prompt("shre the number")
//  var y = (((x + 5) * 10) /2)


// document.write(y);





// Question:11

// var x = prompt("shre the current year")
// var y = prompt("shre the birth year")

// var z = x-y;
// document.write("Current Year" + x + "</br>")
// document.write("Birth Year" + y + "</br>")
// document.write("Your Age is" + z + "</br>")

// Question: 12


// var x = prompt("shre the radius of the circle")
// var y = 3.142;

// var z =(2 * y) * x

// document.write("Radiusof the circle" + x + "</br>")
// document.write("The Circumference of the circle" + z + "</br>")
// document.write("TheArea is" + z + "</br>")



// // Question:13
// var fs =prompt("enter your favorite snack?")
// var cage =prompt("enter your current age?")
// var mage =prompt("enter your maximum age?")
// var per =prompt("enter amount of snack per day?")
// var ned = mage-cage
// var day = ned * 365;
// var req = ned * per;
// document.write("Favorite Snack:" + fs + "</br>")
// document.write("Current Age:" + cage + "</br>")
// document.write("Estimated Maximum Age:" + mage + "</br>")
// document.write("Amount of snack per day:" + per + "</br>")
// document.write("You will need " + '&nbsp' + req + '&nbsp' + fs + " to last you until the ripe old age of " + mage + "</br>")













                           ///////////////////////////////////CHAPTER 06 -- 09 //////////////////////////////////////////



// ////////////////////////QUESTION 01///////////////
 




// var city ="Karachi"
// var city=prompt("Enter City");

// if (city=="Karachi"){
//  document.write("WELCOME TO THE CITY OF LIGHTS")
// }
//  else{
//    document.write("Enter Karachi for better title ")
//  }



// // ////////////////////////QUESTION 02///////////////



// var gender=prompt("Enter Gender \n Male   /    Female");
// if(gender=="Male"){
//     document.write("<br>Good Morning Sir!");
// }
// else if(gender=="Female"){
//     document.write("<br>Good Morning Ma'am!");
// }
// else{
//     document.write("<br>invalid input");
// }



// // ////////////////////////QUESTION 03///////////////

// var signalColor=prompt("Signals")
//  if(signalColor=="red"){
//    document.write("Must Stop !")
//  }
// else if(signalColor=="yellow")
//   {document.write("Ready to move")
// }
// else if(signalColor=="green"){
//    document.write("Move now")
// }
// else(
//   document.write("invalid")
// )

// // ////////////////////////QUESTION 04///////////////

// var fuel=prompt("Remaining fuel in car??")
// if(fuel<=0.255){
//   document.write("Please refill the fuel in your car")

// }
// else{
//   document.write("Long drive pe chal :p")
// }

// // ////////////////////////QUESTION 05///////////////



// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
//     }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



// // ////////////////////////QUESTION 06///////////////


// var sub1=prompt("Enter 1st subject name")
// var sub2=prompt("Enter 2nd subject name")
// var sub3=prompt("Enter 3rd subject name")
// var sub1m=+prompt("1st subject marks out of 100 is:" +sub1)
// var sub2m=+prompt("2nd subject marks out of 100 is:" +sub2)
// var sub3m=+prompt("3rd subject marks out of 100 is:" +sub3)
// obt=sub1m+sub2m+sub3m
// per=obt/300*100
// var grade, remarks;

// if(per >=80 &&  per<=100){
//   grade="A-one";
//     remark="Dil jeet lya";
// }
// else if (per<80 && per>=70){
//     grade="A";
//     remark="Jaani treat";

// }else if (per<70 && per>=60){
//     grade="B";
//     remark="You need to improve";

// }else if (per<60 && per>=0){
//     grade="Fail";
//     remark="Sorry";

// }else{
//     grade="invalid";

// }

// document.write("<h2> Marksheet </h2>");
// document.write("<br> Total marks: 300");
// document.write("<br> Marks obtained: "+obt);
// document.write("<br> Percentage: "+per+" %");
// document.write("<br> Grade: "+grade);
// document.write("<br> Remarks: "+remark);


// // ////////////////////////QUESTION 07///////////////


// var sec_num = 7;
// var gue_num = +prompt("Guess any number from 1 to 10 ?");
// if(gue_num==sec_num){
// document.write("Bingo! Correct answer.");
// }
// else if((gue_num+1)==sec_num){
// document.write("Close enough to the correct answer");
// }

// else{
//   document.write("Try again later man !")
// }


// // ////////////////////////QUESTION 08///////////////



// var num = +prompt("Divisible by 3 or not! \n Enter any number ?");
// if(num%3==0){
// document.write(num+" the given number is divisible by 3");
// }
// else{
// document.write(num+" the given number is not divisible by 3");
// }



// // ////////////////////////QUESTION 09///////////////


// var num=prompt("Even or Odd  /n  Enter any number ?")
// if(num%2==0){
//   document.write(num+ " " +"is even")

// }
// else{
//   document.write(num + " " + "is odd")
// }


// // ////////////////////////QUESTION 10///////////////


// var T=prompt("Temperature?")
// if( T>40){
//   document.write("It is too hot outside.")
// }
// else if(T>30){
// document.write("The Weather today is Normal")}

// else if(T>20){
//   document.write("Today’s Weather is cool")}
//   else if(T>10){
//     document.write("OMG! Today’s weather is so Cool.")}
//     else{
//       document.write("Brrrrrrr dead")}


// // ////////////////////////QUESTION 11///////////////



// var f_num=prompt(" Calculator \n Enter 1st number: ");
// var s_num=prompt("Enter 2nd number: ");
// var op=prompt("operator?? ");
// var result;
// if(op=="/"){
//     result= f_num/s_num;
// document.write(" calculated result: "+result);

// }
// else if(op=="*"){
//     result= f_num*s_num;
// document.write(" calculated result: "+result);

// }
// else if(op=="+"){
//     result= +f_num+ +s_num;
// document.write(" calculated result: "+result);

// }
// else if(op=="-"){
//     result= f_num-s_num;
// document.write(" calculated result: "+result);

// }
// else if(op=="%"){
//     result= f_num%s_num;
// document.write(" calculated result: "+result);

// }





////////////////////////////////////CHAPTER 12 - 13/////////////////////////

// Question:1

// var ch =prompt("share the character")

// if(ch >= 65 && ch <=90)
// {
// document.write(ch + " is an UpperCase character <br>");
// }
// else if(ch >= 97 && ch <=122)
// {
//     document.write(ch + " an LowerCase character <br>");
// }
// else {
//     document.write(ch + " is not an aplhabetic character <br>");
// }

// // Question:2

// var a=prompt("enter first number")
// var b=prompt("enter second number")

// if (a > 0 && b > 0 && a > b) {
//     document.write("The larger number is " + a );
//   } else if (a > 0 && b > 0 && a < b) {
//     document.write("The larger number is " + b);
//   } else if (a === b && a > 0 && b > 0) {
//     document.write("Both numbers are equal!")
//   } else {
//       document.write("Please add an integer!");

//   }









// Question:3

// var num1 = +prompt("share the number");


// if (num1 > 0) {
//     document.write("positive number </br>");
//   } else if (num1 == 0) {
//     ocument.write("zero </br>");
//   } else {
//     document.write("negative")
//   }

  
// Question:4

// var x = prompt("share the character");

// if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//     document.write("false");
  
//   } else {
//         document.write("true")
//       }

      // Question:5

    //   var x =prompt("enter your password")
    //   var y =prompt("enter your password again")

    //   if(x === y){
    //     document.write("Correct! The password you entered matches the original password");
    //   }
    //   else if(x !==y){
    //     document.write("Incorrect password");
    //    } else{
    //     document.write("Please enter your password");
    //    }
// Question:6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// Question:7

// var x =prompt("enter time in 24 hours clock format")

// if(x >=0000 && x < 1200){
//     document.write("Good Morning");
// } else if(x >=1200 && x < 1700){
//     document.write("Good Afternoon");
// } else if(x >=1700 && x < 2100){
//     document.write("Good Evening");
// } else if(x >=2100 && x < 2359){
//     document.write("Good Might");
// }
// else{
//     document.write("Enter correct time")
// }










































































