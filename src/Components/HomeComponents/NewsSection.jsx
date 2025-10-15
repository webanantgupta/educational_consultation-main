import React from 'react'
import { Col, Row } from 'reactstrap';

const NewsSection = () => {
    // blogData.js
    const blogData = [
        {
            id: 1,
            title: "Canada Eases Post-Study Work Visa Rules in 2025",
            date: "June 21, 2021",
            comments: "03 Comments",
            likes: "12 Liks",
            category: "Article",
            image: "images/Group 451.png",
            excerpt:
                "The Canadian government has extended post-graduation work permits (PGWPs) for international students. This opens more career opportunities after studies...",
            link: "#"
        },
        {
            id: 2,
            title: "Top 5 Affordable Universities in the UK for 2025 Intake",
            date: "July 21, 2025",
            comments: "03 Comments",
            likes: "12 Liks",
            category: "Article",
            image: "images/Group 452.png",
            excerpt:
                "Planning to study in the UK on a budget? Here’s a curated list of top-ranking universities with quality education and affordable tuition for Indian students...",
            link: "#"
        },
        {
            id: 3,
            title: "IELTS Now Accepted in More US Universities",
            date: "July 21, 2025",
            comments: "03 Comments",
            likes: "12 Liks",
            category: "Article",
            image: "images/Rectangle 78.png",
            excerpt:
                "Good news for students: Over 100 additional US universities will now accept IELTS for admissions, making the process smoother for applicants from India...",
            link: "#"
        }
    ];



    return (
        <>
            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="icon education_icon">
                            <img src="/images/icon/education.png" alt="" />
                        </div>
                        <div className="title">what’s new</div>
                        <h2>News &amp; Updates</h2>
                    </div>
                    
                    <Row className="clearfix">
                        {blogData.map((post, index) => (
                            <Col lg={4} md={6} sm={12} key={post.id} className="news-block">
                                <div
                                    className="inner-box wow fadeInLeft"
                                    data-wow-delay={`${index * 300}ms`}
                                    data-wow-duration="1500ms"
                                >
                                    <div className="image">
                                        <div className="category">{post.category}</div>
                                        <a href={post.link}>
                                            <img src={post.image} alt={post.title} />
                                        </a>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-meta">
                                            <li><a href="#">{post.comments}</a></li>
                                            <li><a href="#">{post.date}</a></li>
                                            <li><a href="#">{post.likes}</a></li>
                                        </ul>
                                        <h4>
                                            <a href={post.link}>{post.title}</a>
                                        </h4>
                                        <div className="text">{post.excerpt}</div>
                                        <a href={post.link} className="read-more">Read More</a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <div className="btns-box text-center">
                        <a href="#" className="theme-btn btn-style-one">
                            <span className="txt">view all news</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsSection
