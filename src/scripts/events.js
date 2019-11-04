/* component that listens for when the submit button is pressed.
When it is triggered, a new contact should be POSTed to the API. */
import collection from "./contactCollection.js";
import contacts from "./contactList.js";

const updateFormField = (entry) => {
	document.getElementById("hiddenEdit").value = entry.id;
	document.getElementById("fullName").value = entry.name;
	document.getElementById("address").value = entry.address;
	document.getElementById("phoneNumber").value = entry.phoneNumber;
};

const resetForm = () => {
	document.querySelector("form").reset();
};

const refreshPage = () => {
	return collection.getAllContacts().then(contacts.renderContactList).then(resetForm);
};

export default {
	handleSaveEvent() {
		event.preventDefault();
		//get form entry fields and pass to saveNewContact
		const editEntry = document.getElementById("hiddenEdit").value;
		const name = document.getElementById("fullName").value;
		const address = document.getElementById("address").value;
		const phoneNumber = document.getElementById("phoneNumber").value;

		if (editEntry) {
			// updating an entry
			collection.updateContact(editEntry, { name, address, phoneNumber }).then(refreshPage);
		} else {
			// new entry
			collection.saveNewContact({ name, address, phoneNumber }).then(refreshPage);
		}
	},
	handleDeleteEvent() {
		if (event.target.id.split("--")[0] === "delete") {
			const contactId = event.target.id.split("--")[1];
			// console.log("deleting entry #", contactId)
			collection.deleteContact(contactId).then(refreshPage);
		}
	},
	handleEditEvent() {
		if (event.target.id.split("--")[0] === "edit") {
			const contactId = event.target.id.split("--")[1];
			// console.log("Editing entry #", contactId);
			collection.getSingleContact(contactId).then(updateFormField);
		}
	},
	attachSaveEvent() {
		document.getElementById("save-entry").addEventListener("click", this.handleSaveEvent);
	},
	attachDeleteEvents() {
		document.querySelector("#contacts").addEventListener("click", this.handleDeleteEvent);
	},
	attachEditEvents() {
		document.querySelector("#contacts").addEventListener("click", this.handleEditEvent);
	}
};
