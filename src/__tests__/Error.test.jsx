import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('Testing Error component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Error />);

    expect(asFragment()).toMatchSnapshot();
  });
});
