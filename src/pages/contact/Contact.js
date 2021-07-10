import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import GoogleMap from './GoogleMap';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/contact.js';
import {LangContext} from "../../components/common/contexts/LangContext";

function Contact() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const form = document.getElementById("form_contact");
        const name = document.getElementById("contact_name");
        const email = document.getElementById("contact_email");
        const subject = document.getElementById("contact_subject");
        const message = document.getElementById("contact_message");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const subjectValue = subject.value.trim();
            const messageValue = message.value.trim();

            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (subjectValue === "") {
                setError(subject, "Subject can't be blank");
            } else {
                setSuccess(subject);
            }

            if (messageValue === "") {
                setError(message, "Message can't be blank");
            } else {
                setSuccess(message);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".contact_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper contact-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {lang === "ar" ? (<BreadcrumbBox title="أتصل بنا" />) : (   <BreadcrumbBox title="Contact Us" />)}
             

                {/* Contact Area */}
                <section className="contact-area">
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="contact-box-title">
                                    <h4>{lang === "ar" ? (<>معلومات الاتصال</>) : (<>Contact Info</>)}</h4>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-map-marker"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>{lang === "ar" ? (<>موقعنا</>) : (<>Our Location</>)}</h5>
                                        <p>Al MizharAl Mizhar 1 - Dubai. | Al Mamzar</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-envelope-open"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>{lang === "ar" ? (<>عنوان البريد الإلكتروني</>) : (<>Email Address</>)}</h5>
                                        <p>Markazalhudadubai@gmail.com<br />Markazalhuda@yahoo.com</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-phone"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>{lang === "ar" ? (<>رقم الهاتف</>) : (<>Phone Number</>)}</h5>
                                        <p>+971 (04) 263 3338<br/>+971 (04) 265 7438<br/>+971 (056) 851 1618<br/>+971 (050) 852 2004</p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <ul className="social list-unstyled list-inline">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                        
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                        
                                    </ul>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="contact-form">
                                    <div className="form-title">
                                        <h4>{lang === "ar" ? (<>ابقى على تواصل</>) : (<>Get In Touch</>)}</h4>
                                    </div>
                                    <div className="form-box">
                                        <form id="form_contact" className="form">
                                            <Row>
                                                <Col md="6">
                                                    <p className="form-control">
                                                    {lang === "ar" ? ( <input type="text" placeholder="الاسم بالكامل" id="contact_name" />) : ( <input type="text" placeholder="Full Name" id="contact_name" />)}
                                                       
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="form-control">
                                                    {lang === "ar" ? (<input type="email" placeholder="عنوان البريد الإلكتروني" id="contact_email" />) : (<input type="email" placeholder="Email Address" id="contact_email" />)}
                                                        
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                    {lang === "ar" ? (<input type="text" placeholder="موضوع" id="contact_subject" />) : (<input type="text" placeholder="Subject" id="contact_subject" />)}
                                                        
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                    {lang === "ar" ? (<textarea name="message" id="contact_message" placeholder="أدخل رسالة"></textarea>) : ( <textarea name="message" id="contact_message" placeholder="Enter Message"></textarea>)}
                                                       
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <button>{lang === "ar" ? (<>أرسل رسالة</>) : (<>Send Message</>)}</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Google Map */}
                    <GoogleMap />
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Contact