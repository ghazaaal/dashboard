import React, {useState} from 'react';
import {ReactComponent as TriangleIcon} from '../../../../assets/svg/triangle.svg';
import {ReactComponent as MenuIcon} from '../../../../assets/svg/menu.svg';
import {Container, MenuIconWrapper, Menu, ActionWrapper, GhostArea} from "./style";
import CustomModal from "../../../../components/CustomModal/CustomModal";
import DeleteActionModal from "./DeleteAction";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { userEditedArticle} from "../../../../reducers/userSlice";
import ReactDom from "react-dom";

export default function ActionsMenu(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


    const toggleActionsMenu = () => {
        setIsActionsMenuOpen((prevState) => !prevState);
    };
    const actions = [
        {
            id: 1,
            actionName: 'Edit',
        },
        {
            id: 2,
            actionName: 'Delete',
        },
    ];


    const actionFunctionToggle = async (id) => {
        if (id === 2) {
            setIsDeleteModalOpen(!isDeleteModalOpen)
        }
        if (id === 1) {
            dispatch(userEditedArticle(props.record));
            history.push(`/edit/${JSON.parse(localStorage.getItem('editedArticle')).slug}`);
        }
        setIsActionsMenuOpen(false)
    }


    return (
        <Container>
            <MenuIconWrapper onClick={toggleActionsMenu}>
                <MenuIcon/>
                <TriangleIcon/>
            </MenuIconWrapper>

            <Menu isMenuOpen={isActionsMenuOpen}>
                {actions.map((item) => (
                    <ActionWrapper key={item.id} onClick={() => actionFunctionToggle(item.id)}>
                        {item.actionName}
                    </ActionWrapper>
                ))}
            </Menu>

            <CustomModal
                isOpen={isDeleteModalOpen}
                closeModal={() => setIsDeleteModalOpen(false)}
            >
                <DeleteActionModal closeModal={() => setIsDeleteModalOpen(false)} slug={props.record.slug}
                                   callBackForModal={props.callBackForModal}/>
            </CustomModal>
            {ReactDom.createPortal(
                <GhostArea isOpen={isActionsMenuOpen} onClick={() => setIsActionsMenuOpen(false)}/>,
                document.body
            )}
        </Container>
    );
}
