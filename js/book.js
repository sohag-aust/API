const searchBook = () => {
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data
    searchField.value = '';

    if(searchText === '') {
        const bookNotFound = document.getElementById('total');
        bookNotFound.textContent = '';

        const searchResult2 = document.getElementById('search-result');
        searchResult2.textContent = '';

        searchResult2.innerHTML = `
            <h3 style="margin:auto;" class="text-danger"> Please Enter Valid Book Name </h3>
        `;
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchResult(data.docs, searchText));
    }
}

const displaySearchResult = (books, type) => {

    const searchResult = document.getElementById('search-result');

    // clear previous data
    searchResult.textContent = '';
    
    if(books === null || books.length === 0) {
        const bookNotFound = document.getElementById('total');
        bookNotFound.textContent = '';

        searchResult.innerHTML = `
            <h3 style="margin:auto;" class="text-danger"> No Result Found </h3>
        `;
    }
    else {
        const totalBooks = document.getElementById('total');
        totalBooks.innerHTML = `
            <h2 class="text-primary title-style text-center"><strong> Total Books of Type (${type.toUpperCase()}) : ${books.length}</strong></h2>
        `

        //searchResult.appendChild(totalBooks);

        books.forEach((book) => {
            console.log(book);
    
            const row = document.createElement('div');
            row.classList.add('row');
    
            const col = document.createElement('div');
            col.classList.add('col-lg-4');
    
            row.appendChild(col);

            const image = book.cover_i !== undefined ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `images/missing-book.jpg`;
            
            col.innerHTML = `
                
                <div class="card  m-4 card-style gy-4">
                    <img src="${image}" class="card-img-top" alt="image is missing">
                    <div class="card-body">
                        <h4 class="card-title my-3"><strong class="text-success title-style">Book Name</strong> : <span style="font-size:22px;">${book.title}</span></h4>
                        <h5 class="card-title my-3"><strong class="text-success title-style">Author Name</strong> : ${(book.author_name === null || book.author_name === undefined) ? '<span class="text-danger title-style">Book Author has no information</span>' : book.author_name[0]} </h5>
                        <h6 class="card-title my-3"><strong class="text-success title-style">Published At</strong> : ${(book.publish_date === null || book.publish_date === undefined) ? '<span class="text-danger title-style">Publication Date missing</span>' : book.publish_date.length > 1 ? book.publish_date[1] : book.publish_date[0]} </h6>
                    </div>
                </div>
            `;
    
            searchResult.appendChild(col);
        });
    }
}