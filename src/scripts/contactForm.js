/* component that listens for when the submit button is pressed.
When it is triggered, a new contact should be POSTed to the API. */
import collection from "./contactCollection.js"
import contacts from "./contactList.js";

export default {
    renderContactForm(){
        // console.log("Render the contact form")
        const formContainer = document.querySelector("#formContainer")
        //build form and place in container
        formContainer.innerHTML += this.createFormHtml()
    },
    handleSaveEvent(){
        event.preventDefault()
        // console.log("Saves the new contact's info to the database")

        //get form entry fields and pass to saveNewContact
        const name = document.getElementById("fullName").value
        const address = document.getElementById("address").value
        const phoneNumber = document.getElementById("phoneNumber").value
        console.log({name, address, phoneNumber})

        // const newContact = {name: "Bilbo Baggins", phoneNumber: "111-111-1101", address: "The Shire"}
        // console.log(JSON.stringify(newContact));
        collection.saveNewContact({name, address, phoneNumber})
            .then(collection.getAllContacts)
            .then(contacts.renderContactList)
    },
    attachSaveEvent(){
        document.getElementById("save-entry").addEventListener("click", this.handleSaveEvent)
    },
    createFormHtml(){
        return /* html5 */`
        <form action="" id="contact-form">
            <label for="fullName"><strong>Name: </strong>
            <input id="fullName" type="text" required /></label>
            <label for="address"><strong>Address: </strong>
            <input id="address" type="text" required/></label>
            <label for="phoneNumber"><strong>Phone #: </strong>
            <input id="phoneNumber" type="text" required/></label>
        </form>
        <button type="submit" id="save-entry">Save Contact</button>
        `
    }
}