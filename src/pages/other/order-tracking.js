import { Col, Container, Row } from "react-bootstrap";
import { ImageCtaSpecial } from "../../components/Cta";
import { LayoutHome } from "../../components/Layout";

const OrderTracking = () => {
  return (
    <LayoutHome>
      {/* breadcrumb */}
      <ImageCtaSpecial />

      <div className="d-none d-lg-flex" style={{ marginBottom: "120px", paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }}>
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/special_2.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
        <Col xl={8} lg={8} style={{ display: "flex", paddingRight: "60px" }}>
          <div className="about-widget ">
            <h2 className="widget-title space-mb--25" style={{ fontFamily: "cargenregular", fontSize: "35px", lineHeight: "inherit" }}>The best time to make dreams come true - is now</h2>
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              One of the many sexual qualities that jewelry has is to tell a story…
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              The clients who come to me bring with them unique ideas to design a piece of jewelry with a deep meaning embedded within it.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              I get excited every time again - to meet them face to face, listen to their story, realize it in the form of their original piece of jewelry, one that no one else has and see the smiles stretch when they first see the piece of jewelry.
            </p>
          </div>
        </Col>
      </div>

      <div className="d-block d-lg-none" style={{ marginBottom: "70px", alignItems: "center" }}>
        <Col xl={8} lg={8} style={{ display: "flex" }}>
          <div className="about-widget ">
            <h2 className="widget-title space-mb--25 fontStyleMain">The best time to make dreams come true - is now</h2>
            <p className="widget-content fontStyleDetail">
              One of the many sexual qualities that jewelry has is to tell a story…
            </p>
            <br />
            <p className="widget-content fontStyleDetail">
              The clients who come to me bring with them unique ideas to design a piece of jewelry with a deep meaning embedded within it.
            </p>
            <br />
            <p className="widget-content fontStyleDetail" style={{ marginBottom: '30px' }}>
              I get excited every time again - to meet them face to face, listen to their story, realize it in the form of their original piece of jewelry, one that no one else has and see the smiles stretch when they first see the piece of jewelry.
            </p>
          </div>
        </Col>
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center", padding: '0px 70px' }}>
          <div className="about-page-2-image">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/special_2.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </div>

      <div className="d-block d-lg-none" style={{ paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }}>
        <Col xl={8} lg={8} style={{ display: "flex", textAlign: "right" }}>
          <div className="about-widget ">
            <h2 className="widget-title space-mb--25 fontStyleMain">Unforgettable moments</h2>
            <p className="widget-content fontStyleDetail">
              Each and every one of us experiences unforgettable moments - the marriage proposal, the wedding day, her birth, the day he ascended to the mitzvah… and there are unique moments, ones that symbolize for us a powerful and emotional memory.
            </p>
            <br />
            <p className="widget-content fontStyleDetail">
              I turn all those moments into original jewelry of your choice, in your personal design, with the help of the highest quality raw materials - pure gold in a wide range of colors, rare gems and diamonds of VS quality and above, so that your jewelry will be perfect.
            </p>
            <br />
            <p className="widget-content fontStyleDetail" style={{ marginBottom: '30px' }}>
              The result - a prestigious and impressive piece of jewelry, which, beyond meticulous aesthetics and stunning beauty, contains an exciting moment that you will never forget…
            </p>
          </div>
        </Col>
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center", padding: '0px 40px' }}>
          <div className="about-page-2-image">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/special_3.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </div >

      <div className="d-none d-lg-flex" style={{ marginBottom: "120px", paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }}>
        <Col xl={8} lg={8} style={{ display: "flex", paddingLeft: "60px", textAlign: "right" }}>
          <div className="about-widget ">
            <h2 className="widget-title space-mb--25 fontStyleMain">Unforgettable moments</h2>
            <p className="widget-content fontStyleDetail">
              Each and every one of us experiences unforgettable moments - the marriage proposal, the wedding day, her birth, the day he ascended to the mitzvah… and there are unique moments, ones that symbolize for us a powerful and emotional memory.
            </p>
            <br />
            <p className="widget-content fontStyleDetail">
              I turn all those moments into original jewelry of your choice, in your personal design, with the help of the highest quality raw materials - pure gold in a wide range of colors, rare gems and diamonds of VS quality and above, so that your jewelry will be perfect.
            </p>
            <br />
            <p className="widget-content fontStyleDetail">
              The result - a prestigious and impressive piece of jewelry, which, beyond meticulous aesthetics and stunning beauty, contains an exciting moment that you will never forget…
            </p>
          </div>
        </Col>
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/special_3.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </div>

      <div
        className="banner-cta space-mb--r130 bg-img d-none d-lg-flex"
        style={{
          height: "650px", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/special_4.png"
            }")`
        }}
      >
        <Container className="wide">
          <div>
            <Col lg={12} xl={12}>
              <div className="banner-cta-content">
                <h2 className="banner-cta-content__subtitle" style={{ fontFamily: "cargenregular", fontSize: "2.5rem", color: "black", textAlign: "center" }}>
                  Quality under warranty
                </h2>
              </div>
            </Col>
          </div>
        </Container>
      </div>

      <div className="order-tracking-area space-mt--r130 space-mb--r130 d-block d-lg-none">
        <Container>
          <div>
            <Col lg={6} md={10} className="ml-auto mr-auto">
              <div className="order-tracking-box">
                <h2 className="about-bg-content__title" style={{ fontFamily: "cargenregular", fontSize: "35px", textAlign: "center", color: "black" }}>
                  Your Special Orders
                </h2>
                <div className="lezada-form order-tracking-form">
                  <form>
                    <div>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">First Name</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your first name"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Last Name</label>
                        <input
                          type="text"
                          id="orderEmail"
                          placeholder="Enter your last name"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">Cellphone Number</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your cellphone number"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Email</label>
                        <input
                          type="text"
                          id="orderEmail"
                          placeholder="Enter your email"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">Topic</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your topic"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Message</label>
                        <textarea
                          cols={30}
                          rows={10}
                          placeholder="Write down your message"
                          name="contactMessage"
                          id="contactMessage"
                          defaultValue={""}
                        />
                      </Col>
                      <Col
                        lg={12}
                        className="col-lg-12 text-center space-mt--40"
                      >
                        <button className="lezada-button lezada-button--medium order-tracking-button">
                          Special Order
                        </button>
                      </Col>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>

      <div className="d-none d-lg-block" style={{ padding: "0px 60px 0px 60px", textAlign: "center" }}>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "1.1rem", lineHeight: '25px' }}>
          Every piece of jewelry that passes between my hands, comes to light only after it is perfect. In life as in life, things change - but my loyalty to customers remains stable.
        </p>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "1.1rem", lineHeight: '25px' }}>
          My studio is a home - to fix, upgrade, reduce, enlarge, add, innovate - even after years, it is important to me that the jewelry that creates my name, will look like it came out of the jeweler yesterday.
        </p>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "1.1rem", lineHeight: '25px' }}>
          But most of all - that my customers will be smiling and satisfied every time they look at the piece of jewelry they are wearing, that they will look at it and be filled with love.
        </p>
      </div>

      <div className="d-flex d-lg-none" style={{
        padding: "0px 60px 0px 60px", textAlign: "center", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '400px', backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/special_mb_4.png"
          }")`
      }}>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", lineHeight: '20px', color: '#4b5758' }}>
          Every piece of jewelry that passes between my hands, comes to light only after it is perfect. In life as in life, things change - but my loyalty to customers remains stable.
        </p>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", lineHeight: '20px', color: '#4b5758', }}>
          My studio is a home - to fix, upgrade, reduce, enlarge, add, innovate - even after years, it is important to me that the jewelry that creates my name, will look like it came out of the jeweler yesterday.
        </p>
        <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", lineHeight: '20px', color: '#4b5758' }}>
          But most of all - that my customers will be smiling and satisfied every time they look at the piece of jewelry they are wearing, that they will look at it and be filled with love.
        </p>
      </div>

      <Row className="no-gutters d-none d-lg-flex" style={{ marginBottom: "100px", marginTop: "100px" }}>
        <Col lg={12}>
          <div className="about-bg-content" style={{ paddingRight: "40%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "90px" }}>
            <h2 className="about-bg-content__title" style={{ fontFamily: "cargenregular", fontSize: "35px", textAlign: "left", color: "white" }}>
              Turns every challenge into a winning diamond
            </h2>
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "white" }}>
              I have always been a man of people. There is nothing that makes me happier than to immortalize time and time again, the most magical and exciting moments of life.
            </p>
            <br />
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "white" }}>
              I am available for any challenge and dream that my clients pose to me - from the most classic ideas to the most complex and crazy, ones you never dreamed could really come true.
            </p>
            <br />
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "white" }}>
              There is nothing that stands in the way of desire, and when it comes to my desire - then the client's smile, the excited look, the sparkling eyes, these are my goals and when that happens, I realize I have succeeded big time.
            </p>
          </div>
          <div className="about-bg-background" style={{ position: "absolute", top: "-65px", width: "450px", left: "66%" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/special_5.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </Row>

      <div className="order-tracking-area space-mt--r130 space-mb--r130 d-none d-lg-flex">
        <Container>
          <Row>
            <Col lg={6} md={10} className="ml-auto mr-auto">
              <div className="order-tracking-box">
                <h2 className="about-bg-content__title" style={{ fontFamily: "cargenregular", fontSize: "35px", textAlign: "center", color: "black" }}>
                  Your Special Orders
                </h2>
                <div className="lezada-form order-tracking-form">
                  <form>
                    <Row>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">First Name</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your first name"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Last Name</label>
                        <input
                          type="text"
                          id="orderEmail"
                          placeholder="Enter your last name"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">Cellphone Number</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your cellphone number"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Email</label>
                        <input
                          type="text"
                          id="orderEmail"
                          placeholder="Enter your email"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">Topic</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Enter your topic"
                        />
                      </Col>
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderEmail">Message</label>
                        <textarea
                          cols={30}
                          rows={10}
                          placeholder="Write down your message"
                          name="contactMessage"
                          id="contactMessage"
                          defaultValue={""}
                        />
                      </Col>
                      <Col
                        lg={12}
                        className="col-lg-12 text-center space-mt--40"
                      >
                        <button className="lezada-button lezada-button--medium order-tracking-button">
                          Special Order
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutHome >
  );
};

export default OrderTracking;
