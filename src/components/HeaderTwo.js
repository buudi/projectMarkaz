import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";
import { LangContext } from "./common/contexts/LangContext";

const HeaderTwo  = () => {
    const {lang, setLang} = useContext(LangContext);
    
    const toggleArabic = () => {
        setLang("ar");
    }

    const toggleEnglish = () => {
        setLang("en");
    }

    return (
        <Styles>
            {/* Topbar 2 */}
            <section className="top-bar2">
                <Container>
                    <Row>
                        <Col lg="7" md="9">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><i className="las la-phone"></i>+971 (04) 263 3338</li>
                                    <li className="list-inline-item"><i className="las la-envelope"></i>Markazalhudadubai@gmail.com</li>
                                    <li className="list-inline-item"><i className="las la-map-marker"></i>Al MizharAl Mizhar 1 - Dubai.
                                </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="5" md="3">
                            <div className="bar-right d-flex justify-content-end">
                                <ul className="list-unstyled list-inline bar-lang">
                                    <li className="list-inline-item">
                                        <Dropdown>
                                            {lang === "ar" ? (<Dropdown.Toggle><img src={process.env.PUBLIC_URL + "/assets/images/ae.png"} alt="" />عربي<i className="las la-angle-down"></i></Dropdown.Toggle>) : (<Dropdown.Toggle><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" />English<i className="las la-angle-down"></i></Dropdown.Toggle>)}
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" onClick={toggleArabic}><img src={process.env.PUBLIC_URL + "/assets/images/ae.png"} alt="" /> عربي</Dropdown.Item>
                                                <Dropdown.Item as="li" onClick={toggleEnglish}><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" /> English</Dropdown.Item>
                                                
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                                <ul className="list-unstyled list-inline bar-social">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                    
                                    <li className="list-inline-item"><a href="https://www.instagram.com/markazalhuda/" target="_blank"rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                </ul>

                                <ul className="list-unstyled list-inline sidebar-button">
                                    <li className="list-inline-item nav-item side-box">
                                        <Sidebar />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area 2 */}
            <section className="logo-area2">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<> الصفحة الرئيسية </>):(<>HOME</>)}
                                         <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>{lang === "ar"?(<>الرئيسة 1</>):(<>Home Style 1</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>{lang === "ar"?(<>الرئيسة 2</>):(<>Home Style 2</>)}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar"?(<> الصفحات </>):(<>PAGES</>)}<i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>{lang === "ar"?(<> معلومات عنا </>):(<>About Us</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>{lang === "ar"?(<> الصور </>):(<>Gallery</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>{lang === "ar"? (<>تسجيل الدخول</>):(<>Log in</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>{lang === "ar" ? (<>التسجيل</>) : (<>Registration</>)}</Link></li>
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
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>مقالات</>) : (<>Blog</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>{lang === "ar" ? (<>مقالات</>) : (<>Blog Classic</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>{lang === "ar" ? (<>شبكة بلوق</>) : (<>Blog Grid</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>{lang === "ar" ? (<>تفاصيل المدونة</>) : (<>Blog Details</>)}</Link></li>
                                            </ul>
                                    </li>
                                    
                                </ul>
                                <div className="search-box">
                                    <Search />
                                </div>
                                <div className="apply-btn">
                                    <a href="https://github.com/abda2050/projectMarkaz" target="_blank" rel="noopener noreferrer"><i className="las la-clipboard-list"></i>{lang ==="ar"?(<>قدّم الأن</>):(<>Apply Now</>)}</a>
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

export default HeaderTwo
