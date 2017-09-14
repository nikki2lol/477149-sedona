var link = document.querySelector(".search");
var popup = document.querySecector(".appointment-form");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toogle("appointment-form-closed");
});
