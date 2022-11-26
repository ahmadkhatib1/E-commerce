import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { AdminSideBar, AdminAddCategory } from "../../component/Admin";

const AdminAddCategoryPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCategoryPage;
