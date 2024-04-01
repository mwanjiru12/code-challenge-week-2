const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// prompt the user to enter two numbers.
rl.question('Enter the first number: ', function (firstNum) {
    rl.question('Enter the second number: ', function (secondNum) {
        // convert the two numbers to integers.
        let start = parseInt(firstNum);
        let end = parseInt(secondNum);
        let result = [];
        //checks if the two numbers are valid integers. If not, the function prints an error message and exits the program.
        if (isNaN(start) || isNaN(end)) {
            console.log('Please enter two valid numbers.');
        } else {
            if (start < end) {
                //The function checks if start is less than end. 
                //If it is, the function uses a for loop to generate an array of integers from start to end. 
                //If the start is greater than or equal to end, the function uses a for loop to generate an array of integers 
                //from the end number to the startt number.
                for (let i = start; i <= end; i++) {
                    result.push(i);
                }
            } else {
                for (let i = start; i >= end; i--) {
                    result.push(i);
                }
            }
            console.log(result);
        }
        rl.close();
    });
});

//to exit the Node.js process.
//prints a message to the console thanking the user for using the program.
rl.on('close', function () {
    console.log('\nThanks for using this Program');
    process.exit(0);
});