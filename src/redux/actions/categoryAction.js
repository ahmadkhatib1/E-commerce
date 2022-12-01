import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../actionTypes'
import UseGetData from '../../hooksAxios/useGetData';
import { USeInsertDataWithImage } from '../../hooksAxios/useInsertData'
// get all categories
export const getallCategory = (limet) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories?limit=${limet}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payLoad: response,
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payLoad: "Error: " + e.message,
        })
    }
}
// get all categories with pagination
export const getallCategoryPage = (page) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories?limit=12&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payLoad: response,
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payLoad: "Error: " + e.message,
        })
    }
}
// add category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await USeInsertDataWithImage('/api/v1/categories', formData);
        dispatch({
            type: CREATE_CATEGORY,
            payLoad: response,
            loading: true,
        })
    }
    catch (e) {
        dispatch({
            type: GET_ERROR,
            payLoad: "Error: " + e.message,
        })
    }
}