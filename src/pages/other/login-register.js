import Router from 'next/router'
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { ImageCtaAuth } from "../../components/Cta";
import { LayoutAbout } from "../../components/Layout";
import API from '../../api';

const LoginRegister = () => {
  const { addToast } = useToasts();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    API.post('/auth/login', { email, password })
      .then(response => {
        console.log('response', response);
        Router.push('/');
        // addToast("Successfully Logged In", { appearance: "success", autoDismiss: true });
      })
      .catch(error => {
        console.log('error', error.response);
        addToast(error.response.data.description, { appearance: "error", autoDismiss: true });
      });
  }

  const handleRegister = (event) => {
    event.preventDefault();
    
    if (regPassword !== regConfirmPassword) {
      addToast("Password confirmation is invalid", { appearance: "error", autoDismiss: true });
      return;
    }

    API.post('/auth/register', { 
        email: regEmail, 
        password: regPassword
      })
      .then(response => {
        console.log('response', response);
        addToast("Successfully Registered", { appearance: "success", autoDismiss: true });
      })
      .catch(error => {
        console.log('error', error.response);
        addToast(error.response.data.description, { appearance: "error", autoDismiss: true });
      });
  }

  return (
    <LayoutAbout>

      <ImageCtaAuth />

      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form onSubmit={handleLogin}>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Login</h2>
                        <p>Great to have you back!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="text"
                        placeholder="Email address"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <button type="submit" className="lezada-button lezada-button--medium">
                        login
                      </button>
                    </Col>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form onSubmit={handleRegister}>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input 
                        type="text" 
                        id="regEmail" 
                        required 
                        value={regEmail}
                        onChange={e => setRegEmail(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regPassword">
                        Password <span className="required">*</span>{" "}
                      </label>
                      <input 
                        type="password" 
                        id="regPassword" 
                        required 
                        value={regPassword}
                        onChange={e => setRegPassword(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regConfirmPassword">
                        Confirm Password <span className="required">*</span>{" "}
                      </label>
                      <input 
                        type="password" 
                        id="regConfirmPassword" 
                        required 
                        value={regConfirmPassword}
                        onChange={e => setRegConfirmPassword(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="text-center">
                      <button type="submit" className="lezada-button lezada-button--medium">
                        register
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutAbout>
  );
};

export default LoginRegister;
