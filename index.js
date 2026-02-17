const menumobile = document.querySelector(".menu-mobile");
const buttonsmobile = document.querySelector(".buttons-mobile");
console.log(menumobile)


  menumobile.addEventListener('click', () => {
    buttonsmobile.classList.toggle("active")
  });
