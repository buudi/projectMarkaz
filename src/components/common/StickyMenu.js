import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { LangContext } from "./contexts/LangContext";
import ChatBotButton from "../../components/common/ChatBotButton";

function StickyMenu() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
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
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الصفحة الرئيسية</>) : (<>Home</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>{lang === "ar" ? (<>1 الصفحة الرئيسية</>) : (<>Home Style 1</>)}</Link></li>
                                            <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>{lang === "ar" ? (<>2 الصفحة الرئيسية</>) : (<>Home Style 2</>)}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الصفحات</>):(<>Pages</>)} <i className="las la-angle-down"></i></Link>
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
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الدورات</>):(<>Courses</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>{lang === "ar" ? (<>شبكة الدورات</>):(<>Course Grid</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>{lang === "ar" ? (<>قائمة الدورات</>):(<>Course List</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>{lang === "ar" ? (<>تفاصيل الدورات</>):(<>Course Details</>)}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown"><i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor"}>{lang === "ar" ? (<>المدّربون</>):(<>Instructors</>)} </Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor-details"}>{lang === "ar" ? (<>تفاصيل المدربين</>):(<>Instructor Details</>)}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الأحداث</>):(<>Events</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>{lang === "ar" ? (<>الأحداث</>):(<>Events</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/event-details"}>{lang === "ar" ? (<>تفاصيل الأحداث</>):(<>Event Details</>)}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>مدّونة</>):(<>Blog</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>{lang === "ar" ? (<>الأحداث</>):(<> Blog Classic</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>{lang === "ar" ? (<>شبكة المدّونة</>):(<>Blog Grid</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>{lang === "ar" ? (<>تفاصيل المدّونة</>):(<>Blog Details</>)}</Link></li>
                                        </ul>
                                    </li>
                                   
                                </ul>
                                <div className="apply-btn">
                                    <a href="https://github.com/abda2050/projectMarkaz" target="_blank" rel="noopener noreferrer"><i className="las la-clipboard-list"></i>{lang === "ar" ? (<>قدّم الأن</>):(<>Apply Now</>)}</a>
                                </div>
                            </div>
                            <li className="list-inline-item">
                                        <ChatBotButton />
                                    </li>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu