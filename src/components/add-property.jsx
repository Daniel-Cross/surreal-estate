import React from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from './alert';

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        bedrooms: '0',
        bathrooms: '0',
        price: '0',
        email: '',
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
    };
  }

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    console.log(this.state.fields);

    axios.post(
      'http://localhost:3000/api/v1/PropertyListing',
      /* title: this.state.title,
      type: this.state.type,
      city: this.state.city,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      price: this.state.price,
      email: this.state.email, */
      this.state.fields
    ).then(() => this.setState({
      isSuccess: true,
      alertMessage: 'Property added.',
    })).catch((err) => {
      this.setState({
        alertMessage: 'Server error. Please try again later',
        isError: true,
      });
    });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
          {this.state.isError && <Alert message={this.state.alertMessage} />}
          <label className="title">
            Title:
            <input type="text" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          </label>
          <label className="type">
            Type of Property:
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="flat">Flat</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-Detached</option>
              <option value="terraced">Terraced</option>
              <option value="end-of-terrace">End of Terrace</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </label>
          <label className="city">
            Location:
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="manchester">Manchester</option>
              <option value="leeds">Leeds</option>
              <option value="sheffield">Sheffield</option>
              <option value="liverpool">Liverpool</option>
            </select>
          </label>
          <label className="bedrooms">
            Number of Bedrooms:
            <input type="number" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
          </label>
          <label className="bathrooms">
            Number of Bathrooms:
            <input type="number" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
          </label>
          <label className="price">
            Price (£):
            <input type="number" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} />
          </label>
          <label className="email">
            Email Address:
            <input type="email" name="email" value={this.state.fields.email} onChange={this.handleFieldChange} />
          </label>
          <button type="submit" value="Add">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
