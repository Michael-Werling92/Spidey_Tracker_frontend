console.log ("API.JS loaded")

class API {
    static fetchAllSpideys() {

        fetch("http://localhost:3000/spideys")
        .then(response => response.json())
            .then(data => {
                data.sort((a,b) => (b.year > a.year) ? -1 : ((a.year > b.year) ? 1 : 0)).forEach
                    (spideys => {
                        const newSpidey = new Spidey(spideys)
                        newSpidey.renderSpidey(spideys)
        })
    })}

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

        fetch(`http://localhost:3000/spideys/${id}/comics`)
        .then(response => response.json())
        .then(data => {
            data.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0));
                const collectionDiv = document.querySelector(`.card[event-id="${id}"]`)
                collectionDiv.innerHTML = ""
            data.forEach(comic => {  console.log(comic);
                const newComic = new Comic(comic)
                newComic.renderComic(comic)
            })})
        }
}
