import React, { useState } from 'react'

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First one open by default

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const faqItems = [
        {
            question: "Which countries do you help with?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias quaerat expedita. Adipisci, nesciunt vel! Consequuntur necessitatibus...",
        },
        {
            question: "Can I get a scholarship?",
            answer:
                "Duis sed odio sit amet nibh vulputate cursus accumsan ipsuy veli Nam nec tellus a odio ti tora torquperauris ine...",
        },
        {
            question: "What if I have a low score?",
            answer:
                "Duis sed odio sit amet nibh vulputate cursus accumsan ipsuy veli Nam nec tellus a odio ti tora torquperauris ine...",
        },
        {
            question: "What hospital I'm treated at?",
            answer:
                "Duis sed odio sit amet nibh vulputate cursus accumsan ipsuy veli Nam nec tellus a odio ti tora torquperauris ine...",
        },
    ];

    return (
        <>
            <section className="faq-section">
                <div className="image-layer" style={{ backgroundImage: "url(images/background/3.jpg)" }} />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div
                                    className="icon-layer-one"
                                    style={{ backgroundImage: "url(images/icons/pattern-4.png)" }}
                                />
                                <img src="images/faq.png" alt="" />
                            </div>
                        </div>

                        <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <div className="title">Frequently asked questions</div>
                                    <h2>Have Questions? We’ve Got Answers</h2>
                                </div>

                                <ul className="accordion-box">
                                    {faqItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`accordion block ${activeIndex === index ? "active-block" : ""
                                                }`}
                                        >
                                            <div
                                                className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <div className="icon-outer">
                                                    <span className="icon icon-plus fa fa-plus" />
                                                    <span className="icon icon-minus fa fa-minus" />
                                                </div>
                                                {item.question}
                                            </div>

                                            <div
                                                className={`acc-content ${activeIndex === index ? "current" : ""
                                                    }`}
                                            >
                                                <div className="content">
                                                    <div className="accordian-text">{item.answer}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQSection
