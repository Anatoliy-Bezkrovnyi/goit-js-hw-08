const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const formData = {};
    const { email, password } = event.currentTarget.elements;
    formData.email = email.value.trim();
    formData.password = password.value.trim();
    if (formData.email === "" || formData.password === "") {
        alert("All form fields must be filled in");
        return;
    }
    console.log(formData);
    event.currentTarget.reset();
}
