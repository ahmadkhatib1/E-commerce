import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AdminSideBar, AdminAddSubCategory } from "../../component/Admin";
const AdminAddSubCategoryPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;
