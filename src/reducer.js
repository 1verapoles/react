import {
    FETCH_DETAIL,
    FETCH_CARDS,
    IS_LOADING,
    LOADED,
    SET_SEARCH_PHRASE,
    CHANGE_SORT_BY,
    CHANGE_PAGE_NUMBER,
    CHANGE_PAGE_SIZE
} from "./constants";

export const st = {
    isLoading: false,
    API_KEY: "2aedd492fa3c4e97b41ac78483bc25e1",
    cards: {},
    card: {},
    pageNumber: 1,
    pageSize: 20,
    sortBy: '',
    searchPhrase: ''
}

export default (state = st, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: true };
            break;
        case LOADED:
            return { ...state, isLoading: false };
            break;
        case FETCH_DETAIL:
            return { ...state, card: action.payload };
            break;
        case FETCH_CARDS:
            return { ...state, cards: action.payload };
            break;
        case SET_SEARCH_PHRASE:
            return { ...state, searchPhrase: action.payload };
            break;
        case CHANGE_SORT_BY:
            return { ...state, sortBy: action.payload };
            break;
        case CHANGE_PAGE_SIZE:
            return { ...state, pageSize: action.payload };
            break;
        case CHANGE_PAGE_NUMBER:
            return { ...state, pageNumber: action.payload };
            break;
        default:
            return state;
    }
};