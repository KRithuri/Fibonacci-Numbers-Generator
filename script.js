

function generateFibonacci(num) {
    // y is representing the second term, and
    // z is representing the sum of x and y.
    var x = 0; // first term,
    var y = 1;
    var z;
    var i = 0;
    const fibonacci = [];

    fibonacci.push(x);
    fibonacci.push(y);

    for (i = 2; i < num; i++) {
      z = x + y;
      x = y;
      y = z;

      fibonacci.push(z);
    }
    return fibonacci;
}
 //var fib = document.getElementById("parameter").value;
 //sequence = fibonacci(fib);

//console.log(sequence);
var num = prompt("Enter number of terms");
answer = generateFibonacci(num);
  
console.log("The Fibonacci series is: ", answer);