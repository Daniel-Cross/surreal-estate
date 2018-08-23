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

it('renders prop type of title', () => {
  const wrapper = shallow((
    <PropertyCard type="flat" />
  ));
  expect(wrapper.find('.type').text()).toContain('flat');
});
