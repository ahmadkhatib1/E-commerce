import React from "react";
import { Container } from "react-bootstrap";
import { CategoryContainer } from "../../component/Category";
import { PaginationCompontent } from "../../component/Utility";
const AllCategoryPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </Container>
  );
};

export default AllCategoryPage;
