"use client"
import {useContext, useEffect, useState,} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Image from "next/image";
import CustomMyImg2 from "../../../public/assets/images/welcome_one_person_photo_1704848548.jpg";
import {capitalizeFirstLetter} from "@/helper/textHelper.js"
import styles from "../page.module.css"
import {UserContext} from '@/context/UserContext'
export default function Profile() {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const {checkLogin} = useContext(UserContext)
    // console.log(checkLogin)
    useEffect(() => {
        checkLogin();
    }, []);
    useEffect( () => {
        fetch('/api/ServerSession/').then((res) => res.json()).then((userData) => {
            if (userData.error) {
                setError(userData.error)
            } else {
                setData(userData)
            }
        }).catch((err)=>setError('Something went wrong ' , err))
    }, []);
    return (
        <>

            <Header/>
            <section className="page-title"
                     style={{backgroundImage: 'url(assets/images/banner/banner_1704766456.jpg)'}}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title"> {data ? "welcome to profile".toUpperCase() : error}</h1>
                        <ul className="page-breadcrumb">
                            <li>{data?.name}</li>
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
                                            {capitalizeFirstLetter(data?.name)}
                                        </span>
                                    </h5>
                                </div>
                                <div className="inner">
                                    <h5 className="title">EMAIL :
                                        <span className="text ms-1">
                                            {capitalizeFirstLetter(data?.email)}
                                        </span>
                                    </h5>
                                </div>
                                <div className="inner">
                                    <h5 className="title">PHONE :
                                        <span className="text ms-1">
                                            {capitalizeFirstLetter(data?.phone)}
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