

const TimingSection = () => {
    return (
        <>
            <section className="timing-section">
                <div className="image-layer"
                    style={{ backgroundImage: "url(images/chooseus.png)" }} />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="timing-column col-lg-6 col-md-12 col-sm-12">
                            <div
                                className="inner-column wow fadeInLeft d-none"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="clock-icon flaticon-clock" />
                                <h4>Working Hours</h4>
                                <div className="sub-text">
                                    Urgent call for patient{" "}
                                    <a href="tel:+0808-274-3429">0808 274 3429</a>
                                </div>
                                <ul className="time-list">
                                    <li>
                                        Monday - Friday<span>08:00 am - 12:00 pm</span>
                                    </li>
                                    <li>
                                        Saturday<span>10:00 am - 12:00 pm</span>
                                    </li>
                                    <li>
                                        Sunday<span>By Appointment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="choose-column col-lg-6 col-md-12 col-sm-12">
                            <div className="icon-layer-one" style={{ backgroundImage: "url(images/icons/pattern-2.png)" }} />
                            <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" >
                                <div className="title">why choose us</div>
                                <h5 className="text-dark">We deliver transparent, ethical, and student-first education consulting — just like our name suggests.
                                </h5>
                                <div className="blocks-outer pt-3">
                                    <ul className="choose-list">
                                        <li>
                                            <strong>Genuine Guidance</strong>
                                            No sales pitches. Just honest, expert advice tailored to your journey.
                                        </li>
                                        <li><strong> Student-Centered Approach</strong>
                                            Your goals drive every recommendation we make.
                                        </li>
                                        <li>
                                            <strong> Integrity-Driven Process</strong>
                                            We believe in doing things the right way — with honesty, respect, and professionalism.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TimingSection
