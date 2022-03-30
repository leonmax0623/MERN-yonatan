import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  IoIosArrowDown, IoIosCart, IoIosHeartEmpty, IoIosMenu, IoIosSearch, IoMdPerson
} from "react-icons/io";
import { connect } from "react-redux";
import UserIcon from '../../../public/assets/images/yonatan-images/user.svg';
import AboutOverlay from "./elements/AboutOverlay";
import CartOverlay from "./elements/CartOverlay";
import MobileMenu from "./elements/MobileMenu";
import NavigationAbout from "./elements/NavigationAbout";
import SearchOverlay from "./elements/SearchOverlay";
import WishlistOverlay from "./elements/WishlistOverlay";

const HeaderAbout = ({ aboutOverlay, cartItems, wishlistItems }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header
        className={`topbar-shadow transparent-style white-content ${scroll > headerTop ? "is-sticky" : ""
          }`}
      >
        <div className="multilevel-header">
          <Container className="wide">
            <Row className="multilevel-header__top d-none d-lg-flex">
              <Col lg={4} className="d-lg-block">
                <div className="d-flex">
                  <div className="language-change change-dropdown customChange">
                    <span>English</span> <IoIosArrowDown />
                    <ul>
                      <li>
                        <button>English</button>
                      </li>
                      <li>
                        <button>Deustch</button>
                      </li>
                    </ul>
                  </div>
                  <span className="header-separator" style={{ color: 'black' }}>|</span>
                  <div className="currency-change change-dropdown customChange">
                    <span>USD</span> <IoIosArrowDown />
                    <ul>
                      <li>
                        <button>USD</button>
                      </li>
                      <li>
                        <button>EUR</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={6} lg={4} className="text-lg-center">
                {/* logo */}
                <div className="header-content__logo">
                  <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                    <a>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/images/yonatan-images/logo_about.png"}
                        className="img-fluid dark-logo"
                        alt=""
                      />
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/yonatan-images/logo_about.png"
                        }
                        className="img-fluid white-logo"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={6} lg={4} className="text-right">
                <div className="header-content__icons aboutIcon">
                  <ul className="d-lg-block">
                    <li>
                      <button
                        onClick={() => {
                          setOffCanvasSearchActive(true);
                          document
                            .querySelector("body")
                            .classList.add("overflow-hidden");
                        }}
                      >
                        <IoIosSearch />
                      </button>
                    </li>
                    <li>
                      <Link
                        href="/other/login-register"
                        as={process.env.PUBLIC_URL + "/other/login-register"}
                      >
                        <a>
                          <IoMdPerson />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setOffCanvasWishlistActive(true);
                          document
                            .querySelector("body")
                            .classList.add("overflow-hidden");
                        }}
                      >
                        <IoIosHeartEmpty />
                        {wishlistItems.length >= 1 ? (
                          <span className="count">
                            {wishlistItems.length ? wishlistItems.length : ""}
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setOffCanvasCartActive(true);
                          document
                            .querySelector("body")
                            .classList.add("overflow-hidden");
                        }}
                      >
                        <IoIosCart />
                        {cartItems.length >= 1 ? (
                          <span className="count">
                            {cartItems.length ? cartItems.length : ""}
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="multilevel-header__top d-flex d-lg-none align-items-center">
              <Col xs={4} lg={4} className="d-block">
                <div className="d-flex aboutIcon">
                  <ul className="d-flex">
                    <li>
                      <Link
                        href="/other/login-register"
                        as={process.env.PUBLIC_URL + "/other/login-register"}
                      >
                        <a>
                          <UserIcon width="2em" height="2em" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={4} lg={4} className="text-right">
                {/* logo */}
                <div className="header-content__logo">
                  <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                    <a>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/images/yonatan-images/logo_about.png"}
                        className="img-fluid dark-logo"
                        alt=""
                      />
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/yonatan-images/logo_about.png"
                        }
                        className="img-fluid white-logo"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={4} lg={4} className="text-right">
                <div className="header-content__icons">
                  <ul className="d-block">
                    <li>
                      <button
                        onClick={() => setOffCanvasMobileMenuActive(true)}
                      >
                        <IoIosMenu />
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="multilevel-header__bottom">
              <Col
                lg={12}
                className="text-center d-none d-lg-block space-mt--40"
              >
                {/* navigation */}
                <NavigationAbout />
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ""
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />

      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* wishlist overlay */}
      <WishlistOverlay
        activeStatus={offCanvasWishlistActive}
        getActiveStatus={setOffCanvasWishlistActive}
      />
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(HeaderAbout);
