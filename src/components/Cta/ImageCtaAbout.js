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
              <h2 className="banner-cta-content__subtitle" style={{ fontFamily: "cargenregular", fontSize: "45px", color: "black", textAlign: "right" }}>
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
