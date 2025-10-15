import CountUp from "react-countup";
import { Col, Row } from "reactstrap";

const CounterSection = () => {

    const counterData = [
        {
            id: 1,
            icon: "/images/icon/sucessful.png",
            value: 5,
            suffix: "K",
            title: "Successful Admissions",
            duration: 2.5
        },
        {
            id: 2,
            icon: "/images/icon/partner.png",
            value: 100,
            suffix: "+",
            title: "Partner Universities",
            duration: 2
        },
        {
            id: 3,
            icon: "/images/icon/visa.png",
            value: 99,
            suffix: "%",
            title: "Client Satisfaction",
            duration: 2
        },
        {
            id: 4,
            icon: "/images/icon/experience.png",
            value: 10,
            suffix: "+",
            title: "Years Experience",
            duration: 2
        }
    ];

    return (
        <section className="counter-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="fact-counter">
                        <Row className="clearfix">
                            {counterData.map((item) => (
                                <Col key={item.id} lg="3" md="6" sm="12" className="column counter-column">
                                    <div className="inner ">
                                        <div className="icon education_icon mb-3">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text">
                                                    <CountUp end={item.value} duration={item.duration} />
                                                </span>
                                                <span>{item.suffix}</span>
                                            </div>
                                            <h4 className="counter-title mt-2">{item.title}</h4>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
