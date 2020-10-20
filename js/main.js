// Get the modal
var modal = document.getElementById("pntModal");

// Get the button that opens the modal
var btn = document.getElementById("_btnOpenModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_pnt_close")[0];

//open the modal
function showModalMaintenancePnt(){
    modal.style.display = "block";
}
showModalMaintenancePnt();


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  console.log("close");

}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


//BUTTON SHOW SIDEBAR
document.querySelector(".menu-btn").addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle("show");
})

// scrollreveal animatio elements

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });