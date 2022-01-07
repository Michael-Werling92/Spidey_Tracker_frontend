class API{

    static fetchAllSpideys(){

        fetch("http://localhost:3000/spideys").then(response => response.json()).then(fetchedArray => fetchedArray.forEach
            (spidey => {console.log(spidey)
            const newSpidey = new Spidey(spidey)
            newSpidey.renderSpidey(spidey)
        }))
    }
}