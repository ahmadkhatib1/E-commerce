import React from "react";
import { Container } from "react-bootstrap";
import { BrandContainer } from "../../component/Brand/Index";
import { PaginationCompontent } from "../../component/Utility";
const AllBrandPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandContainer />
      <PaginationCompontent />
    </Container>
  );
};

export default AllBrandPage;
