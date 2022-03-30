import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ImageCtaAbout } from "../../components/Cta";
import { LayoutAbout } from "../../components/Layout";
import { getProducts } from "../../lib/product";


const Home = ({ products }) => {
  return (
    <LayoutAbout>

      <ImageCtaAbout />

      <div className="d-none d-lg-flex" style={{ marginBottom: "70px" }}>
        <Col xl={9} lg={9} style={{ display: "flex", alignItems: 'center' }}>
          <Col xl={6} lg={6}>
            <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/about_2.png"
                }
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col xl={6} lg={6} style={{ display: "flex", alignItems: "center" }}>
            <div className="about-widget ">
              <h2 className="widget-title space-mb--25 fontStyleMain" style={{ textAlign: 'center' }}>Me and my diamonds will be your best friends...</h2>
              <p className="widget-content fontStyleDetail">
                Nice to meet you, my name is Jonathan.
              </p>
              <br />
              <p className="widget-content fontStyleDetailAbout">
                My connection to the world of jewelry in general and to diamonds in particular, began sometime with my release from the military, when I enrolled in a gemology course. Along with the in-depth study of diamond theory, their formation and how to polish them, the experience I gained as a gemological laboratory manager in the world of diamonds and gems and the service I did as a tenant in the Diamond Exchange, I realized this is the path I choose for life. For every man and woman, and I started designing the jewelry that would make dreams come true and expand hearts.
              </p>
            </div>
          </Col>
        </Col>
        <Col xl={3} lg={3} className="ml-auto d-none d-lg-flex" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_3.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </div>

      <div className="d-block d-lg-none" style={{ marginBottom: "70px" }}>
        <Col xl={9} lg={9}>
          <Col xl={6} lg={6} style={{ display: "flex", alignItems: "center" }}>
            <div className="about-widget ">
              <h2 className="widget-title space-mb--25 fontStyleMain">Me and my diamonds will be your best friends...</h2>
              <p className="widget-content fontStyleDetail">
                Nice to meet you, my name is Jonathan.
              </p>
              <br />
              <p className="widget-content fontStyleDetailAbout">
                My connection to the world of jewelry in general and to diamonds in particular, began sometime with my release from the military, when I enrolled in a gemology course. Along with the in-depth study of diamond theory, their formation and how to polish them, the experience I gained as a gemological laboratory manager in the world of diamonds and gems and the service I did as a tenant in the Diamond Exchange, I realized this is the path I choose for life. For every man and woman, and I started designing the jewelry that would make dreams come true and expand hearts.
              </p>
            </div>
          </Col>
        </Col>
        <Col xl={6} lg={6} className="d-flex d-lg-none">
          <div className="about-page-2-image" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_2.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </div>

      <div
        className="banner-cta space-mb--r130 bg-img d-flex d-lg-none"
        style={{
          display: "flex", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/about_mb_9.png"
            }")`
        }}
      >
        <div>
          <Col lg={12} xl={12} style={{ textAlign: "center" }}>
            <div className="banner-cta-content" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/about_5.png"
                }
                className="img-fluid"
                alt=""
                style={{ width: "35%" }}
              />
              <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                At the beginning of my career, after successfully completing my studies, I would rate diamonds and later, I was promoted to run the lab.
              </p>
            </div>
            <div className="banner-cta-content" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/about_6.png"
                }
                className="img-fluid"
                alt=""
                style={{ width: "35%" }}
              />
              <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                The highest quality raw materials, precise finishes, pure aesthetics and unique design - these are the values ​​I believe in, along with the best service to anyone who chooses me as part of the exciting moments of life.
              </p>
            </div>
            <div className="banner-cta-content" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/yonatan-images/about_7.png"
                }
                className="img-fluid"
                alt=""
                style={{ width: "35%" }}
              />
              <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                The materials I choose to work with are very carefully selected. The diamonds I inlay in my designs are of VS quality and above only. For me, every customer is a family - and I do not spare a family.
              </p>
            </div>
          </Col>
        </div>
      </div>

      <Row className="no-gutters d-none d-lg-flex" style={{ marginBottom: "100px" }}>
        <Col lg={12}>
          <div className="about-bg-content" style={{ paddingRight: "40%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "90px" }}>
            <h2 className="about-bg-content__title" style={{ fontFamily: "cargenregular", fontSize: "35px", textAlign: "left", color: "white" }}>
              Get to know the process from the first step...
            </h2>
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "black" }}>
              At the beginning of my career, after successfully completing my studies, I would rate diamonds and later, I was promoted to run the lab.
            </p>
            <br />
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "black" }}>
              After that, I worked as a sales manager in a reputable diamond firm, where I deepened my connection with the diamonds, got to know them about pits, saw the beauty inherent in each of them and their potential to become an inlaid piece of jewelry. Alongside this, I worked with merchants and diamond dealers and studied the field of production - I visited large factories, I was invited to meetings and saw how jewelry is made - from the choice of raw material, through the design and inlay to the production of the finished and glamorous product.
            </p>
            <br />
            <p className="about-bg-content__text" style={{ fontFamily: "cargenregular", fontSize: "15px", textAlign: "left", color: "black" }}>
              When I designed my first piece of jewelry, the one I invested in all day long, and saw how it turns into an engagement ring that connects two individuals in one moment to be a couple - I got excited. I realized I had done something good and decided that there I would invest all my heart and soul. To this day, hundreds of couples wear the rings I designed for them as a symbol of true, stable and unique love, just like the strongest diamond in nature.
            </p>
          </div>
          <div className="about-bg-background" style={{ position: "absolute", top: "-65px", width: "450px", left: "65%" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_4.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
        </Col>
      </Row>

      <Row className="d-none d-lg-flex" style={{ padding: "50px", display: "flex" }}>
        <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/yonatan-images/about_5.png"
            }
            className="img-fluid"
            alt=""
            style={{ width: "75%" }}
          />
        </Col>
        <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/yonatan-images/about_6.png"
            }
            className="img-fluid"
            alt=""
            style={{ width: "75%" }}
          />
        </Col>
        <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/yonatan-images/about_7.png"
            }
            className="img-fluid"
            alt=""
            style={{ width: "75%" }}
          />
        </Col>
      </Row>

      <h2 className="widget-title space-mb--25 d-none d-lg-block" style={{ fontFamily: "cargenregular", textAlign: "center", padding: "60px", fontSize: "35px", lineHeight: "inherit" }}>Do not compromise on the most sparkling diamond</h2>

      <h2 className="widget-title space-mb--25 d-flex d-lg-none" style={{ fontFamily: "cargenregular", textAlign: "center", fontSize: "30px", lineHeight: "inherit" }}>Do not compromise on the most sparkling diamond</h2>

      <Row className="d-none d-lg-flex" style={{ marginBottom: "120px", paddingLeft: "100px", paddingRight: "100px" }}>
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "60px", paddingRight: "60px", display: "flex", justifyContent: "center" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_8.png"
              }
              className="img-fluid"
              alt=""
              style={{ width: "75%" }}
            />
          </div>
        </Col>
        <Col xl={8} lg={8} style={{ display: "flex", paddingLeft: "30px", paddingRight: "30px" }}>
          <div className="about-widget ">
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              The highest quality raw materials, precise finishes, pure aesthetics and unique design - these are the values ​​I believe in, along with the best service to anyone who chooses me as part of the exciting moments of life.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              The materials I choose to work with are very carefully selected. The diamonds I inlay in my designs are of VS quality and above only. For me, every customer is a family - and I do not spare a family.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              My customers are welcome to contact me at any stage - polish and polish the jewelry, reduce and enlarge as needed, upgrade and repair.
            </p>
            <br />
          </div>
        </Col>
      </Row>

      <div className="d-block d-lg-none">
        <Col xl={4} lg={4} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image" style={{ paddingLeft: "60px", paddingRight: "60px", display: "flex", justifyContent: "center" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_8.png"
              }
              className="img-fluid"
              alt=""
              style={{ width: "85%" }}
            />
          </div>
        </Col>
        <Col xl={8} lg={8} style={{ display: "flex", textAlign: 'center' }}>
          <div className="about-widget ">
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              The highest quality raw materials, precise finishes, pure aesthetics and unique design - these are the values ​​I believe in, along with the best service to anyone who chooses me as part of the exciting moments of life.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              The materials I choose to work with are very carefully selected. The diamonds I inlay in my designs are of VS quality and above only. For me, every customer is a family - and I do not spare a family.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              My customers are welcome to contact me at any stage - polish and polish the jewelry, reduce and enlarge as needed, upgrade and repair.
            </p>
            <br />
          </div>
        </Col>
      </div>

      <div
        className="banner-cta space-mb--r130 bg-img d-none d-lg-flex"
        style={{
          height: "500px", padding: "80px 0px", display: "flex", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/about_9.png"
            }")`
        }}
      >
        <Container className="wide">
          <Row>
            <Col lg={12} xl={12} style={{ paddingLeft: "130px", paddingRight: "130px", textAlign: "center" }}>
              <div className="banner-cta-content">
                <h2 className="banner-cta-content__subtitle" style={{ fontFamily: "cargenregular", fontSize: "2.5rem", color: "white" }}>
                  Every customer is an ambassador...
                </h2>
                <br />
                <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                  For me and the team that works with me, every customer is a world and its fullness and therefore, I give him the maximum attention and treatment until we design the jewel he dreamed of.
                </p>
                <br />
                <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                  My first fingerprint for personally designed jewelry happened when Oren Asido, a famous friend and chef, asked me to design a chef's knife necklace inspired by his tattoo. Beyond the highest quality raw materials, it was important to me to invest in the design - to have the most special necklace, one that no one else has.
                </p>
                <br />
                <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", color: "white" }}>
                  From there, more and more customers sought to fulfill a dream and turn their tattoo into a jewel. Since then, we have created jewelry for many big names in the industry such as Naifa Molla, Yonit Zuckerman, Gal Gvaram, Eyal Golan and Daniel Greenberg and more - each of our customers, famous or not, is an ambassador who walks with our work, in which I and the team invested all my heart, and distributes The Gospel. Therefore, in every piece of jewelry and every customer, we give the soul.
                </p>
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Row className="d-none d-lg-flex" style={{ marginBottom: "120px", paddingLeft: "100px", paddingRight: "100px" }}>
        <Col xl={6} lg={6} className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ paddingLeft: "60px", paddingRight: "60px", display: "flex", justifyContent: "center" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_10.png"
              }
              className="img-fluid"
              alt=""
              style={{ width: "75%" }}
            />
          </div>
        </Col>
        <Col xl={6} lg={6} style={{ display: "flex", paddingLeft: "30px", paddingRight: "30px" }}>
          <div className="about-widget ">
            <h2 className="banner-cta-content__subtitle" style={{ fontFamily: "cargenregular", fontSize: "2.5rem", color: "black", marginBottom: "20px", marginTop: "0px" }}>
              Design dreams together
            </h2>
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              This was just the beginning, the turnaround in the world of personal design, which was for me and my team the tool with which we can fulfill dreams for each and every client.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              In the first meeting we will receive impressions and understand the idea with which the client came. In the second stage, we will create a model with the most advanced equipment and print it on a special 3D printer. From there, we will build the unique mold for the customer and cast the pure gold. After a few days, we will perform the goldsmithing work - polishing, inlaying, engraving, all in accordance with the client's personal vision. At the end of the in-depth process, the customer is exposed to a piece of jewelry that has only one in the entire world.

            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px" }}>
              We accompany clients hand in hand, from the design of the initial sketch on the page to the moment they see the jewel in their own hands, through sparkling eyes.
            </p>
            <br />
          </div>
        </Col>
      </Row>

      <div className="d-block d-lg-none">
        <Col xl={6} lg={6} className="ml-auto">
          <div className="about-page-2-image space-mb-mobile-only--50" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/yonatan-images/about_10.png"
              }
              className="img-fluid"
              alt=""
              style={{ width: "90%" }}
            />
          </div>
        </Col>
        <Col xl={6} lg={6} style={{ display: "flex", backgroundColor: '#d5e1df' }}>
          <div className="about-widget">
            <h2 className="banner-cta-content__subtitle fontStyleMain" style={{ marginBottom: '30px' }}>
              Design dreams together
            </h2>
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", textAlign: 'center' }}>
              This was just the beginning, the turnaround in the world of personal design, which was for me and my team the tool with which we can fulfill dreams for each and every client.
            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", textAlign: 'center' }}>
              In the first meeting we will receive impressions and understand the idea with which the client came. In the second stage, we will create a model with the most advanced equipment and print it on a special 3D printer. From there, we will build the unique mold for the customer and cast the pure gold. After a few days, we will perform the goldsmithing work - polishing, inlaying, engraving, all in accordance with the client's personal vision. At the end of the in-depth process, the customer is exposed to a piece of jewelry that has only one in the entire world.

            </p>
            <br />
            <p className="widget-content" style={{ fontFamily: "sailecmedium", fontSize: "15px", textAlign: 'center' }}>
              We accompany clients hand in hand, from the design of the initial sketch on the page to the moment they see the jewel in their own hands, through sparkling eyes.
            </p>
            <br />
          </div>
        </Col>
      </div>

    </LayoutAbout>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "jewelry", "popular", 9)
  };
};

export default connect(mapStateToProps)(Home);
