const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompts the user to input an array of numbers into the readline interface.
rl.question('Enter an array of numbers separated by spaces: ', function (input) {
    //uses the "split" method to split the input string into an array of strings
    // uses the "map" method to convert each string to an integer.
    const nums = input.split(' ').map(num => parseInt(num));
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    //uses the filter method to filter the input array 
    //for prime numbers by calling the isPrime function for each element.
    const result = nums.filter(isPrime);
    console.log(result.join(' '));
    rl.close();
});
//to exit the Node.js process.
//prints a message to the console thanking the user for using the program.
rl.on('close', function () {
    console.log('\Thanks for using this program!');
    process.exit(0);
});