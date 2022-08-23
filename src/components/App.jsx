import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm  from './contactForm';
import ContactList  from './contactList';
import Filter from './filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
