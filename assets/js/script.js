const Modal = {
  open(){
document.querySelector('.modal-overlay')
               .classList.add('active')
  },
  close(){
    document.querySelector('.modal-overlay')
    .classList.remove('active')
  }
}


// Segundo modal

const Modals = {
  open(){
document.querySelector('.modal-overlays')
               .classList.add('active')
  },
  close(){
    document.querySelector('.modal-overlays')
    .classList.remove('active')
  }
}