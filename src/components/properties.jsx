import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.css';
import { Link } from 'react-router-dom';

class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(response => this.setState({ properties: response.data }))
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Server Error, properties cannot be found',
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(() => {
          this.setState({
            isError: true,
            alertMessage: 'Server Error, city not found',
          });
        });
    }
  }

  render() {
    return (
      <div className="properties">
        {this.state.properties.map(property => (
          <PropertyCard key={property._id} {...property} />
        ))}
        <div className="sidebar">
          <Link className="manchester" to={`?query={"city": "Manchester"}`} >Manchester</Link>
          <Link className="leeds" to={`?query={"city": "Leeds"}`}>Leeds</Link>
          <Link className="sheffield" to={`?query={"city": "Sheffield"}`}>Sheffield</Link>
          <Link className="liverpool" to={`?query={"city": "Liverpool"}`}>Liverpool</Link>

        </div>
      </div>

    );
  }
}

export default Properties;
