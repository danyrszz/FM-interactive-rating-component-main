let wrapper = document.querySelector(".wrapper");
let ratingState = document.querySelector("#rating");
let tyState = document.querySelector("#ty-state");

let submit = document.querySelector(".submit");
let rateContainer = document.querySelector(".rate-container");
let rateButton = document.querySelectorAll(".btn");
let rateMessage = document.querySelector(".rate");
let state;

rateContainer.addEventListener("click", getRating);
submit.addEventListener("click",submitForm);

function getRating(e){
    if(e.target.nodeName==="BUTTON"){
        submit.disabled = false;
        rateButton.forEach(button=>{
            button.classList.remove("selected");
        })
        console.log(e.target)
        e.target.classList.add("selected");
        state = e.target.innerText;
    }
}

function submitForm(e){
    ratingState.classList.add("hidden");
    rateMessage.textContent = `You selected ${state} out of 5`;
    tyState.classList.remove("hidden");
}

ratingState.classList.remove("hidden");
wrapper.append(ratingState);