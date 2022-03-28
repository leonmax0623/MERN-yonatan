import { Col, Container, Row } from "react-bootstrap";

const ImageCtaThird = () => {
  return (
    <div
      className="banner-cta space-mb--r130 bg-img"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/home_5.png"
          }")`
      }}
    >
      <Container className="wide">
        <Row>
          <Col lg={7} xl={6}>
            <div className="banner-cta-content">
              <h2 className="banner-cta-content__subtitle fontStyleMain">
                Jewelry that no one else has
              </h2>
              <p className="fontStyleDetail">
                I am excited every time to respond to the challenges and dreams of my clients - let your imagination run wild, and know that the sky is not the limit either, every dream can come true as the exact jewel for you.
              </p>
              <p className="fontStyleDetail">
                When I see the smile stretched across the client's face, when he found exactly what he was looking for in our spectacular collection of engagement rings, when they call to tell me she said 'yes', when she shares with me that she first saw him shed a tear - I know I succeeded.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaThird;
