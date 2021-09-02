fetch('http://127.0.0.1:3000/notes')
  .then(response => response.json())
  .then(data => console.log(data));


  function CreateNote(){
fetch('http://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(json => console.log(json))

fetch('http://jsonplaceholder.typicode.com/users',{
    method :'Post',
    body: JSON.stringify({
        completed: false
    }),
    headers: {
        "Content-type":"application/json"
    },

})
.then(response=>response.json())
.then(json => console.log(json))
}