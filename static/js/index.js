console.log('Hey this is the index.js');

// Call the pageLoader function to load page
pageLoader();

// Function to set all of the events
function pageLoader(){
    console.log('Setting up our page...')

    // Get the color buttons
    let colorButtons = document.getElementsByClassName('light-dark-button')
    // Loop through the colorButtons and add a click event listener to trigger the changeBackgroundColor
    for (let btn of colorButtons){
        btn.addEventListener('click', changeBackgroundColor)
    }
}


// Create a function that will change the background color
function changeBackgroundColor(e){
    console.log('Clicked Color Button');
    console.log(e.target.value);
    if (e.target.value === 'Dark'){
        document.body.style.backgroundColor = '#C96E12'
    } else {
        document.body.style.backgroundColor = '#FFF897'
    }
}