import React, { Component } from 'react';
import Datas from '../data/hero/hero-image.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import { Styles } from "./styles/heroImage.js";
import { LangContext } from "./common/contexts/LangContext";

class HeroImage extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    static contextType = LangContext;

    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Hero Image */}
                <section className="hero-image-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroBackground})` }}>
                <div className="round-shape" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroRoundShape})` }}></div>
                    <div className="hero-table">
                        <div className="hero-tablecell">
                            <Container>
                                <Row>
                                    <Col md="12">
                                        <div className="hero-box text-center">
                                            {lang === "ar" ? (
                                                <>
                                                    <h1>{Datas.heroTitleArabic}</h1>
                                                    <p>{Datas.heroSubtitleArabic}</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h1>{Datas.heroTitle}</h1>
                                                    <p>{Datas.heroSubtitle}</p>
                                                 </>
                                            )}
                                            
                                            <div className="video-player">
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='uXFUl0KcIkA' onClose={() => this.setState({ isOpen: false })} />
                                                <button onClick={this.openModal} className="play-button"><i className="las la-play"></i></button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </Styles>
        )
    }
}

export default HeroImage
