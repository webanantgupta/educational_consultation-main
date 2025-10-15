import React from 'react'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import { Col, Row } from 'reactstrap'

const OurStory = () => {
    return (
        <>
            <PageBreadcrumb title="Our Story" />
            <section className="about-section">
                <div className="auto-container">
                    <Row className="row clearfix">
                        <Col lg={7} md={12} sm={12} className="content-column">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <div className="icon education_icon">
                                        <img src="/images/icon/education.png" alt="" />
                                    </div>
                                    <div className="title mb-2">Our Story</div>
                                    <h5 className="text-dark">
                                        A belief in students, in possibilities, and in the power of the right guidance — that’s where Candid began, and what drives us every day.
                                    </h5>
                                    <div className="text">
                                        Candid began with a clear mission: to guide students towards a brighter, global future through expert education consulting. Founded by passionate professionals, we specialize in helping students choose the right university, secure scholarships, and navigate the visa process with confidence.

                                        Over the years, we've supported thousands in turning their study abroad dreams into reality. What makes us different is our personalized approach — we listen, understand your goals, and offer clear, step-by-step support tailored just for you.

                                        From shortlisting universities to career guidance, we’re here for every step of your journey. At Candid, your future isn't just planned — it's empowered.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="images-column pt-5 mt-5">
                            <div className="inner-column">
                                <div
                                    className="icon-layer-one"
                                    style={{ backgroundImage: "url(images/icons/pattern-4.png)" }}
                                />
                                <div className="image">
                                    <img src="images/about_2.jpg" alt="" />
                                </div>
                                <div className="image-two">
                                    <img src="images/about1.jpg" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default OurStory
