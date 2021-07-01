import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import {LangContext} from "../../components/common/contexts/LangContext";

function Login() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const form = document.getElementById("form_login");
        const user = document.getElementById("login_user");
        const password = document.getElementById("login_password");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const userValue = user.value.trim();
            const passwordValue = password.value.trim();

            if (userValue === "") {
                setError(user, "User can't be blank");
            } else {
                setSuccess(user);
            }

            if (passwordValue === "") {
                setError(password, "Password can't be blank");
            } else {
                setSuccess(password);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".login_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }
    });

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper login-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {lang === "ar" ? (  <BreadcrumbBox title="تسجيل الدخول" />) : (  <BreadcrumbBox title="Log In" />)}
              

                {/* Login Area */}
                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="login-box">
                                    <div className="login-title text-center">
                                        <h3>{lang === "ar" ? (<>تسجيل الدخول</>) : (<>Log In</>)}</h3>
                                    </div>
                                    <form id="form_login" className="form">
                                        <p className="form-control">
                                            <label htmlFor="login_user">{lang === "ar" ? (<>أسم المستخدم</>) : (<>User Name</>)}</label>
                                            {lang === "ar" ? (<input type="text" placeholder="أسم المستخدم" id="login_user" />) : (<input type="text" placeholder="Username" id="login_user" />)}
                                           
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="login_password">{lang === "ar" ? (<>كلمه السر</>) : (<>Password</>)}</label>
                                            <input type="password" placeholder="*******" id="login_password" />
                                            <span className="login_input-msg"></span>
                                        </p>
                                        <button>{lang === "ar" ? (<>تسجيل الدخول</>) : (<>Log In</>)}</button>
                                        <div className="save-forget-password d-flex justify-content-between">
                                            <div className="save-passowrd">
                                                <label htmlFor="save_password"><input type="checkbox" id="save_password" className="check-box" />{lang === "ar" ? (<>حفظ كلمة المرور</>) : (<>Save password</>)}</label>
                                            </div>
                                            <div className="forget-password">
                                                <Link to={process.env.PUBLIC_URL + "/"}>{lang === "ar" ? (<>نسيت كلمة المرور؟</>) : (<>Forget Password ?</>)}</Link>
                                            </div>
                                        </div>
                                        <div className="not_account-btn text-center">
                                        {lang === "ar" ? ( <p>ليس لديك حساب بعد؟ <a href="https://github.com/abda2050/projectMarkaz" target="_blank">انقر هنا</a></p>) : ( <p>Haven't Any Account Yet? <a href="https://github.com/abda2050/projectMarkaz" target="_blank">Click Here</a></p>)}
                                           
                                        </div>
                                       
                
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Login