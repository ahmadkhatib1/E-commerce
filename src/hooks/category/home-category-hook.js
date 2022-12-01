import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallCategory } from "../../redux/actions/categoryAction";
const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallCategory(5))
    }, [])
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    const category = useSelector(state => state.allCategory.category)
    const loader = useSelector(state => state.allCategory.Loading)
    return [category, loader, colors];
}

export default HomeCategoryHook