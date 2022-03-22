import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridThreeWrapper } from "../../components/ProductThumb";

const ProductSlider = ({ products }) => {
  const params = {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="space-mb--r100">
      <Container className="wide">
        <Row>
          <Col lg={12}>
            <div className="product-slider-container">
              <Swiper {...params}>
                <ProductGridThreeWrapper
                  products={products}
                  sliderClass="swiper-slide"
                />
              </Swiper>
            </div>
          </Col>
          <Col lg={12} className="text-center space-mt--50">
            <Link
              href="/shop/left-sidebar"
              as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
            >
              <a className="lezada-loadmore-button">Shop Now {`>`}</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSlider;
