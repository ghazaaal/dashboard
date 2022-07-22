import React from 'react';
import {Container, Title, TitleWrapper, MainWrapper, ButtonsWrapper, SaveButton, CancelButton} from "./style";
import {ReactComponent as CloseActionIcon} from '../../assets/svg/close.svg';


export default function ActionCusomModal({title, mainConcept, closeModal, onSubmit}) {
    return (
        <Container>
            <TitleWrapper>
                <Title>{title}</Title>
                <CloseActionIcon onClick={closeModal}/>
            </TitleWrapper>

            <MainWrapper>
                {mainConcept}
            </MainWrapper>

            <ButtonsWrapper>
                <CancelButton onClick={closeModal}>
                    No
                </CancelButton>
                <SaveButton onClick={onSubmit}>
                    Yes
                </SaveButton>
            </ButtonsWrapper>
        </Container>
    );
}
