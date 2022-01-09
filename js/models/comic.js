console.log ("Record.JS loaded")

class Comic{
    static all = []
    constructor({id, year, spidey_id}){
        this.id = id,
        this.year = year,
        this.spidey_id = spidey_id,
        Record.all.push(this)
    }
}