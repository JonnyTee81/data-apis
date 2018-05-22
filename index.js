let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://api.github.com/users', true)

xhr.onload = function(){
    if(this.status === 200){
        console.log(JSON.parse(this.responseText));
    }
}

xhr.send();