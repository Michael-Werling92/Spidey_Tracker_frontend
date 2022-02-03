document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) })

document.addEventListener("DOMContentLoaded", function(){ console.log("DOM IS LISTENING") })

API.fetchAllSpideys()

const newSpideyForm = document.querySelector(".add-spidey-form")
  console.log(newSpideyForm)
    newSpideyForm.addEventListener("submit", event =>{ event.preventDefault(); 
      const image = event.target.image.value
      const alias = event.target.alias.value
      const surname = event.target.surname.value
      const year = event.target.year.value
          
        const submit = event.target.submit
        console.log("Spidey Submitted", submit)
            
          fetch("http://localhost:3000/spideys", {
        
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
    
              "image": image,
              "alias": alias,
              "surname": surname,
              "year": year,
            },)
          })
            .then(response => response.json())
            .then(spideys => {
              const newSpidey = new Spidey(spideys)
              newSpidey.renderSpidey()
            })
      })

const collectionDiv = document.querySelector("#gallery")
const form = document.getElementById('form');
const term= () => document.getElementById('search');

  form.addEventListener('submit', (event)=> {
    event.preventDefault();
    search(event)
  })
  
  const search = async () => {
    const response = await fetch("http://localhost:3000/spideys?q=" + term().value)
    console.log(response)
    collectionDiv.innerHTML= " "
    filteredArray = await response.json()
    filteredArray.forEach(spidey => {
      console.log(spidey);
      const newSpidey = new Spidey(spidey);
      newSpidey.renderSpidey();
    })
  }

  collectionDiv.addEventListener("click", event =>{ event.preventDefault();
    if(event.target.matches(".delete-btn")){
      const id= event.target.dataset.id
      console.log(id)
      API.deleteSpidey(id)
    }
    if(event.target.matches(".comic-btn")){
      const id = event.target.dataset.id
      document.querySelector(`.card[event-id="${id}"]`).innerHTML = " ";
      API.fetchMyComics(id)
    }
    if(event.target.matches(".add-comic-btn")){
      const id = event.target.dataset.id
      document.querySelector(`.card[event-id="${id}"]`).innerHTML = " ";
      const cardEditing = document.querySelector(`.card[event-id="${id}"]`)
      console.log(cardEditing)
      const addComicForm = document.createElement("form")
      addComicForm.innerHTML =`
        <form>

        <br>
        <button class="close-button">✖️CLOSE</button>
        <br>

        <br><br>
        <h2>Add New Comic:</h2>
        <form class="add-comic-form">

        <br />
        <h4>New Comic:</h4>
        <input
        type="text"
        name="comic"
        value=""
        placeholder=""
        class="input-comic-name"
        />

        <br />
        <h4>Year of Appearance:</h4>
        <input
        type="text"
        name="year"
        value=""
        placeholder=""
        class="input-comic-year"
        />

        <br />
        <input 
        type="submit"
        name="submit"
        value="Add New Comic"
        class="submit-button"
        />
        </form>
        `
        cardEditing.append(addComicForm)
        addComicForm.addEventListener("click", (event)=>{  event.preventDefault();
          if(event.target.matches(".submit-button")){
            API.addComic(addComicForm, id)
          }
          const closeButton = addComicForm.querySelector(".close-button")
            closeButton.addEventListener("click", (event)=>{
              addComicForm.remove()
            })
          })
  }
})