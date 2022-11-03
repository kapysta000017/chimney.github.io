const input = document.querySelector(".text")
const button = document.querySelector(".button")
const body = document.querySelector(".container")
let count = 0

input.onchange = (e) => {
  localStorage.setItem("text", e.target.value)
}
window.onload = () => {
  input.value = localStorage.getItem("text")
  body.style.background = localStorage.getItem("background")
}
input.oninput = function () {
  let value = this.value
  localStorage.setItem("text", value)
}
button.onclick = () => {
  if (++count % 2 == 1) {
    body.style.background = "black"
    localStorage.setItem("background", body.style.background)
  } else {
    body.style.background = "white"
    localStorage.setItem("background", body.style.background)
  }
}
