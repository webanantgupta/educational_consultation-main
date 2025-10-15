import { Col, Row } from "reactstrap"

const VisionSection = () => {

    return (
        <>
            <section className="vision-section mt-5">
                <div className="side-image">
                    <img src="https://img.freepik.com/free-photo/personal-shopper-office-with-client_23-2148929566.jpg?semt=ais_hybrid&w=740" alt="" />
                </div>
                <div className="auto-container">
                    <Row className="clearfix">
                        <Col lg={7} md={12} sm={12} className="title-column">
                            <div className="inner-column">
                                <div className="sec-title mb-0">
                                    <div className="title">Our Vision</div>
                                    <h2> Your trusted global <br />  education partner  </h2>
                                    <div className="text ">
                                        <p>We bridge the gap between aspirations and opportunities through ethical, transparent, and student-focused counseling.
                                            From internships to migration support, Candid Agents is your trusted partner for studying, working, and settling abroad.</p>   </div>
                                </div>
                                <div className="blocks-outer">
                                    <div className="vision-block">
                                        <div className="block-inner">
                                            <div className="vision-image">
                                                <img src="https://5.imimg.com/data5/DJ/TI/GLADMIN-49884082/expert-counseling-service-500x500.png" alt="" />
                                            </div>
                                            <h4> <a href="#"> Expert Counseling Support  </a> </h4>
                                            <div className="text">
                                                <p>Get one-on-one support from certified education counselors to make the best academic decisions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vision-block">
                                        <div className="block-inner">
                                            <div className="vision-image">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS511PtbPCDCUvX8xiQOm8mttie_jueqNPlbHeQLfxE2D55lbJzteZtFSYvOYxcVmyb1hI&usqp=CAU" alt="" />
                                            </div>
                                            <h4><a href="#"> Tailored Visa Guidance</a></h4>
                                            <div className="text">
                                                <p>Receive clear, personalized support for student visas, skilled migration, and more — all handled with care and legal expertise.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default VisionSection
