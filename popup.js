//this just makes a loop that makes sure the the user enters something into the popup
let attempts = 0; //This creates a variable that stores how many times it takes the person to fill out the prompt
let variable = ''; //this is what you want the prompt input field should return
parseInt(attempts); //this makes sure that the variable is a number
//this is where the magic happens
while (variable === "" || variable == null) {
    variable = prompt("enter your prompt here");

    attempts = ++attempts;
}

