import React from 'react'
import PageBreadcrumb from '../Common/PageBreadcrumb'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

const News_UpdateDetails = () => {
  return (
    <>
      <>
        <PageBreadcrumb title="News & Update Details" subTitle="News & Details" link="news_update"/>
        <div className="sidebar-page-container">
          <div className="auto-container">  
            <div className="row clearfix">
              <div className="content-side col-lg-9 col-md-12 col-sm-12">
                <div className="blog-single">
                  <div className="inner-box">
                    <div className="image">
                      <img src="images/Group 451.png" alt="" />
                    </div>
                    <div className="lower-content">
                      <h4>Canada Eases Post-Study Work Visa Rules in 2025</h4>
                      <div className="title">Post Info</div>
                      <div className="post-date">
                        On June 21, 2021
                      </div>
                      <div className="text">
                        <p>
                          The Canadian government has extended post-graduation work permits (PGWPs) for international students. This opens more career opportunities after studies.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium nobis aliquid ab maiores modi atque eum impedit laboriosam distinctio, alias quos, aliquam provident voluptatibus quo beatae itaque nisi expedita.
                        </p>


                        <div className="post-share-options">
                          <div className="post-share-inner clearfix">
                            <ul className="pull-left info-links clearfix">
                              <li>
                                <a href="#">
                                  <span className="fa fa-heart" />
                                </a>
                                12
                              </li>
                              <li>
                                <a href="#">
                                  <span className="fa fa-comments" />
                                </a>
                                03
                              </li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* Sidebar Side */}
              <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
                <aside className="sidebar default-sidebar with-border">
                  {/* Search */}
                  <div className="sidebar-widget search-box">
                    <form
                      method="post"
                      action="https://uniqthemes.com/html/uricko/medical/contact.html"
                    >
                      <div className="form-group">
                        <input
                          type="search"
                          name="search-field"
                          defaultValue=""
                          placeholder="Search..."
                          required=""
                        />
                        <button type="submit">
                          <span className="icon fa fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*Category Blog*/}
                  <div className="sidebar-widget categories-blog">
                    <div className="sidebar-title">
                      <h5>View Also</h5>
                    </div>
                    <ul>
                      <li> <Link to="#">  Study Abroad </Link> </li>
                      <li> <Link to="#">   IELTS Preparation  </Link> </li>
                      <li> <Link to="#">  Visa Guidance  </Link> </li>
                      <li> <Link to="#"> Scholarship Support</Link> </li>
                      <li><Link to="#"> Course Selection   </Link> </li>
                      <li><Link to="#">   Career Counseling  </Link></li>
                    </ul>
                  </div>

                  <div className="sidebar-widget popular-tags ">
                    <div className="sidebar-title">
                      <h5>Tag Cloud</h5>
                    </div>
                    <Link to="#">Study Abroad</Link>
                    <Link to="#">IELTS</Link>
                    <Link to="#">Career Guidance</Link>
                    <Link to="#">Student Visa</Link>
                    <Link to="#">Scholarships</Link>
                    <Link to="#">University Admission</Link>
                    <Link to="#">Free Counseling</Link>
                  </div>

                </aside>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default News_UpdateDetails
