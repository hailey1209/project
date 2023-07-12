const root = document.getElementById('root')
const photoContainer = document.createElement('div')
photoContainer.className = 'photo-container'


for(let i=0; i<7; i++){
    const photoBox = document.createElement('div')
    photoBox.className = 'photo-box'
    photoContainer.appendChild(photoBox) 

    for(let p=0; p <2; p++){
        const photo = document.createElement('div')
        photo.className = 'photo'
        photoBox.appendChild(photo)
    }
}


root.appendChild(photoContainer)

const photoBox = document.querySelector('.photo-contaienr')
const photosLength = photos.querySelectorAll('.photo-box')
const heightOgPhotos = 600 //사진 박스의 높이
let index = 0  //사진의 인덱스