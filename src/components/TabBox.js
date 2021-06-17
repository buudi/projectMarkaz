import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i> Why Edulyn</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> Our Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Our Vision</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"></i> Our Ranking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="research"><i className="las la-arrow-right"></i> Our Research</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Why Edulyn</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Our Mission</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Our Vision</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">Our Ranking</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="research">
                                            <h4 className="tab-title">Our Research</h4>
                                            <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
