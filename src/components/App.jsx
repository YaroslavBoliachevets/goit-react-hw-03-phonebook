import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import Form from './form/';
import Contacts from './contacts';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    console.log(contact, '+++++++++++++');

    this.setState(p => ({
      contacts: [contact, ...p.contacts]
    }))
  }

  render() {
    return (
      <>
            <h2>Phonebook</h2>
            <Form onSubmit={this.addContact}></Form>
            <Contacts contacts={this.state.contacts}/>
      </>
    );
  }
}
