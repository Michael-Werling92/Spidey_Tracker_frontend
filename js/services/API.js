console.log ("API.JS loaded")

class API {
    static fetchAllSpideys() {

        fetch("http://localhost:3000/spideys")
        .then(response => response.json())
            .then(data => {
                data.sort((a,b) => (b.year > a.year) ? -1 : ((a.year > b.year) ? 1 : 0)).forEach
                    (spideys => {
                        const newSpidey = new Spidey(spideys)
                        newSpidey.renderSpidey()
        })
    })}

    static deleteSpidey(id){
        const deleteditem = document.getElementById(id)
                
                
                fetch(`http://localhost:3000/spideys/${id}`, {
                    
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                    
                })
                .then(response => deleteditem.remove())
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
                newComic.renderComic()
            })})
        }
    
    static addComic(addComicForm, id){
        let updatedName = addComicForm.querySelector(".input-comic-name").value
            console.log(updatedName)
        let updatedYear = addComicForm.querySelector(".input-comic-year").value
            console.log(updatedYear)
                const bodyObj = {
                    "name": updatedName,
                    "year": updatedYear,
                    "spidey_id": id
                }
                fetch(`http://localhost:3000/spideys/${id}/comics`,{
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(bodyObj),
                })
                    .then(response => response.json())
                    .then(theThingWePosted => console.log("Info:", theThingWePosted))
    }
}
