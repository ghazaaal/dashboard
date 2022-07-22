import React from 'react';
import Modal from 'react-modal';

export default function CustomModal({
  isOpen,
  closeModal,
  children,
  shouldCloseOnOverlayClick = true,
  background,
}) {
  const customModal = {
    content: {
      width: '500px',
      right: 'auto',
      bottom: 'auto',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: background || '#ffffff',
      border: 'solid 1px  #818a91',
      padding:'0'
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.25)',
      zIndex: 1000,
    },
  };

  return (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customModal}
          contentLabel="Modal"
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        >
          {children}
        </Modal>
  );
}
