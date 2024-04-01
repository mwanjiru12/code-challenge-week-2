const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompts the user to input a string.
rl.question('Enter a string: ', function (input) {
    let result = '';
    //uses a "for" loop to iterate through each character in the input string.
    for (let i = 0; i < input.length; i++) {
        //checks if the current character is equal to its lowercase equivalent. 
        //If it is, the function converts the character to uppercase and adds it to "result".
        if (input[i] === input[i].toLowerCase()) {
            result += input[i].toUpperCase();
            //"else" statement converts the character to lowercase and adds it to "result".
        } else {
            result += input[i].toLowerCase();
        }
    }
    console.log(result);
    rl.close();
});

//to exit the Node.js process.
//prints a message to the console thanking the user for using the program.
rl.on('close', function () {
    console.log('\nThanks');
    process.exit(0);
});