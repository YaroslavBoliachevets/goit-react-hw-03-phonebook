import React, {Component} from "react";

class Contacts extends Component {
	render() {
		return (
			<>
			<h2>Contacts</h2>
			<ul>
				{this.props.contacts.map(contact=> {
					return <li key={contact.id}>{contact.name}: {contact.number}</li>
				})}
			</ul>
			</>
		)
	}
}

export default Contacts;