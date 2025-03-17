"use client"
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAllergies, faShop} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import CustomMyImg from "../../../public/assets/images/welcome_one_photo1_1704823739.jpg";
import CustomMyImg2 from "../../../public/assets/images/welcome_one_person_photo_1704848548.jpg";
import {useState,useEffect} from "react";
import Link from "next/link";
export default function about() {
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch("/api/ServerSession").then((res) => res.json()).then((serverData) => {
            // console.log(serverData + 'server')
            if (serverData.error) {
                setError(serverData.error)
            } else {
                setData(serverData)
            }
        }).catch(() => setError('something went wrong'));
    },[])
    return (
      <>
          <Header />
          <section className="page-title" style={{backgroundImage: 'url(assets/images/banner/banner_1704766456.jpg)'}}>
              <div className="auto-container">
                  <div className="title-outer">
                      <h1 className="title"> {data ? "welcome to dashboard".toUpperCase() : error}</h1>
                      <ul className="page-breadcrumb">
                          <li>{data?.username}</li>
                      </ul>
                  </div>
              </div>
          </section>
          <section className="about-section">
              <div className="auto-container">
                  <div className="row">
                      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
                          <div className="inner-column">
                              <div className="sec-title">
                                  <span className="sub-title">Get to Know Us</span>
                                  <h2>The best digital marketing solutions</h2>
                                  <div className="text">
                                      There are many variations of passages of available but the majority have suffered
                                      alteration in some form, by injected hum randomised words which don't slightly.
                                  </div>
                              </div>
                              <div className="info-box">
                                  <div className="inner">
                                      <FontAwesomeIcon className='icon' icon={faShop}></FontAwesomeIcon>
                                      {/*<i className="icon flaticon-targeted-marketing"></i>*/}
                                      <h5 className="title">Leading in marketing</h5>
                                      <div className="text">
                                          Knowledge of technologies rules better than anyone which we apply in our daily work
                                      </div>
                                  </div>
                              </div>
                              <div className="info-box">
                                  <div className="inner">
                                      <FontAwesomeIcon className='icon' icon={ faAllergies}></FontAwesomeIcon>

                                      <h5 className="title">Expert developers</h5>
                                      <div className="text">
                                          Knowledge of technologies rules better than anyone which we apply in our daily work
                                      </div>
                                  </div>
                              </div>
                              <div className="other-info">
                                  <div className="author-info">
                                      <div className="inner">
                                          <figure className="thumb"><Image src={CustomMyImg2}
                                              alt=""/></figure>
                                          <h5 className="name">David Cooper</h5>
                                          <span className="designation">CEO and Co-Founder</span>
                                      </div>
                                  </div>
                                  <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></a>
                              </div>
                          </div>
                      </div>

                      <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                          <div className="image-box">
                              <span className="icon-dots bounce-y"></span>
                              <span className="icon-circle zoom-one"></span>
                              <figure className="image-1 wow fadeIn">
                                  <Image src={CustomMyImg} alt="" />
                              </figure>
                              <figure className="image-2 wow fadeIn" data-wow-delay="600ms">
                                  <Image src="/assets/images/welcome_one_photo2_1704823756.jpg" quality={100} width={377} height={233} alt="" />
                              </figure>
                              <div className="exp-box">
                                  <div className="inner">
                                      <i className="icon flaticon-promotion"></i>
                                      <span className="count">38+</span>
                                      <div className="text">Work Experience</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="services-section">
              <div className="bg-shape"></div>
              <div className="bg bg-pattern-1"></div>
              <div className="auto-container">
                  <div className="sec-title light">
                      <div className="row">
                          <div className="col-lg-7">
                              <span className="sub-title">OUR SERVICES</span>
                              <h2>Explore what services<br />
                                  we're offering</h2>
                          </div>
                          <div className="col-lg-5">
                              <div className="text">There are many variations of passages of available but majority alteration in
                                  some form, by humou or randomised words.
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image">
                                      <Image src={CustomMyImg}
                                      alt="App Development" /></figure>
                              </div>
                              <div className="content-box">
                                  <i className="icon flaticon-graphic-design"></i>
                                  <h5 className="title">App Development</h5>
                              </div>
                              <div className="hover-content">
                                  <i className="icon flaticon-graphic-design"></i>
                                  <h5 className="title"><a href="#">App
                                      Development</a></h5>
                                  <div className="text">Providing app development for your business.</div>
                              </div>
                          </div>
                      </div>
                      <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><Image
                                      src={CustomMyImg}
                                      alt="Data Analysis"/></figure>
                              </div>
                              <div className="content-box">
                                  <i className="icon flaticon-laptop"></i>
                                  <h5 className="title">Data Analysis</h5>
                              </div>
                              <div className="hover-content">
                                  <i className="icon flaticon-laptop"></i>
                                  <h5 className="title"><a href="#">Data
                                      Analysis</a></h5>
                                  <div className="text">Providing the data analysis for your business.</div>
                              </div>
                          </div>
                      </div>
                      <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><Image
                                      src={CustomMyImg}
                                      alt="Digital Marketing"/></figure>
                              </div>
                              <div className="content-box">
                                  <i className="icon flaticon-teaching"></i>
                                  <h5 className="title">Digital Marketing</h5>
                              </div>
                              <div className="hover-content">
                                  <i className="icon flaticon-teaching"></i>
                                  <h5 className="title"><a href="#">Digital
                                      Marketing</a></h5>
                                  <div className="text">Providing digital marketing for your business</div>
                              </div>
                          </div>
                      </div>
                      <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><Image
                                      src={CustomMyImg}
                                      alt="Product Crafting"/></figure>
                              </div>
                              <div className="content-box">
                                  <i className="icon flaticon-digital-services"></i>
                                  <h5 className="title">Product Crafting</h5>
                              </div>
                              <div className="hover-content">
                                  <i className="icon flaticon-digital-services"></i>
                                  <h5 className="title"><a href="#">Product
                                      Crafting</a></h5>
                                  <div className="text">Providing product development for your business.</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="team-section pt-10">
              <div className="auto-container">
                  <div className="sec-title text-center">
                      <span className="sub-title">MEET OUR TEAM MEMBERS</span>
                      <h2>Meet the professional team<br/>
                          behind the success</h2>
                  </div>
                  <div className="row">
                      <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="info-box">
                                  <h4 className="name"><a href="#">Mike
                                      Henderson</a></h4>
                                  <span className="designation">Managing Director</span>
                              </div>
                              <div className="image-box">
                                  <figure className="image"><a
                                      href="#"><Image
                                      src={CustomMyImg}
                                      alt="" /></a></figure>
                                  <div className="social-links">
                                      <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                      <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                                      <a href="https://www.linkedin.com" target="_blank"><i
                                          className="fab fa-linkedin-in"></i></a>
                                      <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                                  </div>
                                  <span className="share-icon fas fa-plus"></span>
                              </div>
                          </div>
                      </div>
                      <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="info-box">
                                  <h4 className="name"><a href="#">Kevin
                                      Martin</a></h4>
                                  <span className="designation">Chief Executive Officer</span>
                              </div>
                              <div className="image-box">
                                  <figure className="image"><a href="#">
                                      <Image src='/assets/images/welcome_one_photo1_1704823739.jpg' width={500} height={500}
                                      alt="welcome" />
                                  </a></figure>
                                  <div className="social-links">
                                      <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                      <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                                      <a href="https://www.linkedin.com" target="_blank"><i
                                          className="fab fa-linkedin-in"></i></a>
                                      <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                                  </div>
                                  <span className="share-icon fas fa-plus"></span>
                              </div>
                          </div>
                      </div>
                      <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                          <div className="inner-box">
                              <div className="info-box">
                                  <h4 className="name"><a href="#">Jason
                                      Cleaver</a></h4>
                                  <span className="designation">Human Resource Manager</span>
                              </div>
                              <div className="image-box">
                                  <figure className="image"><a
                                      href="#"><Image
                                      src={CustomMyImg}
                                      alt="" /></a></figure>
                                  <div className="social-links">
                                      <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                      <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                                      <a href="https://www.linkedin.com" target="_blank"><i
                                          className="fab fa-linkedin-in"></i></a>
                                      <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                                  </div>
                                  <span className="share-icon fas fa-plus"></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer />
      </>
    );
}