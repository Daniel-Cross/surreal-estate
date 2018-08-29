import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.css';
import { Link } from 'react-router-dom';
import qs from 'qs';

class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
      search: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/PropertyListing')
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
      axios
        .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(() => {
          this.setState({
            isError: true,
            alertMessage: 'Server Error, city not found',
          });
        });
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();

    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });

    const { history } = this.props;
    history.push(newQueryString);
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sort-buttons">
          <Link
            className="manchester"
            to={this.buildQueryString('query', { city: 'Manchester' })}
          >
            <button className="sorts">
              Manchester
            </button>
          </Link>
          <Link
            className="leeds"
            to={this.buildQueryString('query', { city: 'Leeds' })}
          >
            <button className="sorts">
              Leeds
            </button>
          </Link>
          <Link
            className="sheffield"
            to={this.buildQueryString('query', { city: 'Sheffield' })}
          >
            <button className="sorts">
              Sheffield
            </button>

          </Link>

          <Link
            className="liverpool"
            to={this.buildQueryString('query', { city: 'Liverpool' })}
          >
            <button className="sorts">
              Liverpool
            </button>

          </Link>

          <Link
            className="price-descending"
            to={this.buildQueryString('sort', { price: -1 })}
          >
            <button className="sorts">
              Price Descending
            </button>
          </Link>


          <Link
            className="price-ascending"
            to={this.buildQueryString('sort', { price: +1 })}
          >
            <button className="sorts">
              Price Ascending
            </button>
          </Link>
          <form onSubmit={this.handleSearch}>
            <input
              className="title-search"
              placeholder="Search Title..."
              type="text"
              value={this.state.search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <button
              className="search-button"
              type="submit"
            >
              <i className="fas fa-search" />
            </button>
          </form>
          <div className="properties">
            {this.state.properties.map(property => (
              <PropertyCard key={property._id} {...property} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Properties;
