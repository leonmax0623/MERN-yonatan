import { Col, Container, Row } from "react-bootstrap";
import { IoIosCall, IoIosClock, IoIosMail, IoIosPin } from "react-icons/io";
import { ImageCtaContact } from "../../components/Cta";
import { LayoutAbout } from "../../components/Layout";
import {
  SectionTitleOne,
  SectionTitleTwo
} from "../../components/SectionTitle";

const Contact = () => {
  return (
    <LayoutAbout>
      {/* breadcrumb */}
      <ImageCtaContact />

      <div className="contact-page-content-wrapper space-mt--r130 space-mb--r130">
        <div className="contact-page-top-info space-mb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleTwo
                  title="Contact detail"
                  subtitle="COME HAVE A LOOK"
                />
              </Col>
            </Row>
            <Row className="space-mb-mobile-only--m50">
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosPin />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">ADDRESS</h3>
                    <p className="content">
                      1800 Abbot Kinney Blvd. Unit D &amp; E Venice
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosCall />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">CONTACT</h3>
                    <p className="content">
                      Mobile: (+88) – 1990 – 6886{" "}
                      <span>Hotline: 1800 – 1102</span>
                    </p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosMail />
                  </div>
                  <div className="icon-box__content">
                    <p className="content"> Mail: contact@lezadastore.com </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                  <div className="icon-box__icon">
                    <IoIosClock />
                  </div>
                  <div className="icon-box__content">
                    <h3 className="title">HOUR OF OPERATION</h3>
                    <p className="content">
                      Monday – Friday : 09:00 – 20:00
                      <span>Sunday &amp; Saturday: 10:30 – 22:00</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-page-form">
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitleOne title="Get in touch" />
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                <div className="lezada-form contact-form">
                  <form>
                    <Row>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="First Name *"
                          name="customerName"
                          id="customerName"
                          required
                        />
                      </Col>
                      <Col md={6} className="space-mb--40">
                        <input
                          type="email"
                          placeholder="Email *"
                          name="customerEmail"
                          id="customerEmail"
                          required
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="contactSubject"
                          id="contactSubject"
                        />
                      </Col>
                      <Col md={12} className="space-mb--40">
                        <textarea
                          cols={30}
                          rows={10}
                          placeholder="Message"
                          name="contactMessage"
                          id="contactMessage"
                          defaultValue={""}
                        />
                      </Col>
                      <Col md={12} className="text-center">
                        <button
                          type="submit"
                          value="submit"
                          id="submit"
                          className="lezada-button lezada-button--medium"
                        >
                          submit
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutAbout>
  );
};

export default Contact;
