import React from 'react';
import {Container, TitleWrapper} from './style';
import DesktopTabs from '../../Tabs/DesktopTabs';

export default function DesktopNavbar() {
    return (
        <Container>
            <TitleWrapper>
                Post
            </TitleWrapper>

            <DesktopTabs/>
        </Container>
    );
}
