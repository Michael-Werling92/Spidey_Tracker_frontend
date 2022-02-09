console.log("Spidey.JS loaded")

class Spidey{

    static all = []

    constructor({id, image, alias, surname, year, comics}){
        this.id = id
        this.image = image,
        this.alias = alias,
        this.surname = surname,
        this.year = year,
        this.comics = comics
        
        Spidey.all.push(this)
    }

    makeACard =()=>{console.log(this)
        return `
        <img src="${this.image}" class="spidey-avatar"/><br>
        <h2 id="spidey.id" data-id="${this.id}">${this.alias} (${this.surname})</h2>
        <h3>Introduced In: ${this.year}</h3>
        <h3> Comic History: </h3>
        <div class = "comic-list">
        ${this.renderComics()}
        <div>
        <button data-id="${this.id}" class="comic-btn"> VIEW COMIC HISTORY </button>
        <button data-id="${this.id}" class="add-comic-btn"> ADD COMIC </button>
        <button data-id="${this.id}" class="delete-btn"> DELETE SPIDEY </button>
        <br>
        <div class="card" event-id="${this.id}"></div>
        `
    }

    renderSpidey =()=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
            cardDiv.setAttribute("data-id", this.id)
            cardDiv.id = this.id
            cardDiv.innerHTML = this.makeACard()
        const collectionDiv = document.querySelector("#gallery")
        collectionDiv.append(cardDiv)
    }

    renderComics=()=>{
        const comics= this.comics
        return comics.map(comic   => {
            return`
            <li>${comic.name}-${comic.year}</li>
            `
        })
    }
}
