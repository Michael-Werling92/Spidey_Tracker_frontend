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
                
                
                fetch(`http://localhost:3000/spideys/${id}`, {
                    
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                    
                })
                .then(response => response.json())
                .then(deleteditem.remove())
        }
    
        static fetchMyComics(id){

            fetch(`http://localhost:3000/spideys/${id}/comics`).then(response => response.json())
            .then(fetchedArray => { console.log(fetchedArray);
                const collectionDiv = document.querySelector("#file-cabinet")
                    collectionDiv.innerHTML = ""
              fetchedArray.forEach(record => {  console.log(record);
                const newRecord = new Record(record)
                newRecord.renderRecord(record)
                window.scrollTo(0,0)
            })})
        }
}
