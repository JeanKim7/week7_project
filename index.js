let countrySearchForm = document.getElementById('country-search-form')
countrySearchForm.addEventListener('submit', event => findCountry(event))

function findCountry(event){
    event.preventDefault();
    console.log("Searching for info about your country!");
    let countryName = document.getElementById('country-input')?.value;
    console.log(`Searching for ${countryName}`)

    const url = `https://restcountries.com/v3.1/name/${countryName}`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then (data => displayCountry(data))
        .catch(err => console.error(err))
}

function displayCountry(data){
    console.log(data)
    document.getElementById('hidden').style.display = "flex"

    document.getElementById('flag-img').src=data[0][]
    console.log(data[0]['name'])
}