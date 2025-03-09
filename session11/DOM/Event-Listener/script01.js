// here having one attribute working  on many function 
// Example 01

// Change Mode with different button

// Function to change the background color of the webpage
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color; // Set the background color of the body
}

// Function to change the text color of the webpage
function changeTextColor(color) {
    document.body.style.color = color; // Set the text color of the body
}

// Get the "Dark Mode" button element
const darkMode = document.getElementById('dark-mode');

// Add an event listener to the "Dark Mode" button to execute a function when clicked
darkMode.addEventListener('click', function() {
    console.log('I got clicked for dark mode'); // Log a message in the console
    changeBackgroundColor('black'); // Change the background color to black
    changeTextColor('white'); // Change the text color to white
});

// Get the "White Mode" button element
const whiteMode = document.getElementById('white-mode');

// Add an event listener to the "White Mode" button to execute a function when clicked
whiteMode.addEventListener('click', function() {
    console.log('I got clicked for white mode'); // Log a message in the console
    changeBackgroundColor('white'); // Change the background color to white
    changeTextColor('black'); // Change the text color to black
});





//Example 02


// incriment and decriment with show value


// Get the button element for increasing the counter
const increse = document.getElementById('plus');

// Get the button element for decreasing the counter
const decrise = document.getElementById('minus');

// Get the span element where the counter value will be displayed
const result = document.getElementById('show');

// Initialize a variable 'a' to store the counter value, starting from 0
let a = 0;

// Add an event listener to the "plus" button that increases the counter when clicked
increse.addEventListener('click', function() {
    a++; // Increment the counter value by 1
    result.innerText = a; // Update the displayed counter value
    console.log(a); // Log the updated value to the console
});

// Add an event listener to the "minus" button that decreases the counter when clicked
decrise.addEventListener('click', function() {
    a--; // Decrement the counter value by 1
    result.innerText = a; // Update the displayed counter value
    console.log(a); // Log the updated value to the console
});





      //Example 03


      // Basic to do list
         // Get the input field where users enter their to-do items
const item = document.getElementById('addText');

// Get the button that adds new items to the list
const btn = document.getElementById('btn');

// Get the unordered list where to-do items will be displayed
const saveItem = document.getElementById('saveText');

// Add an event listener to the "Add" button to execute a function when clicked
btn.addEventListener('click', function() {
    
    // Create a new list item (li) element
    var paragraph = document.createElement('li');
    
    // Set the text of the list item to the value entered in the input field
    paragraph.innerText = item.value;

    // Append the newly created list item to the unordered list
    saveItem.appendChild(paragraph);

    // Clear the input field after adding the item to the list
    item.value = "";

    // Log the added text in the console
    console.log(paragraph.innerText);

    // Create a delete button for the newly added list item
    const delBtn = document.createElement('button');

    // Set the text of the delete button to "X"
    delBtn.innerText = 'X';

    // Append the delete button to the newly created list item
    paragraph.appendChild(delBtn);

    // Add an event listener to the delete button to remove the list item when clicked
    delBtn.addEventListener('click', function() {
        paragraph.remove(); // Remove the list item from the unordered list
    });

});




            //Example 04


             // Change Mode with one button

         // Get the theme change button element
const themeBtn = document.getElementById('themeChange');

// Function to change the background color of the webpage
function modeChange(color) {
    document.body.style.backgroundColor = color; // Set the background color of the body
}

// Function to change the text color of the webpage
function changeTextColor(color) {
    document.body.style.color = color; // Set the text color of the body
}

// Add an event listener to the theme button to toggle between dark and light modes
themeBtn.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor); // Log the current background color in the console

    // Get the current background color of the body
    const currentColor = document.body.style.backgroundColor;

    // Check if the current color is empty (default) or white, then switch to dark mode
    if (!currentColor || currentColor === 'white') {
        modeChange('black'); // Change the background color to black
        themeBtn.innerText = 'light mode'; // Update button text to "light mode"
        changeTextColor('white'); // Change the text color to white
    } else {
        modeChange('white'); // Change the background color to white
        themeBtn.innerText = 'dark mode'; // Update button text to "dark mode"
        changeTextColor('black'); // Change the text color to black
    }
});


            // Example 05


       // Get the elements where likes, dislikes, and total count will be displayed
let displayLikes = document.querySelector('#likes-display'); // Element to show likes count
let displayDisLikes = document.querySelector('#dislikes-display'); // Element to show dislikes count
let displayTotal = document.querySelector('#total-display'); // Element to show total count

// Get the like and dislike buttons
let likesBtn = document.querySelector('#likes-btn'); // Like button element
let dislikesBtn = document.querySelector('#dislikes-btn'); // Dislike button element

// Initialize counters for likes, dislikes, and total interactions
let likes = 0;
let disLikes = 0;
let total = 0;

// Set the initial values in the display
displayLikes.innerText = likes; // Display initial like count
displayDisLikes.innerText = disLikes; // Display initial dislike count
displayTotal.innerText = total; // Display initial total count

// Add event listeners to buttons to call respective functions on click
likesBtn.addEventListener('click', likesDisplay); // Trigger likesDisplay function when the like button is clicked
dislikesBtn.addEventListener('click', dislikesDisplay); // Trigger dislikesDisplay function when the dislike button is clicked

// Function to update the like count and total interactions
function likesDisplay() {
    likes++; // Increment likes count
    total++; // Increment total count
    displayLikes.innerText = likes; // Update likes count on UI
    displayTotal.innerText = total; // Update total count on UI
}

// Function to update the dislike count and total interactions
function dislikesDisplay() {
    disLikes++; // Increment dislikes count
    total++; // Increment total count
    displayDisLikes.innerText = disLikes; // Update dislikes count on UI
    displayTotal.innerText = total; // Update total count on UI
}

             



    


