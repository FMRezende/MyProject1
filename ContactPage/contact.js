const SERVER_URL = "http://localhost:3001/contacts";


window.onload = () => {
    console.log("ONLOAD");


function _handleSubmitButton() {

    const inputs = document.querySelectorAll("form input");
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#comment").value;

    const newContact = {
        name,
        email,
        phone,
        message,
    };
    console.log(newContact);

    _saveContactData(newContact);
}

function _saveContactData(contact) {
    fetch(SERVER_URL, {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

function _bindEvents() {
    const submitButton = document.querySelector(".submitButton");

    submitButton.addEventListener("click", _handleSubmitButton);
}

_bindEvents();
}