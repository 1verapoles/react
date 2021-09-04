import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../store';
import Form from '../Form';

describe('Testing Form component', () => {
  test('type', () => {
    render(<Provider store={store}><BrowserRouter><Form /></BrowserRouter></Provider>);
    userEvent.type(screen.getByRole('textbox'), 'anna');
    expect(screen.getByRole('textbox')).toHaveValue('anna');
  });
});
