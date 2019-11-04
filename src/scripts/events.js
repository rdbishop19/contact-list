/* component that listens for when the submit button is pressed.
When it is triggered, a new contact should be POSTed to the API. */
import collection from "./contactCollection.js"
import contacts from "./contactList.js"

export default {
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
            .then(() => {
                document.querySelector("form").reset();
            })
    },
    handleDeleteEvent(){
        if (event.target.id.split("--")[0] === "delete"){
            const contactId = event.target.id.split("--")[1]
            // console.log("deleting entry #", contactId)
            collection.deleteContact(contactId)
                .then(collection.getAllContacts)
                .then(contacts.renderContactList)
        }
    },
    attachSaveEvent(){
        document.getElementById("save-entry").addEventListener("click", this.handleSaveEvent)
    },
    attachDeleteEvents(){
        document.querySelector("#contacts").addEventListener("click", this.handleDeleteEvent)
    }
}