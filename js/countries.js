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
        createDiv.innerHTML = `<h2>Country:  ${country.name.common}</h2> <h4>Capital: ${country.capital}</h4> <h5> Population: ${country.population}</h5>`;
        countryDiv.appendChild(createDiv)
    })
}