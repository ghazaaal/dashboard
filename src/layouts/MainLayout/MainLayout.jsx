import React from 'react';
import {Container, Main} from "./style";
import Header from "./components/Header";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";

export default function MainLayout({children}) {
    return (
        <Container>
            <Header/>
            <Main>
                <DesktopNavbar/>
                {children}
            </Main>
        </Container>

    );
}
