//animation halt
window.onload = loaded();
function loaded() {
  var element = document.getElementById("body");
  element.classList.remove("unload");
}

//HEADER colorchange
window.addEventListener("scroll", function (event) {
  if (window.innerHeight < window.scrollY) {
    document.getElementById('header').classList.remove('transparent');
  } else {
    document.getElementById('header').classList.add('transparent');
  }
});