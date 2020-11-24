const ModalOverlay = document.querySelector(".modal-overlay");
const button = document.querySelector(".button");

button.addEventListener("click", function(){
    ModalOverlay.classList.add('active')
})