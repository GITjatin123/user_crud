"use client"
import {useContext, useEffect, useState,} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Image from "next/image";
import CustomMyImg2 from "../../../public/assets/images/welcome_one_person_photo_1704848548.jpg";
import {capitalizeFirstLetter} from "@/helper/textHelper"
import styles from "../page.module.css"
import {UserContext} from '../../context/UserContext'
export default function Profile() {
    const { userData, UserError,checkLogin } = useContext(UserContext);
    useEffect(() => {
        checkLogin()
    }, []);
    return (
        <>

            <Header/>
            <section className="page-title"
                     style={{backgroundImage: 'url(assets/images/banner/banner_1704766456.jpg)'}}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title"> {userData ? "welcome to profile".toUpperCase() : UserError}</h1>
                        <ul className="page-breadcrumb">
                            <li>{userData?.name}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-3 col-md-3 col-sm-2 order-2 wow fadeInRight">
                            <div>
                                <Image src={CustomMyImg2} alt=""/>
                            </div>
                        </div>
                        <div className={styles.customInfoDiv  + " content-column  col-lg-9 col-md-9 col-sm-10 order-2 wow fadeInRight"}>
                            <div className="info-box text-start">
                                <div className="inner">
                                    <h5 className="title">NAME :
                                        <span className="text ms-1">
                                            {capitalizeFirstLetter(userData?.name)}
                                        </span>
                                    </h5>
                                </div>
                                <div className="inner">
                                    <h5 className="title">EMAIL :
                                        <span className="text ms-1">
                                            {capitalizeFirstLetter(userData?.email)}
                                        </span>
                                    </h5>
                                </div>
                                <div className="inner">
                                    <h5 className="title">PHONE :
                                        <span className="text ms-1">
                                            {capitalizeFirstLetter(userData?.phone)}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <div className={"text-end"}>
                                <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Edit</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}