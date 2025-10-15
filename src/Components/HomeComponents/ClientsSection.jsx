import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ClientsSection = ({sponsors}) => {
   

    return (
        <>
            <section className="pt-0 clients-section ">
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <div className="sponsors-carousel">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={30}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                breakpoints={{
                                    320: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 5 },
                                }}
                            >
                                {sponsors&&sponsors?.length>0?
                                sponsors?.map((imgSrc, index) => (
                                    <SwiperSlide key={index}>
                                        <figure className="image-box">
                                            <a href="#">
                                                <img src={imgSrc} alt={`sponsor-${index + 1}`} />
                                            </a>
                                        </figure>
                                    </SwiperSlide>
                                )):"Data not available"}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientsSection
