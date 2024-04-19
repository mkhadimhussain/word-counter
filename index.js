#! /usr/bin/env node
// This line is called a shabang, it tells the OS to run it with node.js
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Import the 'chalk' module.
import chalk from "chalk";
console.log(chalk.bgCyanBright("\n                                    "));
console.log(chalk.bgCyanBright("         " + chalk.bgBlue.bold(" WORDS ") + "  " + chalk.bgBlue.bold(" COUNTER ") + "         "));
console.log(chalk.bgCyanBright("                                    \n"));
console.log(chalk.bgCyanBright("   " + chalk.bgBlue.bold(" We Will Count the Words of your Given Text ") + "   "));
// Declare a variable 'condition' and assign the boolean 'true' for while loop
let condition = true;
// while loop 
while (condition) {
    // Decalre a constant 'answer' and assign it to the result of inquirer.prompt function
    const answer = await inquirer.prompt([
        {
            name: "Scentence",
            message: chalk.bgCyan.bold("\nEnter the text for countig the words: "),
            type: "input"
        }
    ]);
    // Removing the white spaces from the start and end and convert all words in a array
    const words = answer.Scentence.trim().split(" ");
    // .trim(): This is a string method in JavaScript that removes whitespace from both ends of a string. 
    //It ensures that any leading or trailing spaces are removed from the string.
    // .split(" "): This is another string method that splits a string into an array of substrings based 
    // on a specified separator. In this case, the separator is a space (" "), so the string is split into
    // an array of words based on spaces.It will split the string wherever it encounters a space.
    // Print the array of words to the console
    console.log("\n");
    console.log(words);
    // Print the words without showing in the array
    console.log(chalk.bgCyan.bold("\nYour Words: ") + chalk.bgBlue.bold(words));
    // Print the words count of the text to the console
    console.log(chalk.bgCyan.bold("\nTotal Words in your Given Text is:"), chalk.bgBlue.bold(" " + words.length + " "));
    // Asking for more
    const forMore = await inquirer.prompt([
        {
            name: "wantMore",
            message: chalk.bgBlue.bold("\nAre you want to Count more Words?"),
            type: "confirm",
            default: true
        }
    ]);
    // Setting the condition varaible to the input of forMore.wantMore
    condition = forMore.wantMore;
    // condition = y or n 
    // if 'y' then again want the input for text
    // if 'n' then out from the loop and logs "Thanks For Using"
} // While loop end
// Print the Thanks when condition is no
console.log(chalk.bgCyanBright("\n                                 "));
console.log(chalk.bgCyanBright("       " + chalk.bgBlue.bold(" Thanks For Using ") + "        "));
console.log(chalk.bgCyanBright("                                 "));
