let content = document.getElementById("content");
fetch('http://localhost:3000/notes/')
.then(response=>response.json())
.then(function(data) {
   populate(data);
});

function populate(data){
    data.forEach(obj => {
        let table = `
            <div>${obj.title}</div>
            <div>${obj.content}</div>
        `;

        let title = document.getElementById("content").innerHTML= table;
    });
}

function CreateNote(){

    let title = document.getElementById("notetitle").value;
    let content = document.getElementById("noteContent").value;

    fetch('http://localhost:3000/notes/',{
    method :'POST',
    body: JSON.stringify({
        title: title,
        content: content
    }),
    headers: {
        "Content-type":"application/json"
    },

    })
    .then(response=>response.json())
    .then(json => console.log(json))
}
