import React from 'react';
import {Container, Title, TitleWrapper, MainWrapper, ButtonsWrapper, SaveButton, CancelButton} from "./style";
import {ReactComponent as CloseActionIcon} from '../../../../../assets/svg/close.svg';
import {deleteArticle} from "../../../../../services/api/articles";
import {toast} from "react-toastify";

export default function DeleteActionModal({closeModal, slug, callBackForModal}) {

    function onSubmit() {
        deleteArticle(slug).then(() => {
            closeModal();
            callBackForModal();
            toast.success('Article deleted successfuly');
        });
    }

    return (
        <Container>
            <TitleWrapper>
                <Title>Delete Article</Title>
                <CloseActionIcon onClick={closeModal}/>
            </TitleWrapper>

            <MainWrapper>
                Are you sure to delete Article?
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
