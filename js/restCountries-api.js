const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((data) => displayCountry(data));
}

loadCountries();

const displayCountry = (countries) => {
    console.log(countries);


    const displayDiv = document.getElementById('country');

    countries.forEach((country) => {
        console.log(country);

        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.innerText = `Name : ${country.name}`;
        p.innerText = `Capital : ${country.capital}`;

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('design');
        innerDiv.appendChild(h2);
        innerDiv.appendChild(p);

        displayDiv.appendChild(innerDiv);
    })
}