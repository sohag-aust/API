const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then((res) => res.json())
        .then((data) => displayData(data));
}

const displayData = (data) => {
    const quoteToBePlaced = document.getElementById('quote');
    quoteToBePlaced.innerText = data.quote;
}