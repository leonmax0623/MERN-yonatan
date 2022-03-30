import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { connect } from "react-redux";
import { SlideDown } from "react-slidedown";
import axios from 'axios';
import { ImageCtaShop } from "../../components/Cta";
import { LayoutHome } from "../../components/Layout";
import {
  ShopFilter, ShopHeader, ShopProducts, ShopSidebar
} from "../../components/Shop";
import initProducts from "../../data/products.json";
import { getSortedProducts } from "../../lib/product";
import initCategories from '../../data/categories.json';
import initColors from '../../data/colors.json';
import initSizes from '../../data/sizes.json';
import initTags from '../../data/tags.json';
import API from '../../api';

const pageLimit = 12;

const LeftSidebar = () => {
  const [layout, setLayout] = useState("grid four-column");
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  // const [params, setParams] = useState({
  //   skip: 0,
  //   limit: pageLimit,
  //   search: '',
  //   category: ''
  // });
  const [popularProducts, setPopularProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const categories = initCategories;
  const colors = initColors;
  const sizes = initSizes;
  const tags = initTags;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(async () => {
    console.log('aaa');
    const response = await API.get('/products/popular/list');
    console.log('popular', response);
    setPopularProducts(response.data);
  }, []);

  useEffect(async () => {
    // let sortedProducts = getSortedProducts(products, sortType, sortValue);
    // const filterSortedProducts = getSortedProducts(
    //   sortedProducts,
    //   filterSortType,
    //   filterSortValue
    // );
    // sortedProducts = filterSortedProducts;
    // setSortedProducts(sortedProducts);
    // setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    console.log('offset', offset);
    const params = {
      skip: offset,
      limit: pageLimit,
      search,
      sortType,
      sortValue,
      filterSortType,
      filterSortValue,
    };

    const response = await API.get('/products', { params });
    setProducts(response.data.data);
    setTotalProducts(response.data.count);
  }, [offset, search, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutHome>
      {/* breadcrumb */}
      <ImageCtaShop />
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          getFilterSortParams={getFilterSortParams}
          productCount={totalProducts}
          sortedProductCount={products.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
        />

        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter 
            categories={categories}
            colors={colors}
            sizes={sizes}
            tags={tags}
            getSortParams={getSortParams} 
          />
        </SlideDown>

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container>
            <Row>
              <Col
                lg={3}
                className="order-2 order-lg-1 space-mt-mobile-only--50"
              >
                {/* shop sidebar */}
                <ShopSidebar
                  categories={categories}
                  colors={colors}
                  popularProducts={popularProducts}
                  searchProducts={setSearch}
                  getSortParams={getSortParams}
                />
              </Col>

              <Col lg={9} className="order-1 order-lg-2">
                {/* shop products */}
                <ShopProducts layout={layout} products={products} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={totalProducts}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Row style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Col xl={4} lg={4} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <div className="about-page-2-image space-mb-mobile-only--50">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/shop_2.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
        <Col xl={4} lg={4} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <div className="about-page-2-image space-mb-mobile-only--50">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/shop_3.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
        <Col xl={4} lg={4} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <div className="about-page-2-image space-mb-mobile-only--50">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/shop_4.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </LayoutHome>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData
  };
};

export default connect(mapStateToProps)(LeftSidebar);
