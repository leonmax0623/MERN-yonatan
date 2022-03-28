import { Col, Container, Row } from "react-bootstrap";

const ImageCtaFirst = ({ spaceBottomClass }) => {
  return (
    <div className="about-content space-mb--r100">
      <Container className="wide">
        <Row>
          <Col xl={6} lg={6} style={{ display: "flex", alignItems: "center" }}>
            <div className="about-page-2-image space-mb-mobile-only--50">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/home_2.png"
                }
                className="img-fluid d-none d-lg-flex"
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/home_mb_2.png"
                }
                className="img-fluid d-lg-none d-flex"
                alt=""
              />
            </div>
          </Col>
          <Col xl={6} lg={6} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
            <div className="about-widget ">
              <h2 className="widget-title space-mb--25 fontStyleMain">Touch Happiness and Diamond</h2>
              <p className="widget-content fontStyleDetail">
                There are moments in life that are etched deep in our hearts - today they can be published, as a personal and prestigious piece of jewelry that has an aesthetic and emotional meaning.
              </p>
              <br />
              <p className="widget-content fontStyleDetail">
                A jewel that no one else has, one that tells your special story, that surpasses all imagination - it's time to make a dream come true and make the moving memory a reality.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaFirst;
