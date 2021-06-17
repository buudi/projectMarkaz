import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseSidebar from './components/CourseSidebar';
import CourseItemList from './components/CourseItemsList';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';

class CourseList extends Component {

    render() {
        return (
            <div className="main-wrapper course-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Courses" />

                <Styles>
                    {/* Course Grid */}
                    <section className="course-list-area">
                        <Container>
                            <Row>
                                <Col lg="3" md="4" sm="5">
                                    <CourseSidebar />
                                </Col>
                                <Col lg="9" md="8" sm="7">
                                    <div className="course-items2">
                                        <Row>
                                            <CourseItemList />
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Styles>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        )
    }
}

export default CourseList