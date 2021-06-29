import React, { useContext, useEffect, useState } from 'react';
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
    Heading,
    Box,
    FormControl,
    FormLabel,
    InputGroup,
    Button,
    InputRightElement,
    Select,
    Spinner,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";

function Register() {
    const { lang } = useContext(LangContext);

    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);
    const [alertCard, setAlertCard] = useState(false);
    const [errorStatus, setErrorStatus] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSpin(true);
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
                name: name,
                email: email,
                role: parseInt(role),
                password: password,
            })
            .then((res) => {
                const daString = res.data;
                if (
                    daString.indexOf("duplicate key value violates unique constraint") !=
                    -1
                ) {
                    setAlertCard(true);
                    setErrorStatus(true);
                } else {
                    setAlertCard(true);
                    setErrorStatus(false);
                }
                setName("");
                setEmail("");
                setRole("");
                setPassword("");
                setSpin(false);
            })
            .catch((err) => {
                setAlertCard(true);
                setNetworkError(true);
                setSpin(false);
            });
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
                                        <h3>{lang === "ar" ? (<>التسجيل</>) : (<>Registeration</>)}</h3>
                                    </div>
                                    <ChakraProvider>
                                        <form onSubmit={handleSubmit}>
                                            <FormControl isRequired>
                                                <FormLabel>Name</FormLabel>
                                                <Input
                                                    bg="white"
                                                    placeholder="name"
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Email</FormLabel>
                                                <Input
                                                    bg="white"
                                                    placeholder="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>Role</FormLabel>
                                                <Select
                                                    bg="white"
                                                    placeholder="Select role"
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}
                                                >
                                                    <option value="1">Admin</option>
                                                    <option value="2">Moderator</option>
                                                    <option value="3">Reviewer</option>
                                                </Select>
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel mt={3}>password</FormLabel>
                                                <InputGroup size="md">
                                                    <Input
                                                        bg="white"
                                                        type={show ? "text" : "password"}
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                                                            {show ? "Hide" : "Show"}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>

                                            {spin ? (
                                                <Button type="submit" mt={8} colorScheme="blue">
                                                    <Spinner />
                                                </Button>
                                            ) : (
                                                <Button type="submit" mt={8} colorScheme="blue">
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