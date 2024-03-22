#! /usr/bin/env node

import inquirer from "inquirer";

const gnumber = Math.floor(Math.random() * 6 + 1) ;

const answers = await inquirer.prompt([
    { name: "userGuess", type: "number", message: "Guess Your Number Between 1-6 Now:" }
]);

if (answers.userGuess === gnumber ) {
    console.log ("Congratulation! You Guess Right Number")
}else{
    console.log(`"Nop That Is Not A Right Guess!  Number Is :" ${gnumber}`);
}