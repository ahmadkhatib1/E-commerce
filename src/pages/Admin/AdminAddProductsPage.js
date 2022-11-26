import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { AdminSideBar, AdminAddProducts } from "../../component/Admin";


const AdminAddProductsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductsPage
