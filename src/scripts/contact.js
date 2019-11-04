/* component that displays a person's name, phone number, and address. */

export default function contactInfoHtml(entry) {
	return `
            <h3>${entry.name}</h3>
            <p>Address: ${entry.address}</p>
            <p>Phone #: ${entry.phoneNumber}</p>
            <button id="delete--${entry.id}" class="delete">Delete</button>
        `;
}
