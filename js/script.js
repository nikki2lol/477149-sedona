var link = document.querySelector(".search");
var popup = document.querySelector(".appointment-form");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("appointment-form-closed");
});
