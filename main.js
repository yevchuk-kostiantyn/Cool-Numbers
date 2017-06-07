// Checks if the number is cool
function cool(number) {
    var m, digit ;
    var cycle = [] ;
    while(number != 1 && cycle[number] !== true) {
        cycle[number] = true ;
        m = 0 ;
        while (number > 0) {
            digit = number % 10 ;
            m += digit * digit ;
            number = (number  - digit) / 10 ;
        }
        number = m ;
    }
    return (number == 1) ;
}

var sum = 0;
var found = 0; // Found cool numbers

// Calculate the sum of cool numbers
for (number = 1; found < 143071; number++) { // 143071 - amount of cool numbers from 1 to 1000000
		if (cool(number)) {
			found++
			sum += number
		}
	}

console.log("Sum of cool numbers from 1 to 1000000 is", sum);


var result = []; // Array for the result
var request = require('request');

// Sends POST request to the APIs
function Send(url, sum, body) {
  var body = "";
  request.post({
    url: url,
    headers: {
      'X-COOL-SUM': sum,
    },
    method: 'POST',
  },

// Attention! The following function contains some "crutches" due to asynchronous JS requests :)
  function body(e, r, body) {

    if (body != "Not Found") {
        var port = parseInt(url.slice(28)); // Get the port belonging to the body
        result[port] = body; // Push the body to array where an index is the port
        var result2 = []; // Create an empty array for deleting empty elements

        // Get rid of "empty" elements from array
        for (var i = 0; i < result.length; i++){
          if (i in result) {
            result2.push(result[i]);
          }
        }
        console.log(result2.join("")); // "Clean" output
      }
    }
);

}
counter = 0; // Change the end number of APIs
// Make multiple requests
while (counter < 101) {
  url = 'http://dev.getethos.com/code' + counter;
  Send(url, sum);
  counter++;
}
