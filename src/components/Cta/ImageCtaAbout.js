import { Col, Container, Row } from "react-bootstrap";

const ImageCtaAbout = () => {
  return (
    <div
      className="banner-cta space-mb--r130 bg-img"
      style={{
        height: "650px", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/about_1.png"
          }")`
      }}
    >
      <Container className="wide">
        <Row>
          <Col lg={12} xl={12}>
            <div className="banner-cta-content">
              <h2 className="banner-cta-content__subtitle d-none d-lg-block" style={{ fontFamily: "cargenregular", fontSize: "2.5rem", color: "black", textAlign: "right", marginTop: '170px' }}>
                ABOUT YONATAN
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaAbout;
