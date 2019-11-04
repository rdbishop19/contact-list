import form from "./contactForm.js"
import list from "./contactList.js"

const message = "Welcome to the ZAWESOME contact form app. It contacts. It forms. It apps!"
const container = document.querySelector("#formContainer")
container.innerHTML = `<h1>${message}</h1>`

//populate contact form to DOM
form.renderContactForm()
//populate contact list to DOM
list.renderContactList()