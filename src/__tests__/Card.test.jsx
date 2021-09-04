import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Testing Card component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<BrowserRouter><Card /></BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
});
