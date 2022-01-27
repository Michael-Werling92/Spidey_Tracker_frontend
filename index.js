document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) } )

document.addEventListener("DOMContentLoaded", function(){ console.log("DOM IS LISTENING") })

API.fetchAllSpideys()

const collectionDiv = document.querySelector("#gallery")
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
  })

  const newSpideyForm = document.querySelector(".add-spidey-form")
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
              }
              ,)})
              .then(response => response.json())
              .then(thingsPosted => console.log("Info:", thingsPosted))
              event.target.reset()
              location.reload()
  })

  const form = document.getElementById('form');
  const term = document.getElementById('search');
  const cardDiv = document.querySelector("#gallery");

  form.addEventListener('submit', (event)=> {
    event.preventDefault();
    search(event)
  })
  
  const search = async (event) => {
    const response = await fetch("http://localhost:3000/spideys?q=" + term.value)
    console.log(response)
    cardDiv.innerHTML= " "
    filteredArray = await response.json()
    filteredArray.forEach(spidey => {
      console.log(spidey);
      const newSpidey = new Spidey(spidey);
      newSpidey.renderSpidey(spidey);
  })}