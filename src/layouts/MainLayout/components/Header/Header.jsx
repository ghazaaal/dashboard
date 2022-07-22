import React, {useState} from 'react';
import {Container, LogoutButton, WelcomeFirstSection, WelcomeSecondSection, WelcomeWrapper} from "./style";
import {useDispatch, useSelector} from "react-redux";
import CustomModal from "../../../../components/CustomModal/CustomModal";
import ActionCusomModal from "../../../../components/ActionCustomModal";
import {userLoggedOut} from "../../../../reducers/userSlice";

export default function Header() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

    const toggleLogoutModal = () => {
        setIsOpenLogoutModal((prevState) => !prevState);
    };


    const onSubmit = () => {
        dispatch(userLoggedOut());
    };

    return (
        <Container>
            <WelcomeWrapper>
                <WelcomeFirstSection>
                    Arvan Challenge
                </WelcomeFirstSection>

                <WelcomeSecondSection>
                    Welcome {user.username}
                </WelcomeSecondSection>
            </WelcomeWrapper>

            <LogoutButton onClick={toggleLogoutModal}>
                Logout
            </LogoutButton>

            <CustomModal isOpen={isOpenLogoutModal} closeModal={toggleLogoutModal}>
                <ActionCusomModal
                    title='Logout'
                    mainConcept='Are you sure want to logout?'
                    closeModal={toggleLogoutModal}
                    onSubmit={onSubmit}
                />
            </CustomModal>
        </Container>

    );
}
