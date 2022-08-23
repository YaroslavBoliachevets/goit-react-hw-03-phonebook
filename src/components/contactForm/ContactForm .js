import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {FormInput, Label, Input} from './ContactForm .styled'
;

class ContactForm  extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleInputChange = e => {
	const {name, value} = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  render() {
    return (
      <FormInput onSubmit={this.onSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
        </Label>
		<Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
        <Label htmlFor={this.telInputId}> Number
        </Label>
		<Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
			value={this.state.number}
			onChange={this.handleInputChange}
			id={this.telInputId}
          />
        <button type="submit">Add to contact</button>
      </FormInput>
    );
  }
}

export default ContactForm ;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}