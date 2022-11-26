import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { AdminSideBar, AdminAllProducts } from "../../component/Admin";
import { PaginationCompontent } from '../../component/Utility'
const AdminAllProductsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts />
          <PaginationCompontent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
