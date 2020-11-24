const cursos = document.querySelectorAll('.curso')
const modalOverlay = document.querySelector('.modal-overlay')


for (let curso of cursos){
    curso.addEventListener("click", function(){
        const webPage = curso.getAttribute('id')

        modalOverlay.classList.add("active")
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${webPage}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})