import React from "react";
import { Container } from "react-bootstrap";
import { CardProductsContainer, ProductDetails, } from "../../component/Products";
import { CategorysHeader } from "../../component/Category";
import { RateContainer } from "../../component/Rate/Index";

const ProductDetalisPage = () => {
  return (
    <div>
      <CategorysHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" btntitle="" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
