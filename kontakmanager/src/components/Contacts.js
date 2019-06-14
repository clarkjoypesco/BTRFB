import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Cj Pesco",
        email: "cjpesco@gmail.com",
        phone: "545-676-9898"
      },
      {
        id: 3,
        name: "Joyce Pauline",
        email: "joycepauline@gmail.com",
        phone: "+63492902109"
      }
    ]
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDeleteContact={this.handleDeleteContact}
          />
        ))}
      </Fragment>
    );
  }
}
export default Contacts;
