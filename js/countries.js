const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>Name:${country.name}</h3>
            <p>language:${country.capital}</p>
            <h4>language quantity:${country.languages.length}</h4>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `

        countriesDiv.appendChild(div);
    });

}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountrieDetail(data[0]))
}

const displayCountrieDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h4>${country.name}</h4>
        <p>population: ${country.population}</p>
        <img width=150px src="${country.flag}">
    `
}