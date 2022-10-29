const loadBtn = document.querySelector(".js-load")
const searchInput = document.querySelector(".js-input")
const resultsContainer = document.querySelector(".js-results")
const warning = document.querySelector(".warning")

loadBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const searchValue = searchInput.value.trim().toLowerCase()
  if (searchValue === "") {
    warning.style.display = "block"
  }
  if (searchValue !== "") {
    warning.style.display = "none"
    fetch(`https://api.github.com/users/${searchValue}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
          // throw new Error({statusText: response.statusText, status: response.status})
        }
        return response.json()
      })
      .then((data) => {
        resultsContainer.innerHTML = `<div class="response-container">
        <img src="${data.avatar_url}">
        <p> Имя: <span>${data.name}</span><p>
        <p> О себе: <span>${data.bio}</span><p>
        <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
        </div>`
      })
      .catch((error) => {
        resultsContainer.innerHTML = `<div class="response-container">
        <p> Такого пользователя нету <p>
        <p> ${error} <p>
        </div>`
      })
  }
})
