import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from "reactstrap";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className="back-to-top scroll-to-target show-back-to-top" onClick={scrollToTop} >TOP</div>
      <footer
        className="main-footer"
        style={{ backgroundImage: "url(https://www.pba.edu/wp-content/uploads/2023/06/academics-study-abroad-diverse-international-students-learning-pba-palm-beach-atlantic-university-1600x900-1.jpg)" }}
      >
        <div className="auto-container">
          <div className="widgets-section">
            <Row className="clearfix">
              <Col lg="6" md="12" sm="12" className="big-column">
                <Row className="clearfix">
                  <Col lg="7" md="6" sm="12" className="footer-column">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <Link to="/"> 
                          <div className="icon education_icon py-3 d-flex justify-content">
                            {/* <img src="/images/icon/education.png" alt="" />&nbsp;<h2 className='text-light'>Candid</h2> */}
                            <img src='/images/icon/CandidLogo.png'/>
                          </div>
                          {/* <img src="images/footer-logo.png" alt="Logo" /> */}
                        </Link>
                      </div>
                      <div className="text">
                       
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum doloribus soluta necessitatibus tempora asperiores provident, commodi aspernatur, alias deleniti quo aperiam consequatur minus quia reprehenderit architecto, incidunt ratione nam.
                      </div>
                      <ul className="social-icons">
                        <li><Link to="/"><span className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/"><span className="fab fa-instagram" /></Link></li>
                        <li><Link to="/"><span className="fab fa-twitter" /></Link></li>
                        <li><Link to="/"><span className="fab fa-skype" /></Link></li>
                        <li><Link to="/"><span className="fab fa-linkedin" /></Link></li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg="5" md="6" sm="12" className="footer-column">
                    <div className="footer-widget links-widget">
                      <div className="footer-title clearfix">
                        <h5>Useful Links</h5>
                        <div className="separator" />
                      </div>
                      <ul className="footer-list">
                        <li><Link onClick={scrollToTop} to="/our_story">Our Story</Link></li>
                        <li><Link onClick={scrollToTop} to="/study-australia">Study Visa</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Voluntary Internships</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Training Program</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Paid Consultation</Link></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg="6" md="12" sm="12" className="big-column">
                <Row className="clearfix">
                  <Col lg="6" md="6" sm="12" className="footer-column">
                    <div className="footer-widget news-widget">
                      <div className="footer-title clearfix">
                        <h5>Services</h5>
                        <div className="separator" />
                      </div>
                      <ul className="footer-list">
                        <li><Link onClick={scrollToTop} to="/">Consultation</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Review Appeals</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Internships</Link></li>
                        <li><Link onClick={scrollToTop} to="/">Traning Programs</Link></li>
                        <li><Link onClick={scrollToTop} to="/workvisa_general_skilled">General Skilled Migration</Link></li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg="6" md="6" sm="12" className="footer-column">
                    <div className="footer-widget contact-widget">
                      <div className="footer-title clearfix">
                        <h5>Contact Us</h5>
                        <div className="separator" />
                      </div>
                      <ul className="contact-list">
                        <li>
                          <span className="icon flaticon-placeholder" />
                          <Link to="https://maps.app.goo.gl/2b8o1A7Un9Loe6hr8" target='_blank'>
                            <p>C-25, Aliganj, Lucknow - 226024, Uttar Pradesh, India.</p>
                          </Link>
                        </li>
                        <li>
                          <span className="icon flaticon-call" />
                          <Link to="tel:+999999999">999999999</Link>
                        </li>
                        <br />
                        <li>
                          <span className="icon flaticon-message" />
                          <Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">
              Copyright © 2025 Candid | All Rights Reserved  |  Powered By -  <Link to="https://onebigbit.com/" target='_blank' className='text-light'>  Onebigbit Technologies Private Limited</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
