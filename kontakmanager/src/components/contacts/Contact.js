import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { assignmentExpression } from "@babel/types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  OnShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDeleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
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
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={() => this.handleDeleteContact(id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
