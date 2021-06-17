import React, { Component, Fragment } from 'react';
import Datas from '../../../data/course/item.json';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Pagination from './../../../components/Pagination';

class CourseItemList extends Component {
    render() {
        return (
            <Fragment>
                {/* Course Item */}
                {
                    Datas.map((data, i) => (
                        <Col md="12" key={i}>
                            <div className="course-item d-flex">
                                <div className="course-image-box">
                                    <div className="course-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})` }}>
                                        <div className="author-img d-flex">
                                            <div className="img">
                                                <Link to={process.env.PUBLIC_URL + data.courseLink}>
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                                </Link>
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
                                </div>
                                <div className="course-content">
                                    <h6 className="heading"><Link to={process.env.PUBLIC_URL + data.courseLink}>{data.courseTitle}</Link></h6>
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
                                    <p className="desc">{data.courseDesc}</p>
                                    <Link className="details-btn" to={process.env.PUBLIC_URL + data.courseLink}>View Details</Link>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                
                <Col md="12"  className="text-center">
                    <Pagination />
                </Col>

            </Fragment>
        )
    }
}

export default CourseItemList
