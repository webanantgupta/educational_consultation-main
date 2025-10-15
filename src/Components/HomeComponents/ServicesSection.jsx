import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const ServicesSection = () => {
    const services = [
        {
            title: "Internship - volunteer",
            image: "images/1.png",
            icon: "internship.png"
        },
        {
            title: "Internship - Paid",
            image: "images/2.png",
            icon: "paid.png"
        },
        {
            title: "Study Abroad",
            image: "images/3.png",
            icon: "study.png"
        },
        {
            title: "Training Program",
            image: "images/4.png",
            icon: "training.png"
        },
        {
            title: "Sponsored Employment",
            image: "images/5.png",
            icon: "sponsored.png"
        },
        {
            title: "Research Projects",
            image: "images/6.png",
            icon: "research.png"
        },
    ];

    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="icon education_icon">
                            <img src="/images/icon/education.png" alt="" />
                        </div>
                        <div className="title">provide services</div>
                        <h2>We serve best service</h2>
                    </div>
                    <Row className=" clearfix">
                        {services.map((service, index) => (
                            <Col lg={4} md={6} sm={12} className="service-block" key={index}>
                                <div className="inner-box wow zoomIn">
                                    <div className="image">
                                        <img src={service.image} alt={service.title} />
                                        <div><img src={`/images/icon/${service.icon}`} className='icon' alt="" /></div>
                                    </div>
                                    <div className="lower-content">
                                        <h4>{service.title}</h4>
                                    </div>
                                    <div className="overlay-box d-none">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <h5>
                                                    <a href="#">More Info</a>
                                                </h5>
                                                <div className="text">
                                                    Duis sed odio sit amet nibh vulputate cursus accumsan ipsuy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="btns-box text-center">
                        <Link to="#" className="theme-btn btn-style-one">
                            <span className="txt">view all servicees</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesSection
