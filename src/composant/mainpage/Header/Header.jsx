import "./Header.css";

import logo from "../../../assets/logo.png";

import {
    FaFacebookF,
    FaDribbble,
    FaLinkedinIn,
    FaInstagram,
    FaBehance,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";

function Header() {

    return (

        <header className="main-head">

            <div className="top-bar">

                <div className="top-left">

                    <FaEnvelope />

                    <span>
                        <strong>Email us at :</strong> example@mail.com
                    </span>

                </div>

                <div className="top-right">

                    <FaFacebookF />
                    <FaDribbble />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaBehance />

                    <div className="line"></div>

                    <FaPhoneAlt />

                    <span>123-4567 890</span>

                </div>

            </div>

            <nav className="navbar">

                <div className="logo">

                    <img src={logo} alt="logo" />

                </div>

                <ul>

                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>OUR AGENTS</li>
                    <li>PROPERTIES</li>
                    <li>GALLERY</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                    <li>SEARCH</li>

                </ul>

                <button className="listing-btn">

                    Add Listing

                </button>

            </nav>

        </header>

    );

}

export default Header;