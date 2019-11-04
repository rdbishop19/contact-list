/* component that loads existing contacts from a json-server API, and saves new ones. */

//fetch call to database.json
export default {
    getAllContacts() {
        return fetch("http://localhost:8088/contacts")
            .then(r => r.json())
    },
    getSingleContact(contactId){
        return fetch(`http://localhost:8088/contacts/${contactId}`)
            .then(r => r.json())
    },
    saveNewContact(contact){
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }
}