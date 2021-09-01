const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((data) => displayCountry(data));
}

loadCountries();

const displayCountry = (countries) => {
    
    const displayDiv = document.getElementById('country');

    countries.forEach((country) => {

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('design');
        innerDiv.innerHTML = `
            <h2> Name : ${country.name} </h2>
            <p> Capital : ${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')"> Show Details </button>
        `;

        displayDiv.appendChild(innerDiv);
    })
}

const loadCountryByName = (countryName) => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCountryDetails(data[0]));
}

const displayCountryDetails = (countryDetails) => {
    console.log(countryDetails);

    const countryDetailsDiv = document.getElementById('country-detail');

    countryDetailsDiv.innerHTML = `
        <h3>Name : ${countryDetails.name}</h3>
        <h5>Population : ${countryDetails.population}</h5>
        <img style="width:200px;" src="${countryDetails.flag}">
    `;
}