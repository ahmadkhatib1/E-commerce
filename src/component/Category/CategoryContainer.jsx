import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
const CategoryContainer = ({ loader, data }) => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          {
            !loader ? (
              data ? data.map((cat) => {
                return (<CategoryCard key={cat._id} title={cat.name} img={cat?.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
              }) : (<h5> no category</h5>)) : (<Spinner animation="border" variant="secondary" />)
          }
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
