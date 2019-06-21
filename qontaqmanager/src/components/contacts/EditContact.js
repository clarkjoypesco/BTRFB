import React, { Component } from "react";

import TextInputGroup from "../layout/TextInputGroup";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact, updateContact } from "../../actions/contactActions";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = () => {
    const { name, email, phone } = this.state;

    //Check for Error
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required"
        }
      });
      return;
    }

    const { id } = this.props.match.params;
    const updContact = {
      id,
      name,
      email,
      phone
    };

    this.props.updateContact(updContact);
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleOnSubmit();
            }}
          >
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleOnChange}
              error={errors.name}
            />

            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.handleOnChange}
              error={errors.email}
            />

            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.handleOnChange}
              error={errors.phone}
            />

            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStatetoProps,
  { getContact, updateContact }
)(EditContact);
