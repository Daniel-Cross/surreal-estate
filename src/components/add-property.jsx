import React from 'react';
import '../styles/add-property.css';

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        price: '',
        location: '',
        email: '',
      },
    };
  }

  handleAddProperty = event => {
    event.preventDefault();

    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <label className="title">
            Title:
            <input type="text" value={this.state.fields.title} onChange={this.handleFieldChange} />
          </label>
          <label className="type">
            Type of Property:
            <select type="home-list" form="house-form">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="bedrooms">
            Number of Bedrooms:
            <select type="bedrooms" form="bedroom-form">
              <option value="studio">Studio</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="+4">>4</option>
            </select>
          </label>
          <label className="bathrooms">
            Number of Bathrooms:
            <select type="bathrooms" form="bathroom-form">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">>3</option>
            </select>
          </label>
          <label className="price">
            Value of Property:
            <input type="text" value={this.state.price} onChange={this.handleChange} />
          </label>
          <label className="location">
            Location:
            <input type="text" value={this.state.location} onChange={this.handleChange} />
          </label>
          <label className="email">
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Add">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
