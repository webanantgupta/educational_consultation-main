import React from 'react'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import { Row, Col, Card, CardBody, CardImg, Badge } from "reactstrap";
import { Link } from 'react-router-dom';

const NewsAndUpdate = () => {
    // newsData.js
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
            link: "/news_update_detail"
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
            link: "/news_update_detail"
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
            link: "/news_update_detail"
        }
    ];

    const newsData = [
        {
            id: 1,
            image: "images/resource/news-1.jpg",
            category: "Article",
            comments: "03 Comments",
            date: "June 21, 2025",
            likes: "12 Likes",
            title: "Top Universities in Australia for Indian Students",
            excerpt: "Explore the top-ranking universities in Australia that attract thousands of Indian students every year.",
            link: "news-detail.html"
        },
        {
            id: 2,
            image: "images/resource/news-2.jpg",
            category: "Tips",
            comments: "02 Comments",
            date: "July 5, 2025",
            likes: "09 Likes",
            title: "How to Crack Your Student Visa Interview",
            excerpt: "Visa interviews can be stressful. Here's how you can prepare confidently and avoid common mistakes.",
            link: "news-detail.html"
        },
        {
            id: 3,
            image: "images/resource/news-3.jpg",
            category: "Guide",
            comments: "05 Comments",
            date: "August 11, 2025",
            likes: "18 Likes",
            title: "A Complete Guide to Study Abroad Scholarships",
            excerpt: "Learn about merit-based, need-based, and country-specific scholarships for international students.",
            link: "news-detail.html"
        },
        {
            id: 4,
            image: "images/resource/news-1.jpg",
            category: "Story",
            comments: "04 Comments",
            date: "June 30, 2025",
            likes: "15 Likes",
            title: "My Journey from Delhi to Oxford University",
            excerpt: "Read how Aayushi turned her study abroad dream into reality with the right guidance and preparation.",
            link: "news-detail.html"
        },
        {
            id: 5,
            image: "images/resource/news-2.jpg",
            category: "Update",
            comments: "01 Comment",
            date: "July 25, 2025",
            likes: "10 Likes",
            title: "New Visa Rules Announced for Canadian Students",
            excerpt: "Canada introduces changes to its student visa policy — here’s what aspiring students need to know.",
            link: "news-detail.html"
        },
        {
            id: 6,
            image: "images/resource/news-3.jpg",
            category: "Tips",
            comments: "06 Comments",
            date: "August 15, 2025",
            likes: "20 Likes",
            title: "IELTS or TOEFL: Which Test Should You Choose?",
            excerpt: "Both are accepted worldwide, but which one suits your study destination better? Find out here.",
            link: "news-detail.html"
        },
        {
            id: 7,
            image: "images/resource/news-1.jpg",
            category: "Advice",
            comments: "02 Comments",
            date: "June 18, 2025",
            likes: "08 Likes",
            title: "How to Choose the Right Course for Your Career",
            excerpt: "Selecting the right course is the foundation of a successful international education journey.",
            link: "news-detail.html"
        },
        {
            id: 8,
            image: "images/resource/news-2.jpg",
            category: "Student Life",
            comments: "03 Comments",
            date: "July 29, 2025",
            likes: "11 Likes",
            title: "Living Abroad: What Every Indian Student Should Know",
            excerpt: "From cultural shocks to managing finances — here’s what to expect in your first year abroad.",
            link: "news-detail.html"
        },
        {
            id: 9,
            image: "images/resource/news-3.jpg",
            category: "Success Story",
            comments: "05 Comments",
            date: "August 21, 2025",
            likes: "16 Likes",
            title: "How We Helped 500+ Students Get into Top Global Universities",
            excerpt: "Our proven approach has enabled hundreds to gain admission to their dream institutions abroad.",
            link: "news-detail.html"
        }
    ];
    return (
        <>
            <PageBreadcrumb title="News & Update" />
            <section className="blog-page-section pb-5 mb-5">
                <div className="auto-container">
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
                    <Row className="clearfix d-none">
                        {newsData.map((item) => (
                            <Col key={item.id} lg="4" md="6" sm="12" className="news-block mb-4">
                                <Card className="border-0 shadow-sm">
                                    <div className="position-relative">
                                        <Badge color="primary" className="position-absolute m-2">
                                            {item.category}
                                        </Badge>
                                        <Link to={item.link}>
                                            <CardImg top src={item.image} alt={item.title} />
                                        </Link>
                                    </div>
                                    <CardBody>
                                        <ul className="list-inline small text-muted mb-2">
                                            <li className="list-inline-item">{item.comments} Comments</li>
                                            <li className="list-inline-item">|</li>
                                            <li className="list-inline-item">{item.date}</li>
                                            <li className="list-inline-item">|</li>
                                            <li className="list-inline-item">{item.likes} Likes</li>
                                        </ul>
                                        <h5>
                                            <Link to={item.link} className="text-dark">
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p className="text-muted">{item.excerpt}</p>
                                        <Link to={item.link} className="btn btn-link p-0">
                                            Read More →
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* Styled Pagination */}
                    <div className="styled-pagination text-center d-none">
                        <ul className="inner-container clearfix">
                            <li className="prev">
                                <a href="#" className="active">
                                    <i className="flaticon-left-arrow" />
                                    Prev
                                </a>
                            </li>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li className="active">
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li className="next">
                                <a href="#" className="active">
                                    Next  <i className="flaticon-right-arrow-1" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewsAndUpdate
