/* sets up the entry form to render to DOM */

export default {
    renderContactForm(){
        // console.log("Render the contact form")
        const formContainer = document.querySelector("#formContainer")
        //build form and place in container
        formContainer.innerHTML += this.createFormHtml()
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