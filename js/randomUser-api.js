const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => displayUsers(data));
}

loadRandomUsers();

const displayUsers = (data) => {
    console.log(data);

    const users = data.results;
    const displayBox = document.getElementById('user');

    for(let user of users) {
        console.log(user);

        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2'); 
        const p = document.createElement('p');

        h1.innerText = `Name : ${user.name.title}. ${user.name.first} ${user.name.last}`;
        h2.innerText = `Email : ${user.email}`;
        p.innerText = `Gender : ${user.gender}`;

        displayBox.appendChild(h1);
        displayBox.appendChild(h2);
        displayBox.appendChild(p);
    }
}