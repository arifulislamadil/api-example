const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = (quotes) => {
    const quote = document.getElementById("quote");
    quote.innerHTML = `<h3 class = "quote-style">${quotes.quote}</h3>`;
}

//Random User
const loadRandomUser = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => randomUser(data.results))
}

const randomUser = randomUs => {
    const random = document.getElementById("random-user");
    for (const rando of randomUs) {
        console.log(rando.name.title);
        const h2 = document.createElement("h2");
        h2.innerText = `${rando.email} ${rando.name.first} ${rando.name.last}`;
        random.appendChild(h2);
    }

}
