const countriesList = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countriesList();

const displayCountries = countries => {
    const countryDiv = document.getElementById("countries-info");
    countries.forEach(country => {
        const createDiv = document.createElement("div");
        createDiv.classList.add("count")
        createDiv.innerHTML = `
        <h2>Country:  ${country.name.common}</h2> 
        <h4>Capital: ${country.capital}</h4> 
        <h5> Population: ${country.population}</h5> 
        <button onClick = "loadCountryDetails('${country.name.common}')">Detail</button>`;
        countryDiv.appendChild(createDiv)
    })
}

const loadCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => desplayCountryInfo(data))
}

const desplayCountryInfo = countryInfo => {
    console.log(countryInfo[0]);
    const countryDiv = document.getElementById("country-detail");
    countryDiv.innerHTML = `
    <h2>${countryInfo[0].altSpellings[1]}</h2>
    <img style="text-align: center; width: 100px; margin: auto;" src="${countryInfo[0].flags.png}"/>
    <p>Area: ${countryInfo[0].area}</p>
    `
}
