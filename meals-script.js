function fetchData(){
        fetch('https://openmensa.org/api/v2/canteens/31/days/2020-09-25/meals')
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
             const html = data.map(meal => {
                return `
                <div class="canteen">
                <p>Name: ${meal.name}</p>
                <p>Hinweis: ${meal.notes}</p>
                <p>Preis-Student: ${meal.prices.students}€</p>
                <p>Preis-Mitarbeiter: ${meal.prices.employees}€</p>
                <p>Preis-Andere: ${meal.prices.others}€</p>
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
    
    