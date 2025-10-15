
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamSection = () => {
  const teamData = [
    {
      name: "Anjali Verma",
      designation: "Senior Education Counselor",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Ms.",
    },
    {
      name: "Rohit Sinha",
      designation: "Visa & Admission Expert",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Mr.",
    },
    {
      name: "Nidhi Mehta",
      designation: "Career Guidance Specialist",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Ms.",
    },
    {
      name: "Aman Kapoor",
      designation: "International University Coordinator",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Mr.",
    },
    {
      name: "Sneha Malhotra",
      designation: "Student Counseling Psychologist",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Ms.",
    },
    {
      name: "Prof. Arvind Rao",
      designation: "Academic Strategy Advisor",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740",
      title: "Prof.",
    },
  ];

  return (
    <>
      <section className="team-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="icon education_icon">
              <img src="/images/icon/education.png" alt="" />
            </div>
            <div className="title">Our Team</div>
            <h2>Meet Our Expert Counselors
            </h2>
          </div>
          <div className="team-carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
              }}
            >
              {teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="team-block">
                    <div className="inner-box">
                      <div className="circle-box" />
                      <div className="image">
                        <a href="#"><img src={member.image} alt={member.name} /></a>
                      </div>
                      <div className="content">
                        <h4><a href="#">  <span>{member.title}</span> {member.name}</a></h4>
                        <div className="designation">{member.designation}</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni aut unde cupiditate  reprehenderit fugiat. Sed?</p>
                        <ul className="team-contact-list d-none">
                          <li> Phone: <a href="tel:+44-0-131-226-2200">+44 (0) 131 226 2200</a> </li>
                          <li>  Email:  <a href="mailto:info@headmedical.com">info@headmedical.com</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection
