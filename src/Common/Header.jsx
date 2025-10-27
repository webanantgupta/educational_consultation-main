import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openSecondSubMenu, setOpenSecondSubMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleSubMenu = (id) => {
    setOpenSubMenu((pre) => pre.id === id ? null : id)
  };
  const toggleSecondSubMenu = (id) => {
    setOpenSecondSubMenu((pre) => pre.id === id ? null : id)
  };
  const srollTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  return (
    <>
      <header className="main-header sticky-heade ">
        {/* Header Top */}
        <div className="header-top" >
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="top-right pull-right">
                <ul className="info-list">
                  <li>
                    <i className="fa-regular fa-calendar-check mainColor"></i>&nbsp;
                    <Link to="#">Events</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-building-columns mainColor"></i>&nbsp;
                    <Link to="#">Find a College</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-whatsapp mainColor" style={{ fontSize: '18px' }}></i>&nbsp;
                    <Link to="tel:+91 8989988998">+91 8989988998</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume mainColor"></i>&nbsp;
                    <Link to="tel:+91 8989988998">+91 8989988998</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper ">
          <div className="auto-container">
            <div className="inner-container clearfix" style={{backgroundColor: "black"}}>
              <div className="pull-left logo-box">
                <div className="logo py-0 d-flex justify-content-between">
                  <Link to="/">
                    <div className="icon education_icon py-3 d-flex justify-content-between">
                     <img src='/images/icon/CandidLogo.png' alt='this is logo image'/>
                    </div>
                    {/* <img src="images/logo.png" alt="" title="" /> */}
                  </Link>
                  <div className="mobile-nav-toggler pt-4">
                    <span className="icon flaticon-menu fs-3" onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '35px', color: '#fff' }} />
                  </div>
                </div>

              </div>
              <div className="nav-outer clearfix">

                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    {/* Toggle Button */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current">
                        <Link  to="/">Home</Link>

                      </li>
                      <li className="">
                        <Link  to="/our_story">Our Story</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#" >Study Visas</Link>
                        <ul>
                          <li>
                            <Link to="/study-australia" >Australia</Link>
                          </li>
                          <li>
                            <Link to="/study-newzealand">New Zealand</Link>
                          </li>
                          <li>
                            <Link to="/study-UK">United Kingdom</Link>
                          </li>
                          <li>
                            <Link to="/study-USA">United States of America</Link>
                          </li>
                        </ul>
                      </li>


                      <li className="dropdown">
                        <Link to="#" >Work Visas</Link>
                        <ul>
                          <li>
                            <Link to="/workvisa_general_skilled">General Skilled Migration</Link>
                          </li>
                          <li>
                            <Link to="/workvisa_employ_sponcer">Employer Sponsorship</Link>
                          </li>
                        </ul>
                      </li>

                      <li className='dropdown'>
                        <Link to="#">Visit Visas</Link>
                        <ul>
                          <li>
                            <Link to="/visitvisa_australia">Australia</Link>
                          </li>
                          <li>
                            <Link to="/visitvisa_newzealand">New Zealand</Link>
                          </li>
                          <li >
                            <Link to="/visitvisa_unitedkingdom">UK</Link>
                          </li>
                          <li>
                            <Link to="/visitvisa_america">USA</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <Link to="#" >Our Services</Link>
                        <ul>
                          {/* <li className='dropdown'> <Link to="#">internships</Link>
                            <ul>
                              <li> <Link to="#">paid </Link></li>
                              <li> <Link to="#">voluntary  </Link></li>
                            </ul>
                          </li> */}




                          <li> <Link to="/ourservice_consultation">Cosultation</Link></li>
                          <li> <Link to="/ourservice_review">Review Appeals</Link></li>
                          <li> <Link to="/ourservice_internship">Internships</Link></li>
                          <li> <Link to="/ourservice_training">Training Programs</Link></li>
                          <li> <Link to="/ourservice_jobready">Job Ready Program</Link></li>
                          <li> <Link to="/ourservice_skillassessment">Skills Assessment</Link></li>
                          <li> <Link to="/ourservice_professional">Professional Years Course</Link></li>
                          <li> <Link to="/ourservice_englishtest">English Tests Preparation</Link></li>

                        </ul>
                      </li>


                      <li className='dropdown'>
                        <Link to="#" >News & Updates</Link>
                        <ul>
                          <li>
                            <Link to="/news_updates/Australia">Australia</Link>
                          </li>
                          <li>
                            <Link to="/news_updates/New Zealand">New Zealand</Link>
                          </li>
                          <li>
                            <Link to="/news_updates/United Kingdom">UK</Link>
                          </li>
                          <li>
                            <Link to="/news_updates/United States of America">USA</Link>
                          </li>
                        </ul>
                      </li>

                      <li className='dropdown'>
                        <Link to="#" >Contact Us</Link>
                        <ul style={{ width: '250px' }}>
                          <li>
                            <Link to="/contact" >Australia</Link>
                          </li>
                          <li>
                            <Link to="/contact">Our Team</Link>
                          </li>
                          <li>
                            <Link to="/contact">New Zealand</Link>
                          </li>
                          <li>
                            <Link to="/contact">United Kingdom</Link>
                          </li>
                          <li>
                            <Link to="/contact">United States</Link>
                          </li>
                          <li>
                            <Link to="/contact">Ireland</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
                <div className="outer-box clearfix">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        {openMenu ?
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn">
              <span className="icon flaticon-multiply" onClick={toggleMenu} />
            </div>
            <nav className="menu-box">
              <div className="nav-logo">
                <Link to="/">
                  <div className="icon education_icon py-3 d-flex justify-content-between">
                    <img src="/images/icon/education.png" alt="" />&nbsp;<h2>Candid</h2>
                  </div>
                  {/* <img src="images/logo.png" alt="Logo" /> */}
                </Link>
              </div>

              <ul className="navigation clearfix">
                <li className="current ">
                  <Link to="/" onClick={() => { srollTop(); toggleMenu() }} >Home</Link>

                </li>
                <li className="">
                  <Link to="/our_story" onClick={() => { srollTop(); toggleMenu() }} > Our Story</Link>
                </li>
                <li className="">
                  <Link to="#" onClick={() => toggleSubMenu(1)} >Our Services</Link>
                  {openSubMenu === 1 ?
                    <ul className='submenu'>
                      <li className='dropdown'> <Link to="#" onClick={() => toggleSecondSubMenu(1)}>internships</Link>
                        {openSecondSubMenu === 1 ?
                          <ul className='submenu'>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }}  >paid </Link>
                            </li>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >voluntary</Link>
                            </li>
                          </ul>
                          : ''}
                      </li>
                      <li className='dropdown'> <Link to="#" onClick={() => toggleSecondSubMenu(2)}>training program</Link>
                        {openSecondSubMenu === 2 ?
                          <ul className='submenu'>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }}  >Vocational Education Training</Link>
                            </li>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Professional Education Training</Link>
                            </li>
                          </ul>
                          : ''}
                      </li>
                      <li className="dropdown">
                        <Link to="#" onClick={() => toggleSecondSubMenu(3)}>Consultation </Link>
                        {openSecondSubMenu === 3 ?
                          <ul className='submenu'>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Complimentary</Link>
                            </li>
                            <li>
                              <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Paid</Link>
                            </li>
                          </ul>
                          : ''}
                      </li>
                      <li className="dropdown">
                        <Link to="#" onClick={() => toggleSecondSubMenu(4)}>Visas </Link>
                        {openSecondSubMenu === 4 ?
                          <ul className='submenu'>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Student Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Student Guardian Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Employer Sponsored Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Partner Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Other Family Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Visitor  Visas</Link></li>
                            <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Visa Cancellations</Link></li>
                          </ul>
                          : ''}
                      </li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >General Skilled Migration</Link></li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Review Appeals</Link></li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Job ready program</Link></li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >IELTS Preparation Course</Link></li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >PTE Preparation Course</Link></li>
                      <li> <Link to="#" onClick={() => { srollTop(); toggleMenu() }} >Professional Year Course</Link></li>

                    </ul>
                    : ''}
                </li>
                <li className="dropdown">
                  <Link to="/" onClick={() => { srollTop(); toggleMenu() }} >Find a Course</Link>
                </li>
                <li>
                  <Link to="/news_update" onClick={() => { srollTop(); toggleMenu() }} >News & Updates</Link>
                </li>
                <li className="dropdown">
                  <Link to="#" onClick={() => toggleSubMenu(2)}>Contact Us</Link>
                  {openSubMenu === 2 ?
                    <ul>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>Australia</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>Our Team</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>New Zealand</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>United Kingdom</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>United States</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => { srollTop(); toggleMenu() }}>Ireland</Link>
                      </li>
                    </ul>
                    : ''}
                </li>
              </ul>
            </nav>
          </div>
          : ''}
        {/* End Mobile Menu */}
      </header >


    </>
  )
}

export default Header
