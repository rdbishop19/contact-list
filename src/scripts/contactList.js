/* component that displays all contacts */
import events from "./events.js";
import data from "./contactCollection.js";
import displayNew from "./contact.js";

export default {
	renderContactList() {
		data.getAllContacts().then((entries) => {
			const contactsContainer = document.querySelector("#contacts");
			contactsContainer.innerHTML = ""

			entries.forEach((entry) => {
				contactsContainer.innerHTML += displayNew(entry);
			});
			events.attachSaveEvent();
            events.attachDeleteEvents();
            events.attachEditEvents();
		});
	}
};
