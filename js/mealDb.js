const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;

    //Clear Data
    searchField.value = "";

    //Load Data
    if (searchText == "") {
        console.log("please write something");
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))

    }

}

const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    if (meals.length == 0) {
        console.log("no result found");
    }
    meals.forEach(meal => {
        console.log(meal);
        const searchDiv = document.createElement("div");
        searchDiv.classList.add('col')
        searchDiv.innerHTML = `
        <div onclick="mealDbDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`;
        searchResult.appendChild(searchDiv)
    });
}

const mealDbDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => desplayMealDetails(data.meals[0]))
}

const desplayMealDetails = (meal) => {
    console.log(meal);
    const mealDetailsContainer = document.getElementById("meal-details");
    mealDetailsContainer.textContent = '';
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col")
    mealDiv.innerHTML = `
    <div class="card">
        <img style="width: 200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <button><a href='${meal.strYoutube}' alt='Broken Link'>go somewhere</a></button>
        </div>
   </div>
    `;
    mealDetailsContainer.appendChild(mealDiv);
}