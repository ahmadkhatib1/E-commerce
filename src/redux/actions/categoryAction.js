import { GET_ALL_CATEGORY, GET_ERROR } from '../actionTypes'
import UseGetData from '../../hooks/useGetData'
 export const getallCategory = async (dispatch) => {
    try {
        const responce = await UseGetData('/api/v1/categories');
        dispatch({
            type: GET_ALL_CATEGORY,
            payLoad: responce,
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payLoad:"Error: " + e.message,
        })
    }
}