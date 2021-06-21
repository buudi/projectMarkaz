import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import TabBox from './../../components/TabBox';
import TestimonialSlider from '../../components/TestimonialSlider';
import FaqEvent from '../../components/FaqEvent';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from "./styles/about.js";
import {LangContext} from "../../components/common/contexts/LangContext";


class About extends Component {
    static contextType = LangContext;

    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    {lang === "ar" ? (<BreadcrumbBox title="معلومات عنا"/>):( <BreadcrumbBox title="About Us" />)}
                   

                    {/* About Area */}
                    <AboutUs />

                    {/* Icon Box Area */}
                    <IconBox />

                    {/* Tab Section */}
                    <TabBox />

                    {/* Testimonial Slider */}
                    <TestimonialSlider />

                    {/* Faq & Event Area */}
                    <FaqEvent />

                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }
}

export default About