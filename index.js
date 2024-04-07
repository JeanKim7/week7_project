let countrySearchForm = document.getElementById('country-search-form')
countrySearchForm.addEventListener('submit', event => displayInfo(event))

function displayInfo(event){
    event.preventDefault();
    console.log("Searching for info about your country!");
    let countryInput = document.getElementById('ccountry-input')
    
}