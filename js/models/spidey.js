console.log("Spidey.JS loaded")

class Spidey{

    static all = []

    constructor({id, image, alias, surname, year }){
            this.id = id
            this.image = image,
            this.alias = alias,
            this.surname = surname,
            this.year = year

            Spidey.all.push(this)
        }

    makeACard =()=>{console.log(this)
        return `
        <img src="${this.image}" class="spidey-avatar"/><br>
        <h2 id="spidey.id" data-id="${this.id}">${this.alias} (${this.surname})</h2>
        <h3>Introduced In: ${this.year}</h3>
        <button data-id="${this.id}" class="comic-btn"> VIEW COMIC HISTORY </button>
        <button data-id="${this.id}" class="add-comic-btn"> ADD NEW COMIC </button>
        <button data-id="${this.id}" class="delete-btn"> DELETE THIS SPIDEY </button>
        <div class="card" event-id="${this.id}"></div>
        `
        }
    
    renderSpidey =(spidey)=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
            cardDiv.setAttribute("data-id", spidey.id)
            cardDiv.id = spidey.id
            cardDiv.innerHTML = this.makeACard()
        const collectionDiv = document.querySelector("#gallery")
        collectionDiv.append(cardDiv)
        }
    }
