import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import { LangContext } from "../../components/common/contexts/LangContext";
import { ChakraProvider } from "@chakra-ui/react";
import {
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    Button,
    InputRightElement,
    Spinner,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";

function Register() {
    const { lang } = useContext(LangContext);

    function smoothScrollBackToTop() {
        const targetPosition = 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 750;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);
    const [alertCard, setAlertCard] = useState(false);
    const [errorStatus, setErrorStatus] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [passError, setPassError] = useState(false);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [idNum, setIdNum] = useState("");
    const [idExpiry, setIdExpiry] = useState("");
    const [passport, setPassport] = useState("");
    const [passportExpiry, setPassportExpiry] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        smoothScrollBackToTop();
        if (repeatPass !== password) {
            setAlertCard(true);
            setPassError(true);

        } else {
            setSpin(true);
            axios
                .post(`http://localhost:8080/register`, {
                    fname: fname,
                    lname: lname,
                    email: email,
                    username: username,
                    password: password,
                    dob: dob,
                    mobile: mobile,
                    idNum: idNum,
                    idExpiry: idExpiry,
                    passport: passport,
                    passportExpiry: passportExpiry
                })
                .then((res) => {
                    const daString = res.data;
                    if (
                        daString.indexOf("duplicate key value violates unique constraint") !==
                        -1
                    ) {
                        setAlertCard(true);
                        setErrorStatus(true);
                    } else {
                        setAlertCard(true);
                        setErrorStatus(false);
                        setPassError(false);
                    }

                    setFname("");
                    setLname("");
                    setEmail("");
                    setUsername("");
                    setPassword("");
                    setDob("");
                    setRepeatPass("");
                    setMobile("");
                    setIdNum("");
                    setIdExpiry("");
                    setPassport("");
                    setPassportExpiry("");

                    setSpin(false);
                })
                .catch((err) => {
                    setAlertCard(true);
                    setNetworkError(true);
                    setSpin(false);
                });
        }

    };

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {lang === "ar" ? (<BreadcrumbBox title="التسجيل" />) : (<BreadcrumbBox title="Registration" />)}


                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>{lang === "ar" ? (<>التسجيل</>) : (<>Registration</>)}</h3>
                                    </div>
                                    <ChakraProvider>
                                        {(() => {
                                            if (alertCard) {
                                                if (passError) {
                                                    return (
                                                        <div>
                                                            <Alert borderRadius="20px" status="error">
                                                                <AlertIcon />
                                                                <span>Passwords do not match!</span>
                                                            </Alert>
                                                            <br />
                                                        </div>
                                                    );
                                                }
                                                if (networkError) {
                                                    return (
                                                        <div>
                                                            <Alert borderRadius="20px" status="error">
                                                                <AlertIcon />
                                                                <span>networkError! Try Again Later</span>
                                                            </Alert>
                                                            <br />
                                                        </div>
                                                    );
                                                }
                                                if (errorStatus) {
                                                    return (
                                                        <div>
                                                            <Alert borderRadius="20px" status="error">
                                                                <AlertIcon />
                                                                <span>This email already exists!</span>
                                                            </Alert>
                                                            <br />
                                                        </div>
                                                    );
                                                } else if (!errorStatus && !passError) {
                                                    return (
                                                        <div>
                                                            <Alert borderRadius="20px" status="success">
                                                                <AlertIcon />
                                                                <span>
                                                                    Registred!{" "}
                                                                    <a href="https://github.com/abda2050/projectMarkaz" target="_blank" rel="noopener noreferrer">Log in here</a>
                                                                </span>
                                                            </Alert>
                                                            <br />
                                                        </div>
                                                    );
                                                }
                                            }
                                        })()}

                                        <form onSubmit={handleSubmit}>
                                            <FormControl isRequired>
                                                <FormLabel>First Name</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="First Name"
                                                    type="text"
                                                    value={fname}
                                                    onChange={(e) => setFname(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Last Name</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="Last Name"
                                                    type="text"
                                                    value={lname}
                                                    onChange={(e) => setLname(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Email</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>username</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="username"
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>password</FormLabel>
                                                <InputGroup size="md">
                                                    <Input
                                                        size="lg"
                                                        bg="white"
                                                        type={show ? "text" : "password"}
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" mt={2} size="sm" onClick={() => setShow(!show)}>
                                                            {show ? "Hide" : "Show"}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Repeat password</FormLabel>
                                                <InputGroup size="md">
                                                    <Input
                                                        size="lg"
                                                        bg="white"
                                                        type={show ? "text" : "password"}
                                                        placeholder="Repeat password"
                                                        value={repeatPass}
                                                        onChange={(e) => setRepeatPass(e.target.value)}
                                                    />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" mt={2} size="sm" onClick={() => setShow(!show)}>
                                                            {show ? "Hide" : "Show"}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Date Of Birth</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    type="date"
                                                    value={dob}
                                                    onChange={(e) => setDob(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Mobile Number</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="971501234567"
                                                    type="number"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Emirates Id Number</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    placeholder="784200212345671 (without symbols)"
                                                    type="number"
                                                    value={idNum}
                                                    onChange={(e) => setIdNum(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Emirates Id Expiration Date</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    type="date"
                                                    value={idExpiry}
                                                    onChange={(e) => setIdExpiry(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Passport Number</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    type="number"
                                                    placeholder="passport number"
                                                    value={passport}
                                                    onChange={(e) => setPassport(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Passport Expiration Date</FormLabel>
                                                <Input
                                                    size="lg"
                                                    bg="white"
                                                    type="date"
                                                    value={passportExpiry}
                                                    onChange={(e) => setPassportExpiry(e.target.value)}
                                                />
                                            </FormControl>

                                            {spin ? (
                                                <Button w="100%" h="40px" type="submit" mb={6} mt={8} backgroundColor="#339F55" color="white">
                                                    <Spinner />
                                                </Button>
                                            ) : (
                                                <Button w='100%' h="40px" type="submit" mb={6} mt={8} backgroundColor="#339F55" color="white">
                                                    Register
                                                </Button>
                                            )}
                                        </form>
                                    </ChakraProvider>

                                    <div className="have_account-btn text-center">
                                        {lang === "ar" ? (<> <p>هل لديك حساب؟ <Link to="/login">تسجيل الدخول هنا</Link></p></>) : (<> <p>Already have an account? <Link to="/login">Login Here</Link></p></>)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    );
}

export default Register;