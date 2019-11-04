/* component that displays all contacts */
import form from "./contactForm.js"
import data from "./contactCollection.js"
import displayNew from "./contact.js"

export default {
    renderContactList(){
        data.getAllContacts()
            .then((entries)=> {
                entries.forEach((entry)=>{
                    // console.log(entry);
                    const contactsContainer = document.querySelector("#contacts")
                    contactsContainer.innerHTML += displayNew(entry)
                })
                form.attachSaveEvent()
            })
    }
}
