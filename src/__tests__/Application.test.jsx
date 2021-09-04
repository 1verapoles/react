import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Application from '../Application';

describe('Testing Application component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Provider store={store}><BrowserRouter><Application /></BrowserRouter></Provider>);

    expect(asFragment()).toMatchSnapshot();
  });
});
