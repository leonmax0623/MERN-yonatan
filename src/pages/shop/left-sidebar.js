import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { connect } from "react-redux";
import { SlideDown } from "react-slidedown";
import { ImageCtaShop } from "../../components/Cta";
import { LayoutHome } from "../../components/Layout";
import {
  ShopFilter, ShopHeader, ShopProducts, ShopSidebar
} from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";

const LeftSidebar = ({ products }) => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 20;

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

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutHome>
      {/* breadcrumb */}
      <ImageCtaShop />
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          getFilterSortParams={getFilterSortParams}
          productCount={products.length}
          sortedProductCount={currentData.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
        />

        {/* shop header filter */}
        <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
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
                  products={products}
                  getSortParams={getSortParams}
                />
              </Col>

              <Col lg={9} className="order-1 order-lg-2">
                {/* shop products */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
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
