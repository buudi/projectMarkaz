import React, { useEffect } from 'react';
import { Styles } from "./styles/search.js";

function Search() {
    useEffect(() => {
        const searchTrigger = document.getElementById("search-trigger");

        if (searchTrigger) {
            const searchOverlay = document.getElementById("search-overlay");
            const searchWrap = document.getElementById("search-wrap");
            const searchExit = document.getElementById("search-close");

            searchTrigger.addEventListener("click", function (e) {
                e.preventDefault();
                searchWrap.classList.add("active");
            });

            searchOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                searchWrap.classList.remove("active");
            });

            searchExit.addEventListener("click", function (e) {
                e.preventDefault();
                searchWrap.classList.remove("active");
            });
        }
    });

    return (
        <Styles>
            {/* Search Box */}
            <a href={process.env.PUBLIC_URL + "/"} className="nav-link nav-search" id="search-trigger">
                <i className="las la-search"></i>
            </a>
            {/* Fullscreen search */}
            <div className="search-wrap" id="search-wrap">
                <div className="search-overlay custom-overlay" id="search-overlay"></div>
                <div className="search-inner">
                    <form method="get" className="search-form">
                        <input type="search" name="search" placeholder="Type and hit enter...." />
                        <i className="las la-times close-btn" id="search-close"></i>
                    </form>
                </div>
            </div>
        </Styles>
    )
}

export default Search
