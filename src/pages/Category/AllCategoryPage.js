import { Container } from "react-bootstrap";
import { CategoryContainer } from "../../component/Category";
import { PaginationCompontent } from "../../component/Utility"
import AllCategoryPageHook from "../../hooks/category/all-category-page-hook";
const AllCategoryPage = () => {
  const [loader, getPage, category, paginate] = AllCategoryPageHook();
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer loader={loader} data={category.data} />
      {
        paginate > 1 ? (<PaginationCompontent numberOfPages={paginate} onPress={getPage} />) : null
      }

    </Container>
  );
};

export default AllCategoryPage;
