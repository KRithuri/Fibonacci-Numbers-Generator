

function generateFibonacci(num) {
    
    
    var x = 0; // first term,
    var y = 1; // second term
    var z; // the sum of x and y.
    var i = 0;
    const fibonacci = []; //list to store fibonacci sequence

    //storing first two elements
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

var num = prompt("Enter number of terms");
answer = generateFibonacci(num);
  
console.log("The Fibonacci series is: ", answer);
