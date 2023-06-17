export const initialState = {
    currentlyReading: [],
    wantToRead: [],
    Read: [],
    searchValue: null
}

export const dataReducer = (state, action) => {

    switch (action.type) {
        case "SERCH_PRODUCT":
            return {
                ...state, searchValue: action.payload
            }
        default:
            return state
    }
}