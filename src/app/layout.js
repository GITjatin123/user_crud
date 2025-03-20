"use client"
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import './globals.css';
import {SessionProvider} from "next-auth/react";
import {Theme} from "@/context/ThemeContext";
import {CheckUser} from "@/context/UserContext"

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            {/*<script src={'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'}></script>*/}
        </Head>
        <body>
        <SessionProvider>
            <CheckUser>
                <Theme>
                    {children}
                </Theme>
            </CheckUser>
        </SessionProvider>
        <div className="scroll-to-top scroll-to-target" data-target="html" style={{display: 'block'}}>
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        </div>
        </body>
        </html>
    );
}


