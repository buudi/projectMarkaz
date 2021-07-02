import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";
import { LangContext } from './common/contexts/LangContext';

const Header = () => {
    
    const {lang, setLang} = useContext(LangContext);

    const toggleArabic = () => {
        setLang("ar");
    }

    const toggleEnglish = () => {
        setLang("en");
    }
    return (
        <Styles>
            {/* Topbar */}
            <section className="top-bar">
                <Container>
                    <Row>
                        <Col lg="6" md="5">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><i className="las la-map-marker"></i>{lang === "ar" ? (<>المزهر 1- دبي</>) : (<>Al Mizhar 1 - Dubai</>)}</li>
                                    <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/faq"}>{lang === "ar" ? (<>لديك أسئلة؟  </>) : (<>Have questions?</>)}</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="6" md="7">
                            <div className="bar-right d-flex justify-content-end">
                                <ul className="list-unstyled list-inline bar-social">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                    
                                    <li className="list-inline-item"><a href="https://www.instagram.com/markazalhuda/" target="_blank"rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                                <ul className="list-unstyled list-inline bar-lang">
                                    <li className="list-inline-item">
                                        <Dropdown>
                                        {lang === "ar" ? (
                                            <Dropdown.Toggle as="a"><img src={process.env.PUBLIC_URL + "/assets/images/ae.png"} alt="" />العربية<i className="las la-angle-down"></i></Dropdown.Toggle>
                                        ) : (
                                            <Dropdown.Toggle as="a"><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" />English<i className="las la-angle-down"></i></Dropdown.Toggle>
                                        )}
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" onClick={toggleArabic}><img src={process.env.PUBLIC_URL + "/assets/images/ae.png"} alt="" /> العربية</Dropdown.Item>
                                                <Dropdown.Item as="li" onClick={toggleEnglish}><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" /> English</Dropdown.Item>
                                            </Dropdown.Menu>
                                            
                                        </Dropdown>
                                    </li>
                                </ul>
                                {/* <ul className="list-unstyled list-inline bar-login">
                                    <li className="list-inline-item"><a href="https://github.com/abda2050/projectMarkaz" target="_blank"><i className="las la-user"></i>{lang === "ar" ? (<>تسجيل الدخول</>) : (<>Log In</>)}</a></li>
                                    <li className="list-inline-item"><a href="https://github.com/abda2050/projectMarkaz" target="_blank"><i className="las la-user-edit"></i>{lang === "ar" ? (<>التسجيل</>) : (<>Register</>)}</a></li>
                                </ul> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area */}
            <section className="logo-area">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img width="225" height="85" src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="logo-contact-box d-flex justify-content-end">
                                <div className="emcontact-box d-flex">
                                    <div className="box-icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="box-content">
                                        <p>{lang === "ar" ? (
                                            <>رقم المكتب</>
                                        ):(
                                            <>Office Number</>
                                        )}</p>
                                        <span>(971) (04) 263 3338</span>
                                    </div>
                                </div>
                                <div className="emcontact-box d-flex">
                                    <div className="box-icon">
                                        <i className="flaticon-envelope"></i>
                                    </div>
                                    <div className="box-content">
                                        <p>{lang === "ar" ? (<>تواصل معنا</>):(<>Contact Us</>)}</p>
                                        <span>Markazalhudadubai@gmail.com</span>
                                    </div>
                                </div>
                                <div className="apply-btn">
                                    <a href="https://github.com/abda2050/projectMarkaz" target="_blank"><i className="las la-clipboard-list"></i>{lang ==="ar"?(<>قدّم الأن</>):(<>Apply Now</>)}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Navbar */}
            <section className="main-menu">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="main-menu-box">
                                <div className="menu-box d-flex justify-content-between">
                                    <ul className="nav menu-nav">
                                        <li className="nav-item dropdown active">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">
                                                {lang === "ar" ? (<> الصفحة الرئيسية </>):(<>HOME</>)}
                                                    <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>{lang === "ar"?(<>الرئيسة 1</>):(<>Home Style 1</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>{lang === "ar"?(<>الرئيسة 2</>):(<>Home Style 2</>)}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar"?(<> الصفحات </>):(<>PAGES</>)}<i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>{lang === "ar"?(<> معلومات عنا </>):(<>About Us</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>{lang === "ar"?(<> الصور </>):(<>Gallery</>)}</Link></li>
                                                {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>{lang === "ar"? (<>تسجيل الدخول</>):(<>Log in</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>{lang === "ar" ? (<>التسجيل</>) : (<>Registration</>)}</Link></li> */}
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>{lang === "ar" ? (<>تواصل معنا</>):(<>Contact</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>{lang==="ar" ? (<>أسئلة شائعة</>):(<>Faq</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الدورات</>) : (<>Courses</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>{lang === "ar" ? (<> قائمه الدورات</>) : (<>Course Grid</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>{lang === "ar" ? (<> تفاصيل الدورات</>) : (<>Course List</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>{lang === "ar" ? (<>الدورات</>) : (<>Course Details</>)}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>المدرسون</>) : (<>Instructors</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor"}>{lang === "ar" ? (<>المعلمات</>) : (<>Instructors</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor-details"}>{lang === "ar" ? (<> تفاصيل المعلمات </>) : (<>Instructors Details</>)}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الأحداث</>) : (<>Events</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>{lang === "ar" ? (<>الأحداث</>) : (<>Events</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/event-details"}>{lang === "ar" ? (<>تفاصيل الحدث</>) : (<>Event Details</>)}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>المّدونة</>) : (<>Blog</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>{lang === "ar" ? (<>مقالات</>) : (<>Blog Classic</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>{lang === "ar" ? (<>شبكة بلوق</>) : (<>Blog Grid</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>{lang === "ar" ? (<>تفاصيل المدونة</>) : (<>Blog Details</>)}</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav search-cart-bar">
                                        <li className="nav-item search-box">
                                            <Search />
                                        </li>
                                        
                                        <li className="nav-item side-box">
                                            <Sidebar />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sticky Menu */}
            <StickyMenu />

            {/* Mobile Menu */}
            <MobileMenu />
        </Styles>
    )
}

export default Header
