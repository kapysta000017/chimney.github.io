function logSubmit(event) {
  event.preventDefault();
  if (event.target.name.value !== '' && event.target.surname.value !== '') {
    alert(
      'Ваше имя  ' +
        event.target.name.value +
        '  Ваша фамилия  ' +
        event.target.surname.value
    );
  }
}
const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);
