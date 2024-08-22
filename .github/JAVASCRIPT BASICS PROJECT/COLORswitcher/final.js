const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click', function(event){
    if(event.target.id === "grey"){
      body.style.backgroundColor = event.target.id
    }

    if(event.target.id === "white"){
      body.style.backgroundColor = event.target.id
    }

    if(event.target.id === "blue"){
      body.style.backgroundColor = event.target.id
    }

    if(event.target.id === "yellow"){
      body.style.backgroundColor = event.target.id
    }


  })
})





// or to describe above code in lesser steps:

// const body = document.querySelector("body")
// const buttons = document.querySelectorAll('.button')

// buttons.forEach(function(button){
//   button.addEventListener('click', function(event){
//     body.style.backgroundColor = event.target.id
//   })
// }) 
