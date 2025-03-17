'use client'
import 'keen-slider/keen-slider.min.css'
import React, {useEffect} from 'react'
import {useKeenSlider} from "keen-slider/react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useSession} from "next-auth/react";
import next from "next-auth";
export default function HomePage() {
    const {data: session} = useSession()
    console.log(session , 'clientSession')
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            items: 1,
            // margin: 10,
            // nav: true,
            autoplay: true,
            // autoplayTimeout: 3000,
            // autoplayHoverPause: true,
            // duration: 3000,
            // dragSpeed:200,
        },
        [
            // add plugins here
        ]
    )
    useEffect(() => {
        let interval = setInterval(() => {
            instanceRef.current?.next();
        }, 4000);
        return () => clearInterval(interval);
    }, [sliderRef]);
    return (
        <>
            <div className="page-wrapper">
                <Header/>
                <h1>{session?.user?.id}</h1>
                <h1>{session?.user?.name}</h1>
                <h1>{session?.user?.phone}</h1>
                <section className="banner-section navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider banner-carousel owl-carousel owl-theme default-navs">

                        <div className="slide-item keen-slider__slide number-slide1">
                            <div className="bg-image"
                                 style={{backgroundImage: 'url(assets/images/header-1.jpg)'}}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h1 className="title">
                                        Empowering Your<br/>
                                        Digital Journey<br/>
                                        With Innovation
                                    </h1>
                                    <div className="btn-box">
                                        <a href=""
                                           className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item keen-slider__slide number-slide1">
                            <div className="bg-image"
                                 style={{backgroundImage: 'url(assets/images/header-2.jpg)'}}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h1 className="title">
                                        Shaping the<br/>
                                        Perfect Solution<br/>
                                        For Your Business
                                    </h1>
                                    <div className="btn-box">
                                        <a href=""
                                           className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item keen-slider__slide number-slide1">
                            <div className="bg-image"
                                 style={{backgroundImage: 'url(assets/images/header-4.jpg)'}}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h1 className="title">
                                        Shaping the<br/>
                                        Perfect Solution<br/>
                                        For Your Business
                                    </h1>
                                    <div className="btn-box">
                                        <a href=""
                                           className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev"><span
                                className="fa fa-long-arrow-alt-left"></span></button>
                            <button type="button" role="presentation" className="owl-next"><span
                                className="fa fa-long-arrow-alt-right"></span></button>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
}
