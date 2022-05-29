function DarkTheme() {
    document.body.classList.toggle("dark");
}

var form = document.getElementById("form")

form.addEventListener('submit', function(event) {
    event.preventDefault()

    var name = document.getElementById('name').value

    var surname = document.getElementById('surname').value
    var email = document.getElementById('email').value
    var text_input = document.getElementById('text-input').value
    console.log('Sent Succesfully!')
})
