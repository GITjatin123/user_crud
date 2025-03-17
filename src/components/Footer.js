import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstitution} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-6"></div>
                <div className="footer-upper">
                    <div className="auto-container">
                        <div className="row">
                            <div className="contact-info-block col-lg-4 col-md-4 col-sm-4">
                                <div className="logo">
                                    <Link href="/" className="fw-bold fs-3">
                                        TEAMWORK
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5  col-sm-5 right-div">
                                <h4>WORK WITH BEST TEAM</h4>
                            </div>
                            <div className="col-lg-3 col-md-3  col-sm-3 right-div">
                                <button type="submit" className="theme-btn btn-style-two hover-light"><span
                                    className="btn-title">Message</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Widgets Section*/}
                {/*<div className="widgets-section">*/}
                {/*    <div className="auto-container">*/}
                {/*        <div className="row">*/}
                {/*            /!* Footer COlumn *!/*/}
                {/*            <div className="footer-column col-xl-3 col-lg-3 col-md-3">*/}
                {/*                <div className="footer-widget about-widget">*/}
                {/*                    <h5 className="widget-title">Newsletter</h5>*/}

                {/*                    <div className="widget-content">*/}
                {/*                        /!*      <div className="text">Welcome to our digital agency. We hope you will love our website and soon get some awesome services from us.</div>*!/*/}

                {/*                        <div className="subscribe-form">*/}
                {/*                            <form action="">*/}
                {/*                                <input type="hidden" name="_token"*/}
                {/*                                       defaultValue="YGPuT5irLvFtK1E4vPcLUgerwdTG0j2RQ6u0Df6w"*/}
                {/*                                       autoComplete="off"/>*/}
                {/*                                <div className="form-group">*/}
                {/*                                    <input type="email" name="email" className="email"*/}
                {/*                                           defaultValue=""*/}
                {/*                                           placeholder="Email Address" required=""*/}
                {/*                                           autoComplete="off"/>*/}
                {/*                                </div>*/}
                {/*                                <div className="form-group">*/}
                {/*                                    <button type="submit"*/}
                {/*                                            className="theme-btn btn-style-one hover-light"><span*/}
                {/*                                        className="btn-title">Subscribe</span></button>*/}
                {/*                                </div>*/}
                {/*                            </form>*/}
                {/*                        </div>*/}
                {/*                        <ul className="social-icon-two">*/}
                {/*                            <li><Link href="#"><FontAwesomeIcon icon={faInstitution}></FontAwesomeIcon></Link></li>*/}

                {/*                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>*/}


                {/*                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>*/}


                {/*                            <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>*/}
                {/*                        </ul>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="footer-column col-xl-1 col-lg-1 col-md-1 ">*/}
                {/*            </div>*/}
                {/*            /!* Footer Column *!/*/}
                {/*            <div className="footer-column col-xl-4 col-lg-4 col-md-4 col-sm-6">*/}
                {/*                <div className="widget links-widget">*/}
                {/*                    <h5 className="widget-title">Explore</h5>*/}
                {/*                    <div className="widget-content">*/}
                {/*                        <ul className="user-links two-column">*/}
                {/*                            <li><Link href="/about">About</Link></li>*/}
                {/*                            <li><Link href="">Team Members</Link></li>*/}
                {/*                            <li><Link href="">Services</Link></li>*/}
                {/*                            <li><Link href="">Testimonials</Link></li>*/}
                {/*                            <li><Link href="">FAQ</Link></li>*/}
                {/*                            <li><Link href="">Contact</Link></li>*/}
                {/*                            <li><Link href="">Pricing</Link></li>*/}
                {/*                        </ul>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="footer-column col-xl-4 col-lg-4 col-md-4 col-sm-6">*/}
                {/*                <div className="widget newsletter-widget">*/}
                {/*                    <h5 className="widget-title">Contact</h5>*/}
                {/*                    <div className="widget-content">*/}
                {/*                        <div className="contact-info-block">*/}
                {/*                            <div className="inner">*/}
                {/*                                <i className="icon fa fa-phone-square"></i>*/}
                {/*                                <span className="sub-title">Call Anytime</span>*/}
                {/*                                <div className="text"><Link href="tel:++92 (8800) -89 8630">+91 (1234)*/}
                {/*                                    45 7890</Link></div>*/}
                {/*                            </div>*/}
                {/*                            <div className="inner">*/}
                {/*                                <i className="icon fa fa-envelope"></i>*/}
                {/*                                <span className="sub-title">Send Email</span>*/}
                {/*                                <div className="text"><Link*/}
                {/*                                    href="mailto:needhelp@company.com">teamwork@company.com</Link>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="inner">*/}
                {/*                                <i className="icon fa fa-map-marker"></i>*/}
                {/*                                <span className="sub-title">Address</span>*/}
                {/*                                <div className="text">Ludhiana, Punjab, Ind</div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}

                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="footer-bottom">*/}
                {/*    <div className="auto-container">*/}
                {/*        <div className="copyright-box">*/}
                {/*            <div className="copyright-text">Copyright © <span id="current-date"></span></div>*/}
                {/*            <div className="privacy-policy-text">*/}
                {/*                <Link href="">Privacy Policy</Link>*/}
                {/*                <Link href="">Terms of Use</Link>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </footer>
        </>
    )
}