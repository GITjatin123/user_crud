import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import Container from 'react-bootstrap/Container';
import {Navbar,Nav, Button} from 'react-bootstrap';
import {Offcanvas} from "react-bootstrap";

export const Header = () => {
    const router = useRouter();
    return (
        <>
            <header className={"header nav-outer main-header header-style-two"}>
                <Navbar  expand="lg" className="mb-3">
                    <Container>
                        <Navbar.Brand href="#">TEAMWORK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Offcanvas id="navbarScroll" >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 mb-0 custom-navbar-css">
                                    <Link href="/dashboard">Dashboard</Link>
                                    <Link href="/profile">Profile</Link>
                                    <Button className={"logoutBtn"} onClick={async () => {
                                        await signOut(
                                            {redirect:false}
                                        )
                                        router.push('/login');
                                    }}>Log out</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}