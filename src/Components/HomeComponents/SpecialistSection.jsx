import React from 'react'
import { Link } from 'react-router-dom';

const SpecialistSection = () => {
    const specialistData = [
        {
            title: "Internship - Volunteer",
            image: "https://media.istockphoto.com/id/512049844/vector/graduation-student-hat-and-diploma.jpg?s=612x612&w=0&k=20&c=AZUc7D7UXDNFr9XqZsGbfvHa9N13CG2A3K1-W3lqlO8=",
            link: "#",
            delay: "0ms",
        },
        {
            title: "Internship - Paid",
            image: "https://cdn-icons-png.flaticon.com/512/13219/13219697.png",
            link: "#",
            delay: "100ms",
        },
        {
            title: "Study Abroad",
            image: "https://media.istockphoto.com/id/1479005384/vector/earth-globe-in-academic-mortarboard-graduation-cap-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=CbMGykrHUVyk3_RprI1D6Yjk-wqLbfBnYc-JuwNH07Y=",
            link: "#",
            delay: "200ms",
        },
        {
            title: "Training Program",
            image: "https://cdn-icons-png.flaticon.com/512/3482/3482504.png",
            link: "#",
            delay: "300ms",
        },
        {
            title: "Research Projects",
            image: "https://cdn-icons-png.flaticon.com/512/17773/17773013.png",
            link: "#",
            delay: "400ms",
        },
    ];

    return (
        <>
            <section className="specialist-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                    	<div className="icon education_icon">
                            <img src="/images/icon/education.png" alt=""/>
                        </div>
                        <div className="title">WE GUIDE YOUR PATH WITH CLARITY</div>
                        <h2 className='wow fadeInDown'>
                            As a student, whether you wish <br /> to study in India or abroad</h2>
                    </div>
                    <div className="clearfix">
                        <div className="clearfix">
                            {specialistData.map((item, index) => (
                                <div className="specialist-block" key={index}>
                                    <div className="inner-box wow fadeInUp" data-wow-delay={item.delay} data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <span className="icon"><Link to={item.link}> <img src={item.image} alt={item.title} /> </Link> </span>
                                        </div>
                                        <h6><a href={item.link}>{item.title}</a></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialistSection
