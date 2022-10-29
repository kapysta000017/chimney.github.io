const warningContainer = document.querySelector(".warning-container")
const button = document.querySelector(".btn")
const input = document.querySelector(".input")

button.addEventListener("click", function () {
  const value = Number(input.value)
  warningContainer.innerHTML = ""
  try {
    if (value < 5) throw new Error("number under 5")
    if (value > 10) throw new Error("number more 10")
  } catch (err) {
    warningContainer.innerHTML = `<p> ${err} </p>`
  }
})
