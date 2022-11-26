import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardProductsContainer } from "../../component/Products";
import { CategorysHeader } from "../../component/Category";
import { SideFilter, SearchCountResult, PaginationCompontent } from "../../component/Utility";
const ShopProducsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container style={{ minHeight: "660px" }}>
        <div className="">
          <SearchCountResult title="٦٠٠ منتج متاح ٠٠٠" />
          <Row className="d-flex flex-row">
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="11" md="11">
              <CardProductsContainer title="" btntitle="" />
            </Col>
          </Row>
          <PaginationCompontent />
        </div>
      </Container>
    </div>
  );
};

export default ShopProducsPage;
