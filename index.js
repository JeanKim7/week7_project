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
    document.getElementById('hidden').style.display = "flex"
    document.getElementById('country-flag').src=data[0]['flags']['png']
    document.getElementById('country-name').innerHTML = `country: ${data[0]['name']['official']}`
    document.getElementById('country-capital').innerHTML = `capital: ${data[0]['capital']}`

    console.log(Object.values(data[0]['languages']).slice(1))
    let lan = `${Object.values((data)[0]['languages'])[0]}`
    if ((Object.values((data)[0]['languages'])).length>1){
        for (let language of Object.values(data[0]['languages']).slice(1)) {
            lan += `, ${language}`
    }
    }

    console.log(Object.values(data[0]['currencies']).slice(1))
    let cur = `${Object.values((data)[0]['currencies'])[0]['name']}`
    if ((Object.values((data)[0]['currencies'])).length>1){
        for (let currency of Object.values(data[0]['currencies']).slice(1)) {
            cur += `, ${currency['name']}`
    }
    }


    document.getElementById('country-languages').innerHTML = `languages: ${lan}`
    document.getElementById('country-currencies').innerHTML = `currencies: ${cur}`
}