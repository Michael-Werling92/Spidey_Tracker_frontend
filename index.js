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
            console.log("Spidey Suibmitted", submit)
            
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