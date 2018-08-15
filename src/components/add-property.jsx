import React from 'react';

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      type: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Thanks for the submission!: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleSubmit}>
          <label className="title">
            Title:
            <input type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label className="type">
            Type of Property:
            <input type="text" value={this.state.type} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProperty;
