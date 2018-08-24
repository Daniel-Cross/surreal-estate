import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';
import Properties from '../../src/components/properties';

it('renders prop type of title', () => {
  const wrapper = shallow((
    <PropertyCard title="2 bedroom flat" />
  ));
  expect(wrapper.find('.title').text()).toContain('2 bedroom flat');
});

it('renders prop type of type', () => {
  const wrapper = shallow((
    <PropertyCard type="flat" />
  ));
  expect(wrapper.find('.type').text()).toContain('flat');
});

it('renders prop type of bathrooms', () => {
  const wrapper = shallow((
    <PropertyCard bathrooms="1" />
  ));
  expect(wrapper.find('.bathrooms').text()).toContain('1');
});

it('renders prop type of bedrooms', () => {
  const wrapper = shallow((
    <PropertyCard bedrooms="2" />
  ));
  expect(wrapper.find('.bedrooms').text()).toContain('2');
});

it('renders prop type of price', () => {
  const wrapper = shallow((
    <PropertyCard price="1000000" />
  ));
  expect(wrapper.find('.price').text()).toContain('1000000');
});

it('renders prop type of city', () => {
  const wrapper = shallow((
    <PropertyCard city="Manchester" />
  ));
  expect(wrapper.find('.city').text()).toContain('Manchester');
});

it('renders prop type of email', () => {
  const wrapper = shallow((
    <PropertyCard email="hello@website.com" />
  ));
  expect(wrapper.find('.email').text()).toContain('hello@website.com');
});
