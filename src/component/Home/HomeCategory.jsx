import { Container, Row, Spinner } from "react-bootstrap";
import { SubTitle } from "../Utility";
import { CategoryCard } from "../Category";
import HomeCategoryHook from "../../hooks/category/home-category-hook.js"
const HomeCategory = () => {
  const [category, loader, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title=" الاقسام" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-3 d-flex  justify-content-between">
        {
          !loader ? (
            category.data ? category.data.map((cat, index) => {
              return (<CategoryCard key={cat._id} title={cat.name} img={cat?.image} background={colors[index]} />)
            }).slice(0, 5) : (<h5> no category</h5>)) : (<Spinner animation="border" variant="secondary" />)
        }
      </Row>
    </Container>
  );
};

export default HomeCategory;
