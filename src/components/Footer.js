import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import ChatBotButton from "./common/ChatBotButton";
import { Styles } from "./styles/footerOne.js";
import { LangContext } from "./common/contexts/LangContext";

class Footer extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" className="img-fluid" />
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe porro neque a nam null quos.  Adipisci eius unde magnam ad, nisi voluptates.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>Al MizharAl Mizhar 1 - Dubai.</li>
                                        <li><i className="las la-envelope"></i>Markazalhudadubai@gmail.com</li>
                                        <li><i className="las la-phone"></i>+971 (04) 263 3338</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-links">
                                    <h5>{lang === "ar" ? (<>روابط مفيدة</>) : (<>USEFUL LINKS</>)}</h5>

                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>{lang === "ar" ? (<> معلومات عامة
                                        </>) : (<>General Information</>)}</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>{lang === "ar" ? (<>مركز المساعدة
                                        </>) : (<>Help Center</>)}</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>{lang === "ar" ? (<>خدمتنا</>) : (<>Our Services</>)}</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>{lang === "ar" ? (<>سياسة خاصة
                                        </>) : (<>Privacy Policy</>)}</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>{lang === "ar" ? (<>الدعم الالكتروني</>) : (<>Online Support</>)}</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-post">
                                    <h5>Recent Post</h5>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-2.jpg"} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit amet consectet adipisicing elit com...</Link>
                                            <span>Mar 30, 2020</span>
                                        </div>
                                    </div>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-3.jpg"} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit amet consectet adipisicing elit com...</Link>
                                            <span>Mar 30, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2017 | Markazalhuda</p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>

                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>

                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <ChatBotButton />
                    <BackToTop />
                </section>
            </Styles>
        );
    }
}

export default Footer;
