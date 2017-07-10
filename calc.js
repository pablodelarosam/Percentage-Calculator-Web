//getelementbyid grabs html elements by its id
var num1 = document.getElementById('field1');
var num2 = document.getElementById("field2");
var result = document.getElementById("result");

//Value es applicable for inputs and for h3.. innertext
//num1.value = 5;
//num2.value = 2;
//result.innerText = num1.value + num2.value;
//console.log(result);

//Event on listeners like onclick are used in a button but not in a input

var form = document.getElementById('xiswhatofy');

//ADD LISTENER after the submit button is clicked, the function will be executed

form.addEventListener('submit', function (event) {
    //If there is not value in num1 or num2 then...
    //This is called form validation
    if(!num1.value || !num2.value) {
        alert("Please enter some values");
    } else {
        //Remember values from textfields are TEXT!!!
        //To convert a string into a float to do math operations
        var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);
    var res = x / y ;
    var percent = res * 100;
    result.innerText = "The answer is " + percent + " %";  
        //This is for stop refreshing when submit button is clicked
    event.preventDefault();
    }
   
});



//With button

var butto = document.getElementById("buttonc");

butto.addEventListener('click', function myOnclick() {
       //This is called form validation
    if(!num1.value || !num2.value) {
        alert("Please enter some values");
    } else {
        //Remember values from textfields are TEXT!!!
        //To convert a string into a float to do math operations
        var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);
    var res = x / y ;
    var percent = res * 100;
    result.innerText = "The answer is " + percent + " %";  
    }
});

function myFunc() {
    var data = [];
    var length = document.getElementById("mySelect").options.length;
     var x = document.getElementById("mySelect").options.selectedIndex;
     var operation = document.getElementById("operation");
       var math = document.getElementById("math");
    
operation.innerText = x;
    if(x == 1) {
  var z = parseFloat(num1.value);
    var y = parseFloat(num2.value);
          var res = z / y ;
    var percent = res * 100;
    math.innerText = "The answer is " + percent + " %";  
   // math.innerText = "The math is " + res;    
    }
    if( x == 2) {
      var z = parseFloat(num1.value);
    var y = parseFloat(num2.value);
          var res = z / 100 ;
        var percent = res * y ;
     math.innerText =  "The answer is " + percent + " %"; 
    }
    
     if( x == 3) {
          var z = parseFloat(num1.value);
    var y = parseFloat(num2.value);
          var res = y / z ;
         var percent = res * 100;
    math.innerText = "The answer is " + percent + " %";
    }
     if( x == 4) {
         
            var z = parseFloat(num1.value);
    var y = parseFloat(num2.value);
          var res = y / z ;
         var percent = res * 100;
    math.innerText = "The answer is " + percent + " %";
     // math.innerText =   4
    }
     if( x == 5) {
             var z = parseFloat(num1.value);
    var y = parseFloat(num2.value);
          var res = z / y ;
         var percent = res * 100;
    math.innerText = "The answer is " + percent + " %";
    }
    
//    for(var i = 0; i <length; i++) {
//          var x = document.getElementById("mySelect").options.item(i).text; 
//        data.push(x);
////        operation.innerText = x;
////        console.log(data[i]);
//    }
    
 
    
   
    
    
    
}

