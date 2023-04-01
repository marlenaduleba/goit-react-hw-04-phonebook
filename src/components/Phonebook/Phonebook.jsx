import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import css from './Phonebook.module.css';

import { Notify } from 'notiflix';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    } else {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
      });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  onAddContact = contact => {
    const { contacts } = this.state;

    const searchUnique = contact.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    let renderContacts = contacts;

    renderContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim())
    );

    return (
      <div className={css.box}>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.onAddContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length !== 0 ? (
            <Filter handleFilter={this.handleFilter} />
          ) : (
            <p className={css.message}>
              Looks like you don`t have any contacts yet or just clear them all.
              Please add new contact.
            </p>
          )}

          <ContactList
            contacts={renderContacts}
            handleClickDelete={this.handleClickDelete}
          />
        </Section>
      </div>
    );
  }
}
