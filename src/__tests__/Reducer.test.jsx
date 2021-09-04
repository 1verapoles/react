import React from 'react';
import {
  IS_LOADING,
  LOADED,
  SET_SEARCH_PHRASE,
  CHANGE_SORT_BY,
  CHANGE_PAGE_NUMBER,
  CHANGE_PAGE_SIZE
} from "../constants";
import reducer from '../reducer';
import { st } from '../reducer';

describe("test reducer", () => {

  beforeEach(() => {
    reducer(st, { type: "A" });
  });


  test("loading", () => {
    expect(reducer(st, { type: IS_LOADING })).toEqual({ isLoading: true, cards: {}, card: {}, pageNumber: 1, pageSize: 20, sortBy: '', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("loaded", () => {
    expect(reducer(st, { type: LOADED })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 1, pageSize: 20, sortBy: '', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("change page size", () => {
    expect(reducer(st, { type: CHANGE_PAGE_SIZE, payload: 10 })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 1, pageSize: 10, sortBy: '', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("change page number", () => {
    expect(reducer(st, { type: CHANGE_PAGE_NUMBER, payload: 2 })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 2, pageSize: 20, sortBy: '', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("change sortBy", () => {
    expect(reducer(st, { type: CHANGE_SORT_BY, payload: "publishedAt" })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 1, pageSize: 20, sortBy: 'publishedAt', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("change search phrase", () => {
    expect(reducer(st, { type: SET_SEARCH_PHRASE, payload: "villa" })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 1, pageSize: 20, sortBy: '', searchPhrase: 'villa', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

  test("default", () => {
    expect(reducer(st, { type: "F" })).toEqual({ isLoading: false, cards: {}, card: {}, pageNumber: 1, pageSize: 20, sortBy: '', searchPhrase: '', API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1" });
  });

})
