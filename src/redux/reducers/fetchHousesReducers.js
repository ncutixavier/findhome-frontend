import { FETCH_HOUSES_ERROR, FETCH_HOUSES_REQUEST, FETCH_HOUSES_SUCCESS } from '../types/fetchHousesTypes'

const initialState = {
    loading: 'block',
    items: [],
    error: ''
}

export const fetchHousesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_HOUSES_REQUEST':
            return {
                ...state,
                loading: 'block'
            }
        case 'FETCH_HOUSES_SUCCESS':
            return {
              loading: "none",
              items: action.payload,
              error: "",
            };
        case 'FETCH_HOUSES_ERROR':
            return {
                loading: 'none',
                items: [],
                error: action.payload
            }
        default:
            return state
    }
}
