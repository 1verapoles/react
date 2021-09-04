import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Testing Header component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<BrowserRouter><Header /></BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
