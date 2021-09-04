import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Details from '../Details';

const card = { title: "new", description: "desc", author: "Marry", publishedAt: "2021-09-03T13:30:41Z", urlToImage: "https://i.pinimg.com/564x/ff/a8/f7/ffa8f756bf1b3cbb28606b89b09da658.jpg", url: "https://i.pinimg.com/564x/ff/a8/f7/ffa8f756bf1b3cbb28606b89b09da658.jpg" }

describe('Testing Details component', () => {

  const unmockedFetch = global.fetch

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ articles: [card] }),
      })
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })
  it('renders without crashing', () => {

    const { asFragment } = render(<Provider store={store}><BrowserRouter><Details /></BrowserRouter></Provider>);

    expect(asFragment()).toMatchSnapshot();

  });
});
