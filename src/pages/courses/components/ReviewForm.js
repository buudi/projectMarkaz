import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Styles } from '../styles/reviewForm.js';

function ReviewForm() {
    useEffect(() => {
        const form = document.getElementById("form6");
        const desc = document.getElementById("desc6");
        const name = document.getElementById("name6");
        const email = document.getElementById("email6");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const descValue = desc.value.trim();
            const nameValue = name.value.trim();
            const emailValue = email.value.trim();

            if (descValue === "") {
                setError(desc, "Comment can't be blank");
            } else {
                setSuccess(desc);
            }

            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg6");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            <form id="form6" className="form review-comment-form">
                <Row>
                    <Col md="12">
                        <div className="star-rating">
                            <input type="radio" name="rate" id="rate-5" />
                            <label htmlFor="rate-5" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-4" />
                            <label htmlFor="rate-4" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-3" />
                            <label htmlFor="rate-3" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-2" />
                            <label htmlFor="rate-2" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-1" />
                            <label htmlFor="rate-1" className="las la-star"></label>
                        </div>
                    </Col>
                    <Col md="12">
                        <p className="form-control">
                            <textarea name="comment" id="desc6" placeholder="Enter your review"></textarea>
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-control">
                            <input type="name" placeholder="Enter your name" id="name6" />
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-control">
                            <input type="email" placeholder="Enter your email" id="email6" />
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="12">
                        <button>Submit Review</button>
                    </Col>
                </Row>
            </form>
        </Styles>
    )
}

export default ReviewForm