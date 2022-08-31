import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm  from './contactForm';
import ContactList  from './contactList';
import Filter from './filter';

export class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !==prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  formSubmitHandler = data => {
    console.log(data);
  };

  addContact = (name, number) => {
    const {contacts} = this.state;

    if((contacts.find(contact => (contact.name.includes(name))))) return alert(`${name} is already in contacts.`)

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(p => ({
      contacts: [contact, ...p.contacts],
    }));
    // const contactsLS = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contactsLS);
    // const allContacts = [...parsedContacts, contact]
    // localStorage.setItem('contacts', JSON.stringify(allContacts));
  };

  deleteContact = id => {
    this.setState(p => ({
      contacts: p.contacts.filter(contact => contact.id !== id)
    }))
  }

  changeFilter = e => {
    const {value, name} = e.currentTarget;
    this.setState({[name]: value})
  }

  getVisibleContacts= () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
          <ContactForm  onSubmit={this.addContact}/>

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          <ContactList  contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
