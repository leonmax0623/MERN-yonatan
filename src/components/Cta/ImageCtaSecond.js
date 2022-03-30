import { Col, Container, Row } from "react-bootstrap";

const ImageCtaSecond = ({ spaceBottomClass }) => {
  return (
    <div className="about-content space-mb--r100">
      <Container className="wide">
        <Row>
          <Col xl={6} lg={6} className="mr-auto" style={{ display: "flex", alignItems: "center" }}>
            <div className="about-widget ">
              <div className="about-page-2-image space-mb-mobile-only--50">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/yonatan-images/home_3.png"
                  }
                  className="img-fluid d-flex d-lg-none"
                  alt=""
                />
              </div>
              <h2 className="widget-title space-mb--25 fontStyleMain">Nice to meet you</h2>
              <h2 className="widget-title space-mb--25 fontStyleMain">My name is Jonathan</h2>
              <p className="widget-content fontStyleDetail">
                My connection to the world of jewelry in general and to diamonds in particular, began years ago, when I studied in depth the world of diamonds in a gemology course. Since then, I have gained experience as a lab manager in the diamond and gemstone trade, and I own an office on the Diamond Exchange and a jewelry designer. I realized that these moments when my clients are first exposed to their personal jewel, with sparkling eyes and a huge smile, are the moments that make me get up every exciting morning for another day of work.
              </p>
              <br />
              <p className="widget-content fontStyleDetail">
                With my huge love and appreciation for the raw materials, and with the desire to give every man and woman the right to adorn themselves with diamonds - I chose the path to my life as a jewelry designer and diamond maker who fulfills glittering dreams.
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6} style={{ display: "flex", alignItems: "center" }}>
            <div className="about-page-2-image space-mb-mobile-only--50">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/home_3.png"
                }
                className="img-fluid d-none d-lg-flex"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaSecond;
