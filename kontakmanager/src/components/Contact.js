import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  OnShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDeleteContact = id => {
    this.props.handleDeleteContact(id);
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    const deleteStyle = {
      cursor: "pointer",
      float: "right",
      color: "red"
    };

    return (
      <div className="card card-body mb-3 ">
        <h4>
          {name}{" "}
          <i
            onClick={this.OnShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ ...deleteStyle }}
            onClick={() => this.handleDeleteContact(id)}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDeleteContact: PropTypes.func.isRequired
};

export default Contact;
