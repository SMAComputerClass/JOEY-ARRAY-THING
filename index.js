'use strict';

var highest = 0;

var myPickles = new Array;
for (var i = 0; i < 10; i++) {
  myPickles.push(Math.floor((Math.random() * 50)))
}
//------------------------------------------------------------------------------------------------------
console.log(myPickles);

for (var i = 0; i < myPickles.length; i++) {
  if(myPickles[i] > myPickles[highest]){
     highest = myPickles[i]
     console.log("The highest number is " + myPickles[i]);
  }
}
//------------------------------------------------------------------------------------------------------
var i;
for (i = 0; i < myPickles.length; i++)
{





    if(myPickles[i] % 5 == 0)
    {
      console.log("Array index " + i + " Has a value of " + myPickles[i]);
    }
    else if(myPickles[i] % 2 == 0)
    {
      console.log(myPickles[i] + " is even so i'll double");
      myPickles[i] = myPickles[i] * 2;

    }

}
//------------------------------------------------------------------------------------------------------

highest = 0;

for (var i = 0; i < myPickles.length; i++) {
  if(myPickles[i] > myPickles[highest]){
     highest = myPickles[i]
     console.log("The highest number is " + myPickles[i]);
  }
}

console.log(myPickles);
// Enter your js code Here
