function fetchData(){
    fetch('https://openmensa.org/api/v2/canteens')
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
         const html = data.map(canteen => {
            return `
            <form action="meals.html">
            <input type="submit" value="ANGEBOT" />
            </form>
            <div class="canteen">
            <p>Name: ${canteen.name}</p>
            <p>Stadt: ${canteen.city}</p>
            <p>Adresse: ${canteen.address}</p>
            </div>
            
            `;
           
        }).join("");
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error)
    });
}

fetchData();

