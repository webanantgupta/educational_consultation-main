import ContactForm from '../Components/ContactForm'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import { Col, Row } from 'reactstrap'

const ContactUs = () => {
    document.title = "Contact US"
    return (
        <>
            <PageBreadcrumb title="Contact Us" />
            <section className="contact-info-section">
                <div className="auto-container">
                    <Row className=" clearfix">

                        <Col lg={6} md={12} sm={12} className="info-column">
                            <div className="inner-column">
                                <h4>Australia</h4>
                                <ul className="list-style-three">
                                    <li>
                                        <span className="icon flaticon-maps-and-flags" />
                                        123 King Street
                                        Newtown, NSW 2042
                                        Australia


                                    </li>
                                    <li>
                                        <span className="icon flaticon-call-2" />
                                        <a href="tel:+61 412 345 678">+61 412 345 678</a>
                                    </li>
                                    <li>
                                        <span className="icon flaticon-email-2" />
                                        <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="info-column">
                            <div className="inner-column">
                                <h4>United States</h4>
                                <ul className="list-style-three">
                                    <li>
                                        <span className="icon flaticon-maps-and-flags" />
                                        742 Evergreen Terrace
                                        Springfield, IL 62704

                                    </li>
                                    <li>
                                        <span className="icon flaticon-call-2" />
                                        <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
                                    </li>
                                    <li>
                                        <span className="icon flaticon-email-2" />
                                        <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <ContactForm />
            <section className="contact-map-section">
                <div className="auto-container">
                    {/* Map Outer */}
                    <div className="map-outer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.483560184714!2d80.93647347516746!3d26.888144461146457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999574966b00d11%3A0x877ecada07e90d24!2sOneBigBit%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1753782163291!5m2!1sen!2sin" width="100%" height="560px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs
