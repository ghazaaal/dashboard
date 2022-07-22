import React from 'react';
import {ToastContainer, Flip} from 'react-toastify';

export default function GlobalToast() {
    return (
        <ToastContainer
            position="top-right"
            hideProgressBar
            autoClose={3000}
            closeButton={false}
            transition={Flip}
        />
    );
}
