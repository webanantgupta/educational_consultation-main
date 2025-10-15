import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button, Col, Row } from 'reactstrap';


const Testimonial = () => {
    const testimonials = [
        {
            name: 'Ritika Sharma',
            designation: 'B.Tech Student, Canada',
            text: 'The team helped me with course selection, university shortlisting, and visa process. Their continuous guidance made everything smooth and stress-free for me and my family.',
            image: 'images/resource/author-3.jpg',
        },
        {
            name: 'Amit Verma',
            designation: 'B.Tech Student, Australia',
            text: 'I was confused about which country to choose for studies. Their counselors offered the best options, handled all documents, and prepared me well for my journey abroad.',
            image: 'images/resource/author-2.jpg',
        },
        {
            name: 'Neha Kapoor',
            designation: 'MBA Student, UK',
            text: 'With their help, I got into a top UK university. From SOP writing to mock interviews and final preparations, the experience was extremely professional and supportive throughout.',
            image: 'images/resource/author-3.jpg',
        },
        {
            name: 'Rajeev Mehta',
            designation: 'IELTS Aspirant',
            text: 'Their IELTS coaching was outstanding. The trainers were experienced and supportive, and I managed to get a band 8 which helped me secure multiple university admissions easily.',
            image: 'images/resource/author-2.jpg',
        },
        {
            name: 'Priya Nair',
            designation: 'Undergraduate Student, Germany',
            text: 'They guided me in preparing applications, writing LORs, and explained the German education system. The pre-departure sessions were also very helpful in settling abroad.',
            image: 'images/resource/author-1.jpg',
        },
    ];
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        document.body.appendChild(script);
    }, []);


    return (
        <>
            <section className="testimonial-section">
                <div
                    className="image-layer"
                    style={{ backgroundImage: "url(images/background/2.jpg)" }}
                />
                <div className="auto-container">
                    <Row className='pb-5 mb-4'>
                        <Col md={9}>
                            <div style={{ textAlign: 'start' }} className="title-box text-start">
                                <h6 className='text-light'>Our Testimonial</h6>
                                <h2>
                                    Our <span>Client</span> Reviews
                                </h2>
                            </div>
                        </Col>
                        <Col md={3} className='text-end ' style={{ textAlign: 'end' }} >
                            <div className="btns-box text-center">
                                <a href="#" className="theme-btn btn-style-one">
                                    <span className="txt">See All Reviews</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                   {/* <div className="elfsight-app-ff39ecf2-1034-40de-8f2e-991d555c56c9" data-elfsight-app-lazy></div> */}

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        // navigation
                        spaceBetween={30}
                        // pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        className="testimonial-carousel"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className='d-flex justify-content-between'>
                                            <div className="author-image">
                                                <div className="image">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <span className="quote-icon flaticon-quote-2" />
                                            </div>
                                            <div className='client'>
                                                <h4>{item.name}</h4>
                                                <div className="designation">{item.designation}</div>
                                            </div>
                                        </div>
                                        <div className="text">{item.text}</div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <img src="https://finbiz.pixcelsthemes.com/finbiz-html/assets/images/testimonials/icon/logo-01.png" alt="" />
                                            <div>
                                                <i className='fa fa-star text-warning'></i>
                                                <i className='fa fa-star text-warning'></i>
                                                <i className='fa fa-star text-warning'></i>
                                                <i className='fa fa-star text-warning'></i>
                                                <i className='fa fa-star text-warning'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonial
