const searchFood = () => {
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then((res)=>res.json())
        .then((data) => displaySearchResult(data.meals));
}

const displaySearchResult = (meals) => {

    const searchResult = document.getElementById('search-result');

    meals.forEach((meal) => {
        console.log(meal);

        const row = document.createElement('div');
        row.classList.add('row');

        const col = document.createElement('div');
        col.classList.add('col-lg-4');

        row.appendChild(col);

        col.innerHTML = `
            
            <div class="card h-100 m-4">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="image is missing">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)} </p>
                </div>
            
                <div class="card-footer mb-4">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            
        `;

        searchResult.appendChild(col);
    })
}