window.onload = () => {
  console.log("ONLOAD");

  function _handleSubmitButton() {
    const inputs = document.querySelectorAll("form input");
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#comment").value;

    if (name === "" || name === "IronHack" || email === "" || phone === "") {
      alert("Please fill in all required fields.");
      return;
    }

    const nameRegex = /[A-Za-zÑñáÉéÍíÓóÚÚ\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter with a correct name.");
      return;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number with 9 digits.");
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      message,
    };
    console.log(newContact);
  }

  function _bindEvents() {
    const submitButton = document.querySelector(".submitButton");

    submitButton.addEventListener("click", _handleSubmitButton);
  }

  _bindEvents();
};
