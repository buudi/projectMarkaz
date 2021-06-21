import React, { Component } from 'react';
import Datas from '../data/icon-box/icon-box.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/iconBox.js";
import { LangContext } from "./common/contexts/LangContext";

class IconBox extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container>
                        <Row>
                            {
                                Datas.map((data, i) => (
                                    <Col md="4" key={i}>
                                        <div className="full-icon-box">
                                            <div className="icon-box d-flex">
                                                <div className={data.uniqClass}>
                                                    <i className={data.boxIcon}></i>
                                                </div>
                                                <div className="box-title">
                                                    {lang === "ar" ? (
                                                        <>
                                                            <h6>{data.titleArabic}</h6>
                                                            <p>{data.subTitleArabic}</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h6>{data.title}</h6>
                                                            <p>{data.subTitle}</p>
                                                        </>
                                                    )}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default IconBox
