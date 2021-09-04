import React from 'react';
import { render } from '@testing-library/react';
import About from '../About';

describe('Testing About component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
