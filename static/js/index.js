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

    // Grab the Find Brews Form and a submit event
    let findBrewsForm = document.getElementById('find-brews-form')
    findBrewsForm.addEventListener('submit', findBreweries)

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

// Function to get Brewery Data
function findBreweries(e){
    e.preventDefault(); // will prevent the page from refreshing with form data as query params
    // Get the value from the city input
    let cityName = e.target.city.value
    console.log(`Looking for breweries in ${cityName}...`)

    // Create the URL for getting brewery data from the city
    const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&per_page=10`
    console.log(url);

    // Make the HTTP request to the API with the city name and log the data
    fetch(url)
        .then( res => res.json() )
        .then( data => displayBreweries(data) )
        .catch( err => console.error(err) )
}


// Callback function for findBreweries that will insert breweries into the table
function displayBreweries(data){
    // Get the table from the HTML
    let table = document.getElementById('brewery-table');

    // Clear out the table of any current data
    table.innerHTML = '';

    if (!data.length){
        table.innerHTML = '<h1>No Breweries Here</h1>'
        return
    }

    // Set up the table headers
    const thead = document.createElement('thead');
    table.append(thead); // Add the thead as a child to the table
    let tr = document.createElement('tr');
    thead.append(tr) // add the table row as a child to the thead
    const tableHeadings = ['Name', 'Type', 'Street Address', 'Address 2', 'Address 3', 'City', 'State'];
    tableHeadings.forEach( heading => {
        let th = document.createElement('th');
        th.scope = 'col';
        th.innerHTML = heading
        tr.append(th)
    })

    // Create table body and use API data to fill
    let tbody = document.createElement('tbody');
    table.append(tbody);
    // Write a row for each brewery in data
    for (let brewery of data){
        let tr = document.createElement('tr');
        tbody.append(tr);

        newDataCell(tr, `<a href=${brewery.website_url} target="_blank">${brewery.name}</a>`);
        newDataCell(tr, brewery.brewery_type);
        newDataCell(tr, brewery.street);
        newDataCell(tr, brewery.address_2);
        newDataCell(tr, brewery.address_3);
        newDataCell(tr, brewery.city);
        newDataCell(tr, brewery.state);
    }
}

// Helper Function for creating a new data cell for the row
function newDataCell(tr, value){
    let td = document.createElement('td');
    td.innerHTML = value ?? '-';
    tr.append(td);
}