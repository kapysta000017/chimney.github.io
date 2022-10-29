import { default as axios } from "axios"

const loadButton = document.querySelector(".js-load-user")
const searchInputUser = document.querySelector(".js-input-user")
const resultsContainer = document.querySelector(".js-results")
const warning = document.querySelector(".warning-user")

loadButton.addEventListener("click", function (e) {
  e.preventDefault()
  const searchValue = searchInputUser.value.trim()
  const reg = new RegExp("^[a-zA-Z ]*$")
  if (searchValue !== "" && reg.test(searchValue)) {
    warning.style.display = "none"
    axios
      .get(`https://jsonplaceholder.typicode.com/users?name=${searchValue}`)
      .then((response) => {
        const { name, username, email } = response.data[0]
        resultsContainer.innerHTML = `<div class="response-container">
        <p> Имя: <span>${name}</span><p>
        <p> Фамилия: <span>${username}</span><p>
        <p> email: <span>${email}</span><p>
        </div>`
      })
      .catch(() => {
        resultsContainer.innerHTML = `<div class="response-container">
        <p> Такого пользователя нету<p>
        </div>`
      })
  } else {
    warning.style.display = "block"
  }
})
