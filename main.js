console.log("hello world");
const content = document.getElementById("content");
content.innerText = "loading";

const result = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(jsonData => content.innerText = JSON.stringify(jsonData,null,2));
