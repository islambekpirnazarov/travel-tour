import { actions } from "./action"

export const initialState = {
    destinations: [],
    isDestLoading: false,
    offers: [],
    isOfferLoading: false
}
export function reducer(state, action) {
    switch (action.type) {
        case actions.FETCHING_DEST_DATA:
            return {
                ...state,
                isDestLoading: true
            }
        case actions.FETCHED_DEST_DATA:
            return {
                ...state,
                isDestLoading: false,
                destinations: action.payload
            }
        case actions.FETCHING_DEST_DATA_ERROR:
            return {
                ...state,
                isDestLoading: false
            }
        case actions.FETCHING_TOUR_DATA:
            return {
                ...state,
                isOfferLoading: true
            }
        case actions.FETCHED_TOUR_DATA:
            return {
                ...state,
                isOfferLoading: false,
                offers: action.payload
            }
        case actions.FETCHING_TOUR_DATA_ERROR:
            return {
                ...state,
                isOfferLoading: false
            }
    }
}