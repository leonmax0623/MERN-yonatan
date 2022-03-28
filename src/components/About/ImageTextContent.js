import { Col, Container, Row } from "react-bootstrap";

const ImageTextContent = () => {
  return (
    <div className="about-text-bg-area space-mb--r130">
      <Container className="wide">
        <Row className="no-gutters">
          <Col lg={6}>
            <div
              className="about-bg-background"
              style={{
                backgroundImage: `url("${process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/home_4.png"
                  }")`
              }}
            ></div>
          </Col>
          <Col lg={6}>
            <div className="about-bg-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="about-bg-content__text fontStyleSub">
                Decorate yourself with your moving memories
              </p>
              <h2 className="about-bg-content__title fontStyleMain">
                Diamonds are a woman's best friends, and mine too.
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageTextContent;
