function fizzBuzz(number) {
    if (number % 15 === 0) {
        return 'fizzbuzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

$(document).ready(function() {
        
        var start = 1;

        var end = prompt("Please enter the number up to which the fizzbuzz sequence needs to generated", 100);
        if (!end) {
            alert('Please enter a number!');
        } else if (isNaN(end)) {
            alert('Please enter a valid number!');
        } else if(end % 1 != 0){
        	alert('Please enter a whole number!');
        } else{

            for (var i = start; i <= end; i++) {

                $('body').append('<p class="number">'+ i + ': ' + fizzBuzz(i) + '</p>');

            }
        }

    })
    /*
    Ask the user to input a number - use prompt() - DONE
    Make the output more readible 
    Use brackets.io for jslint - can try
    */
