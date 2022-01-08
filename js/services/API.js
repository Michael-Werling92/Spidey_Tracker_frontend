console.log ("API.JS loaded")

class API {
    static fetchAllSpideys() {

        fetch("http://localhost:3000/spideys").then(response => response.json()).then(fetchedArray => fetchedArray.forEach(spidey => {
            console.log(spidey);
            const newSpidey = new Spidey(spidey);
            newSpidey.renderSpidey(spidey);
        }))
    }

    static deleteSpidey(id){
        const deleteditem = document.getElementById(id)
                
                
                fetch(`http://localhost:3000/Spideys/${id}`, {
                    
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                    
                })
                .then(response => response.json())
                .then(deleteditem.remove())
        }
}
