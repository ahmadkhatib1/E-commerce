import React from 'react';
import { Slider, HomeCategory, DiscountSection } from '../../component/Home';
import { CardProductsContainer } from "../../component/Products";
import { BrandFeatured } from "../../component/Brand/Index";
const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Slider />
            <HomeCategory />
            <CardProductsContainer
                title="الاكثر مبيعا"
                btntitle="المزيد"
                pathText="/products"
            />
            <DiscountSection />
            {/* <CardProductsContainer
                title="احدث الازياء"
                btntitle="المزيد"
                pathText="/products"
            /> */}
            <BrandFeatured
                title="اقوي الماركات"
                btntitle="المزيد"
                pathText="/allbrands"
            />
        </div>
    )
}

export default Home