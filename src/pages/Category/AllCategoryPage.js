import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CategoryContainer } from "../../component/Category";
import { PaginationCompontent } from "../../component/Utility";
import { getallCategory } from "../../redux/actions/categoryAction";
const AllCategoryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallCategory)
  }, [])
  const data = useSelector(state => state.allCategory.category)
  const loader = useSelector(state => state.allCategory.Loading)
  console.log(loader);
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </Container>
  );
};

export default AllCategoryPage;
