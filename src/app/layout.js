"use client"
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import './globals.css';
import {SessionProvider} from "next-auth/react";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";


export default function RootLayout({children}) {
    const router = useRouter();
    const [checklog, setChecklog] = useState(true)
    useEffect(() => {
        const checkLogin = async () => {
            try {
                const res = await fetch('/api/ServerSession');
                if (res.status === 404) {
                    setChecklog(false)
                    await signOut(
                        {redirect: false}
                    )
                    router.push('/login')
                }
            } catch (err) {
                console.log('logout err', err)
            }
        }
        checkLogin();
    }, [checklog]);
    return (
        <html lang="en">
        <Head>
            {/*<script src={'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'}></script>*/}
        </Head>
        <body>
        <SessionProvider>
            {children}
        </SessionProvider>
        <div className="scroll-to-top scroll-to-target" data-target="html" style={{display: 'block'}}>
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        </div>
        </body>
        </html>
    );
}


