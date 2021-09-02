const searchFood = () => {
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data
    searchField.value = '';

    if(searchText === '') {
        const searchResult2 = document.getElementById('search-result');
        searchResult2.textContent = '';

        searchResult2.innerHTML = `
            <h3 style="margin:auto;"> Please Enter Valid Food </h3>
        `;
    }else {
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then((res)=>res.json())
            .then((data) => displaySearchResult(data.meals));
    }
    
}

const displaySearchResult = (meals) => {

    const searchResult = document.getElementById('search-result');

    // clear previous data
    searchResult.textContent = '';
    
    if(meals == null) {
        searchResult.innerHTML = `
            <h3 style="margin:auto;"> No Result Found </h3>
        `;
    }
    else {
        meals.forEach((meal) => {
            console.log(meal);
    
            const row = document.createElement('div');
            row.classList.add('row');
    
            const col = document.createElement('div');
            col.classList.add('col-lg-4');
    
            row.appendChild(col);
    
            col.innerHTML = `
                
                <div onclick="loadMealDetailsById('${meal.idMeal}')" class="card h-100 m-4">
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
        });
    }
}

const loadMealDetailsById = (mealId) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMealDetails(data.meals[0]));
}

const displayMealDetails = (mealDetails) => {
    console.log(mealDetails);

    const mealDetailsDiv = document.getElementById('meal-details');
    mealDetailsDiv.textContent = '';

    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    
    detailDiv.innerHTML = `
        <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${mealDetails.strMeal}</h5>
            <p class="card-text">${mealDetails.strInstructions.slice(0,200)}</p>
        </div>
    `;

    mealDetailsDiv.appendChild(detailDiv);
}