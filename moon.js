const moon = document.querySelector("#moon_container");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("main").addEventListener("mouseover", moonJava);
}
function moonJava() {
  console.log("moonJava");
  moon.classList.add("pop_op");
  moon.removeEventListener("animationend", popopEnd);
}
function popopEnd() {
  console.log("popopEnd");
  moon.classList.remove("pop_op");
}
