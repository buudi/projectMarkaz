import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .top-bar {
        background: ${colors.bg1};
        .bar-left {
            ul {
                li {
                    font-size  : 13px;
                    color      : ${colors.text4};
                    border-left: 1px solid ${colors.border2};
                    padding    : 10px 15px;
                    margin     : 0;
                    display    : inline-block;

                    a {
                        font-size: 13px;
                        color    : ${colors.text4};

                        &:hover {
                            color: ${colors.green};
                        }
                    }

                    i {
                        font-size     : 20px;
                        color         : ${colors.green};
                        vertical-align: bottom;
                        margin-right  : 5px;
                    }

                    &:last-child {
                        border-right: 1px solid ${colors.border2};
                    }

                    @media(max-width: 991px) {
                        border : none;
                        padding: 10px 0px;
                        &:last-child {
                            display : none;
                        }
                    }
                }
            }
        }

        .bar-right {
            ul.bar-social {
                border-right: 1px solid ${colors.border2};
                border-left : 1px solid ${colors.border2};
                padding     : 10px 15px;

                li {
                    a {
                        font-size   : 14px;
                        color       : ${colors.green};
                        margin-right: 10px;

                        &:hover {
                            color: #ffffff;
                        }
                    }

                    &:last-child {
                        a {
                            margin-right: 0;
                        }
                    }
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }

            ul.bar-lang {
                border-right: 1px solid ${colors.border2};
                padding     : 10px 15px;

                li {
                    .dropdown {
                        a.dropdown-toggle {
                            font-size: 13px;
                            color    : ${colors.text4};

                            img {
                                margin-right: 5px;
                                max-width   : 21px;
                            }

                            i {
                                font-size  : 12px;
                                margin-left: 3px;
                            }

                            &::after {
                                display: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color : ${colors.green};
                            }
                        }

                        ul.dropdown-menu {
                            padding: 0;
                            margin : 0;
                            border : none;
                            background: #ffffff;
                            border-radius: 5px;
                            top       : 68% !important;
                            left      : -16px !important;
                            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                            li {
                                display      : block;
                                background: transparent;
                                border-bottom: 1px solid ${colors.border1};
                                padding      : 7px 15px;
                                color        : ${colors.text2};
                                cursor       : pointer;
                                overflow    : hidden;

                                img {
                                    max-width   : 21px;
                                    margin-right: 5px;
                                }

                                &:hover {
                                    color      : ${colors.bg1};
                                    font-weight: 500;
                                }

                                &:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    border-right : none;
                    padding: 10px 0px;
                }
            }

            ul.bar-login {
                li {
                    border-right: 1px solid ${colors.border2};
                    padding     : 10px 15px;
                    margin      : 0;
                    display     : inline-block;

                    a {
                        font-size: 13px;
                        color    : ${colors.text4};

                        i {
                            font-size     : 20px;
                            color         : ${colors.green};
                            vertical-align: bottom;
                            margin-right  : 5px;
                        }

                        &:hover {
                            color: ${colors.green};
                        }
                    }

                    @media(max-width: 991px) {
                        border-right : none;
                        padding-right: 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .logo-area {
        padding: 22px 0;
        .logo {
            a {
                img {
                    @media(max-width: 991px) {
                        max-width : 100%;
                        margin-top: 4px;
                    }
                }
            }
        }

        .logo-contact-box {
            .emcontact-box {
                margin-right: 45px;

                .box-icon {
                    background  : ${colors.green};
                    height      : 21px;
                    text-align  : center;
                    margin-top  : 10px;
                    margin-right: 12px;
                    position    : relative;

                    i {
                        position  : relative;
                        z-index   : 111;
                        font-size : 22px;
                        color     : #ffffff;
                        width     : 36px;
                        display   : inline-block;
                        margin-top: -5px;
                    }

                    &:before {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : transparent;
                        border-right-color : transparent;
                        border-bottom-color: ${colors.green};
                        border-left-color  : transparent;
                        top                : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    &:after {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : ${colors.green};
                        border-right-color : transparent;
                        border-bottom-color: transparent;
                        border-left-color  : transparent;
                        bottom             : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }

                .box-content {
                    p {
                        font-size    : 13px;
                        color        : ${colors.text3};
                        margin-bottom: -2px;
                    }

                    span {
                        font-size  : 17px;
                        color      : ${colors.black1};
                        font-weight: 500;
                    }
                }

                @media(max-width: 991px) {
                    margin-right : 20px;
                }
            }

            .apply-btn {
                margin-left: 40px;

                a {
                    font-size     : 13px;
                    color         : #ffffff;
                    background    : ${colors.gr_bg};
                    display       : inline-block;
                    width         : 110px;
                    height        : 40px;
                    text-align    : center;
                    text-transform: uppercase;
                    font-weight   : 500;
                    padding       : 11px;
                    border-radius : 0 5px 5px 0;
                    position: relative;

                    i {
                        position : absolute;
                        font-size: 20px;
                        left     : -40px;
                        top      : 0;
                        padding  : 10px;
                        width    : 40px;
                        height   : 100%;
                        border-radius : 5px 0 0 5px;
                        background-color: ${colors.green2};
                    }

                    &:hover {
                        background: ${colors.gr_bg2};
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .main-menu {
        .main-menu-box {
            position: relative;
            z-index : 111;

            .menu-box {
                position  : absolute;
                width     : 100%;
                top       : 20px;
                left      : 0;
                padding   : 0 30px;
                background: ${colors.gr_bg};
                border-radius : 5px;

                ul.nav.menu-nav {
                    li.nav-item {
                        position: relative;

                        a.nav-link {
                            font-size     : 14px;
                            color         : #ffffff;
                            text-transform: uppercase;
                            font-weight   : 500;
                            padding       : 18px 25px 15px 0;

                            i {
                                font-size: 12px;
                            }

                            &:after {
                                content: none;
                            }

                            &:hover {
                                color: ${colors.black1};
                            }

                            @media(max-width: 991px) {
                                padding-right : 10px;
                            }
                        }

                        ul.dropdown {
                            position  : absolute;
                            left      : -10px;
                            top       : 100%;
                            min-width : 190px;
                            background: #fff;
                            text-align: left;
                            padding   : 0;
                            border-radius : 0 0 5px 5px;
                            transition : 0.2s ease;
                            opacity         : 0;
                            transform       : scaleY(0);
                            visibility      : hidden;
                            z-index         : 999;
                            transform-origin: center top 0;

                            li.nav-item {
                                position: relative;

                                a.nav-link {
                                    font-size     : 13px;
                                    color         : ${colors.text1};
                                    padding       : 10px 20px;
                                    text-transform: capitalize;
                                    margin-right  : 0;
                                    font-weight   : 400;
                                    border-bottom : 1px solid ${colors.border1};

                                    &:hover {
                                        color: ${colors.green};

                                        i {
                                            color: #fff;
                                        }
                                    }

                                    i {
                                        float     : right;
                                        margin-top: 4px;
                                    }
                                }

                                &:last-child {
                                    margin-left: 0;

                                    a.nav-link {
                                        border-bottom: none;
                                    }
                                }

                                ul.dropdown2 {
                                    position  : absolute;
                                    top       : 0;
                                    left      : 100%;
                                    min-width : 180px;
                                    background: #fff;
                                    border    : 1px solid ${colors.border1};
                                    transition : 0.2s ease;
                                    opacity         : 0;
                                    transform       : scaleY(0);
                                    visibility      : hidden;
                                    z-index         : 999;
                                    transform-origin: center top 0;
                                }

                                &:hover {
                                    ul.dropdown2 {
                                        opacity   : 1;
                                        transform : scaleY(1);
                                        visibility: visible;
                                    }
                                }
                            }
                        }

                        &:hover {
                            ul.dropdown {
                                opacity   : 1;
                                transform : scaleY(1);
                                visibility: visible;
                            }
                        }
                    }
                }

                ul.search-cart-bar {
                    li.search-box {
                        i.close-btn {
                            position : absolute;
                            top      : 25px;
                            right    : -12px;
                            font-size: 26px;
                            color    : ${colors.green};
                            cursor   : pointer;
                        }
                    }

                    li.cart-box {
                        a.nav-cart {
                            padding: 18px 0 0 10px;

                            i {
                                font-size: 20px;
                                color    : ${colors.border1};
                                line-height: 17px;
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 0 20px;
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }
`;