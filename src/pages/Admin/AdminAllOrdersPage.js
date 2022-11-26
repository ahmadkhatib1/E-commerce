import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AdminAllOrder, AdminSideBar } from "../../component/Admin";
import { PaginationCompontent } from "../../component/Utility";
const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrder />
          <PaginationCompontent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrdersPage;
