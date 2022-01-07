console.log("Spidey.JS loaded")

class Spidey{

    static all = []

    constructor({id, }){
            this.id = id
            this.image = year,
            this.alias = alias,
            this.surname = surname,
            this.year = year

            Spidey.all.push(this)
        }   }

    makeACard =()=>{console.log(this)

            return `
                <h2 id="Spidey.id" data-id="${this.id}">${this.alias} ${this.surname} ${this.year}</h2>
                <img src=${this.image} class="car-avatar" />
                <button data-id="${this.id}" class="delete-btn"> DELETE THIS SPIDEY </button>
                `
        }
    
        