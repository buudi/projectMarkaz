import React, { Component } from 'react';
import Datas from '../../data/instructor/details.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/instructor.js';

class InstructorDetails extends Component {
    render() {
        const settings = {
            slidesPerView: 3,
            loop: true,
            speed: 1000,
            autoplay: false,
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                }
            }
        };

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper instructor-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Instructor Details" />

                    {/* Instructor Details Area */}
                    <section className="instructor-details-area">
                        <Container>
                            <Row>
                                <Col md="4">
                                    <div className="instructor-img">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/team-7.jpg`} alt="" className="img-fluid" />
                                        <ul className="list-unstyled getintouch">
                                            <li><i className="las la-phone"></i> +1 (396) 486 4709</li>
                                            <li><i className="lar la-envelope"></i> mail@contactme.com</li>
                                            <li><i className="lab la-skype"></i> contact.me</li>
                                        </ul>
                                        <ul className="social list-unstyled list-inline">
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div className="instructor-content">
                                        <h4>Kamal Sulaiman</h4>
                                        <span>Senior Teacher</span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur accusantium laudantium! Vitae libero voluptatum velit earum corrupti officia quo, magnam mollitia nam provident tempora. Ipsum quaerat tempora odit maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, molestiae. Quae illum non sit. In sapiente, reiciendis sunt aperiam repellendus quibusdam repudiandae, dolores tempore esse vero aliquid illum neque voluptatem.<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, aliquid illo? Quia dolore obcaecati incidunt perferendis minus error repudiandae iure perspiciatis maxime assumenda? Sit dicta, odit sunt maiores incidunt culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate quisquam quis officiis.</p>
                                    </div>
                                    <div className="qual-expe d-flex">
                                        <div className="qualification">
                                            <h5>Qualifications</h5>
                                            <div className="qual-expe-box">
                                                <h6>University of California</h6>
                                                <p>Bachelor of Computer Science & Engeniering</p>
                                            </div>
                                            <div className="qual-expe-box">
                                                <h6>University of California</h6>
                                                <p>Masters of Computer Science & Engeniering</p>
                                            </div>
                                        </div>
                                        <div className="experiance">
                                            <h5>Experiance</h5>
                                            <div className="qual-expe-box">
                                                <h6>SnazzyTheme.com</h6>
                                                <p>2016 - 2019</p>
                                            </div>
                                            <div className="qual-expe-box">
                                                <h6>Envato Market</h6>
                                                <p>2019 - Present</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="instructor-course-title">
                                        <h5>Courses by Kamal Sulaiman</h5>
                                    </div>
                                    <div className="instructor-course-slider">
                                        <Swiper {...settings}>
                                            {
                                                Datas.map((data, i) => (
                                                    <div className="course-item" key={i}>
                                                        <Link to={process.env.PUBLIC_URL + data.courseLink}>
                                                            <div className="course-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})` }}>
                                                                <div className="author-img d-flex">
                                                                    <div className="img">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                                                    </div>
                                                                    <div className="title">
                                                                        <p>{data.authorName}</p>
                                                                        <span>{data.authorCourses}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="course-price">
                                                                    <p>{data.price}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div className="course-content">
                                                            <h6 className="heading"><Link to={process.env.PUBLIC_URL + data.courseLink}>{data.courseTitle}</Link></h6>
                                                            <p className="desc">{data.courseDesc}</p>
                                                            <div className="course-face d-flex justify-content-between">
                                                                <div className="duration">
                                                                    <p><i className="las la-clock"></i>120</p>
                                                                </div>
                                                                <div className="rating">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                                        </li>
                                                                        <li className="list-inline-item">(4.5)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="student">
                                                                    <p><i className="las la-chair"></i>60</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Swiper>
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
}

export default InstructorDetails