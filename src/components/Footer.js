import React from 'react';
import "../Home.css";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">Something</h1>

                    <h2>Contact</h2>

                    <address>
                        5534 Somewhere In. The World 22193-10212

                        <a className="footer__btn" href="sweatkamal152@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Media</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="https://github.com/sweatkamal">Online</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Print</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Alternative Ads</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Technology </h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="https://github.com/sweatkamal">Hardware Design</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Software Design</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Digital Signage</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Automation</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Artificial Intelligence</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">IoT</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="https://github.com/sweatkamal">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Terms of Use</a>
                            </li>

                            <li>
                                <a href="https://github.com/sweatkamal">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2022 Something. All rights reserved.</p>

                    <div className="legal__links">
                        <span>Made by <span className="heart"><a href="https://github.com/sweatkamal">Sweat</a></span> remotely from Anywhere</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;