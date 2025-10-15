import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ConsultingForm from './ConsultingForm';

const Slider = () => {
    const slides = [
        {
            bgImage: 'images/main-slider/image-1.jpg',

        },
       
    ];

    return (
        <section className="banner-section vision-section">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                // loop={true}
                // autoplay={{ delay: 5000 }}
                // pagination={{ clickable: true }}
                // navigation={true}
                className="main-slider-carousel"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide" style={{ backgroundImage: `url(${slide.bgImage})` }}>
                            <div className="icon-layer-two" style={{ backgroundImage: 'url(images/main-slider/circle-1.png)', }} />
                            <div className="icon-layer-three" style={{ backgroundImage: 'url(images/main-slider/circle-2.png)', }} />
                            <div className="icon-layer-four" style={{ backgroundImage: 'url(images/main-slider/circle-3.png)', }} />
                            <div className="auto-container">
                                <div className="row clearfix">
                                    {/* Content Column */}
                                    <div className="content-column col-lg-6 pb-5 mb-5 col-md-12 col-sm-12 text-start">
                                        <div className="inner-column">
                                            <h1 className=' wow fadeInDown'> Educational Consulting <br /> Offering Services </h1>
                                            <div className="text  wow fadeInDown">
                                                Study in top global destinations with expert guidance <br />from experienced counselors.
                                            </div>
                                            <div className="btns-box wow fadeInUp">
                                                <a href="#" className="theme-btn btn-style-one">
                                                    <span className="txt">Schedule Free Counseling</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="appointment-column col-lg-6 col-md-12 col-sm-12">
                                        <div
                                            className="icon-layer-one"
                                            style={{ backgroundImage: "url(images/icons/pattern-1.png)" }}
                                        />
                                        <ConsultingForm />
                                    </div>

                                    {/* Image Column
                                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                           <div className="icon-layer-one" style={{ backgroundImage: 'url(images/main-slider/pattern-1.png)', }} /> 
                                            <div className="image">
                                                <img src={slide.contentImage} alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
