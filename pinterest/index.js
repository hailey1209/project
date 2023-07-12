const slideUp = document.querySelectorAll('.slideUp')
console.log(slideUp)

const slidePhoto = document.querySelectorAll('.slideUp > .inner-photo')
console.log(slidePhoto)

function changePhoto(){
    slidePhoto.style.background = "blue"
}

setTimeout(changePhoto, 4000)