var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.onload= function () {
    if(xhr.status >-200 && xhr.status<300){
        console.log('succeess!',xhr);
        // let resultado = JSON.parse(xhr.responseText);
        // resultado.foreach(post => {
        //     console.log(`Nombre: ${usuario.name} Body: ${usuario.email}`);
        // });
        let resultado = JSON.parse(xhr.responseText);
		resultado.forEach(usuario => {
			console.log(`Nombre: ${usuario.name} Body: ${usuario.email}`);
		});
    }
    else{
        console.log('The request failed');
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
console.log('Hola!!!!!')