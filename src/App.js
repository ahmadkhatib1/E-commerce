import {
  Home, LoginPage, RigesterPage, AllCategoryPage, ShopProductsPage,
  AllBrandPage, CartPage, ProductDetalisPage, ChoosePayMethoudPage,
  AdminAllProductsPage, AdminAllOrdersPage, AdminAddProductsPage,
  AdminAddCategoryPage, AdminSubCategoryPage, AdminAddrandPage,
  AdminOrderDetalisPage, UserAllOrdersPage, UserFavoriteProductPage,
  UserAllAddressPage, UserAddAddressPage, UserEditAddressPage,
  UserProfilePage,
} from "./pages";
import { NavbarLogin, Footer } from "./component/Utility";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RigesterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/allbrands" element={<AllBrandPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/order/paymethoud"
            element={<ChoosePayMethoudPage />} />
          {/* ======= admin  ======== */}
          <Route
            path="/admin/allproducts"
            element={<AdminAllProductsPage />} />
          <Route
            path="/admin/allorders"
            element={<AdminAllOrdersPage />} />
          <Route
            path="/admin/addcategory"
            element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminSubCategoryPage />} />
          <Route
            path="/admin/addproducts"
            element={<AdminAddProductsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddrandPage />} />
          <Route
            path="/admin/orders/23"
            element={<AdminOrderDetalisPage />} />
          {/* ==== user ==== */}
          <Route path="/user/allOrders" element={<UserAllOrdersPage />} />
          <Route
            path="/user/favorite"
            element={<UserFavoriteProductPage />} />
          <Route path="/user/address" element={<UserAllAddressPage />} />
          <Route
            path="/user/add-address"
            element={<UserAddAddressPage />} />
          <Route
            path="/user/edit-address"
            element={<UserEditAddressPage />} />
          <Route path="user/user-profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
