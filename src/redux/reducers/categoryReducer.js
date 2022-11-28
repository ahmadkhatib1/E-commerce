import { GET_ALL_CATEGORY, GET_ERROR } from '../actionTypes'
const initialState = {
    category: [],
    Loading: true,
};
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payLoad,
                Loading: false,
            }
        case GET_ERROR:
            return {
                category: action.payLoad,
                Loading: true,
            }
        default:
            return state;
    }
}
export default categoryReducer