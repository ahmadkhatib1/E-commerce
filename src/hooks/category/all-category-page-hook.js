import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallCategory, getallCategoryPage } from "../../redux/actions/categoryAction";
const AllCategoryPageHook = () => {
    const dispatch = useDispatch();
    // whine first load
    useEffect(() => {
        dispatch(getallCategory(12))
    }, [])
    const category = useSelector(state => state.allCategory.category)
    const loader = useSelector(state => state.allCategory.Loading)
    let paginate = 0;
    if (category.paginationResult)
        paginate = category.paginationResult.numberOfPages;
    // whine press paginate
    const getPage = (page) => {
        dispatch(getallCategoryPage(page))
    }
    return [loader, getPage, category, paginate];
}

export default AllCategoryPageHook