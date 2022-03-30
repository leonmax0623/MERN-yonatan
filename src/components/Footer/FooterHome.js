import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";

const FooterHome = ({ footerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`space-pt--50 space-pb--30 ${footerBgClass ? footerBgClass : "bg-color--grey"
        }`}
    >
      <Container className="wide">
        <Row className="d-flex d-lg-none">
          <Col className="footer-single-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "30px", paddingRight: "30px" }}>
            {/* logo */}

            <div className="footer-subscribe-widget" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="footer-single-widget__title">NEWSLETTERS</h2>
              <p className="footer-subscribe-widget__subtitle">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              {/* email subscription */}

              <input
                type="text"
                placeholder="Enter Your Email Address"
                required
                style={{ height: 45, marginBottom: "20px", width: "100%", textAlign: 'center' }}
              />
              <br />
              <div className="logo space-mb--35" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="lezada-button lezada-button--medium" style={{ width: '50%' }}>
                  SUBSCRIBE
                </button>
              </div>

            </div>
            <div className="footer-single-widget__copyright" style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com">
                <FaPinterest />
              </a>
              <a href="https://www.twitter.com">
                <FaYoutube />
              </a>
              <a href="https://www.youtube.com">
                <FaLinkedin />
              </a>
            </div>

            <div className="logo space-mb--35" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={
                  process.env.PUBLIC_URL + footerBgClass ===
                    "bg-color--blue-two"
                    ? "/assets/images/yonatan-images/logo_about.png"
                    : "/assets/images/yonatan-images/logo_about.png"
                }
                className="img-fluid d-flex d-lg-none"
                alt=""
                style={{ width: "40%" }}
              />
              <img
                src={
                  process.env.PUBLIC_URL + footerBgClass ===
                    "bg-color--blue-two"
                    ? "/assets/images/yonatan-images/logo_about.png"
                    : "/assets/images/yonatan-images/logo_about.png"
                }
                className="img-fluid d-none d-lg-flex"
                alt=""
                style={{ width: "60%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="d-none d-lg-flex">
          <Col className="footer-single-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "30px", paddingRight: "30px" }}>
            {/* logo */}

            <div style={{ marginBottom: "20px" }}>
              <p style={{ lineHeight: "1.5" }}>
                Founded in Yonatan Cooperation is a contemporary fashion jewelry brand that associates itself with the chicness of lifestyle
              </p>
            </div>
            <div className="footer-single-widget__copyright" style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com">
                <FaPinterest />
              </a>
              <a href="https://www.twitter.com">
                <FaYoutube />
              </a>
              <a href="https://www.youtube.com">
                <FaLinkedin />
              </a>
            </div>

            <div className="logo space-mb--35">
              <img
                src={
                  process.env.PUBLIC_URL + footerBgClass ===
                    "bg-color--blue-two"
                    ? "/assets/images/yonatan-images/logo_about.png"
                    : "/assets/images/yonatan-images/logo_about.png"
                }
                className="img-fluid"
                alt=""
                style={{ width: "60%" }}
              />
            </div>

          </Col>

          <Col className="footer-single-widget space-mb--50" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h5 className="footer-single-widget__title">ABOUT US</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Store location</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h5 className="footer-single-widget__title">SERVICES</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="#">Size Quide</a>
                </li>
                <li>
                  <a href="#">FQA</a>
                </li>
                <li>
                  <a href="#">Contact US</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <div className="footer-subscribe-widget">
              <h2 className="footer-single-widget__title">NEWSLETTERS</h2>
              <p className="footer-subscribe-widget__subtitle">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              {/* email subscription */}

              <input
                type="text"
                placeholder="Enter Your Email Address"
                required
                style={{ height: 45, marginBottom: "20px", width: "100%" }}
              />
              <br />
              <button className="lezada-button lezada-button--medium">
                SUBSCRIBE
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterHome;
