import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Cards from '../Cards';



describe('Testing Cards component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Provider store={store}><BrowserRouter><Cards /></BrowserRouter></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});