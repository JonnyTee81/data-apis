async function getData(){
    let response = await fetch('https://api.github.com/users');

    let data = await response.json();

    return data;
}

getData()
    .then(data => console.log(data));