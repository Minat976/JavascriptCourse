var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("userName").value = JSON.parse(xhttp.responseText.user);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();