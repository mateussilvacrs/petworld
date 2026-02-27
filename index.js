const menumobile = document.querySelector(".menu-mobile");
const buttonsmobile = document.querySelector(".buttons-mobile");



  menumobile.addEventListener('click', () => {
    buttonsmobile.classList.toggle("active")
  });
