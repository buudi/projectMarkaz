import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseSearch from './../../courses/components/CourseSearch';
import CourseCategory from './../../courses/components/CourseCategory';
import RecentBlog from './RecentPost';
import CourseTag from './../../courses/components/CourseTag';


class BlogSidebar extends Component {
    render() {
        return (
            <div className="course-sidebar">
                <Row>
                    <Col md="12">
                        <CourseSearch />
                    </Col>
                    <Col md="12">
                        <CourseCategory />
                    </Col>
                    <Col md="12">
                        <RecentBlog />
                    </Col>
                    <Col md="12">
                        <CourseTag />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BlogSidebar
