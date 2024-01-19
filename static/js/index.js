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

    // Get the nav links and add the changeView event listener on click
    let navLinks = document.getElementsByClassName('nav-link');
    for (let link of navLinks){
        link.addEventListener('click', changeView)
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

// Create a function to make this a Single Page App (SPA) by swapping the divs
function changeView(e){
    // turn off the element(s) that are visible
    const toTurnOff = document.getElementsByClassName('is-visible');
    for (let element of toTurnOff){
        element.classList.replace('is-visible', 'is-invisible');
        // get the nav link associated
        let navLink = document.getElementsByName(element.id)[0];
        navLink.classList.remove('active');
    }
    // Turn on the element based on the link we clicked
    let idToTurnOn = e.target.name;
    const toTurnOn = document.getElementById(idToTurnOn);
    toTurnOn.classList.replace('is-invisible', 'is-visible');
    e.target.classList.add('active');
}