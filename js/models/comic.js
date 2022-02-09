console.log ("Comic.JS loaded")

class Comic{
    static all = []
    constructor({id, name, year, spidey_id}){
        this.id = id,
        this.name = name,
        this.year = year,
        this.spidey_id = spidey_id,
        Comic.all.push(this)
    }

    makeACard =()=>{console.log(this)

        return `

            <h3>Comic Series: ${this.name} </h3>
            <h4>Year Active: ${this.year} </h4>
            `
    }

    renderComic=()=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
            cardDiv.setAttribute("data-id", this.id)
            cardDiv.id = this.id
            cardDiv.innerHTML = this.makeACard()
        const collectionCardDiv = document.querySelector(`.card[event-id="${this.spidey_id}"]`)
        collectionCardDiv.append(cardDiv)
    }    
}