import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../Spinner';

describe('Testing Spinner component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
