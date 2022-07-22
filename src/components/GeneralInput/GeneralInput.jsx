import React from 'react';
import {Container, Error, Input, Border, Label} from './style';

export default function GeneralInput({
                                         name,
                                         value,
                                         onChange,
                                         onBlur,
                                         label,
                                         error,
                                         errorMessage,
                                         onClick,
                                         type = 'text',
                                         autoComplete = 'off',
                                         disabled = false,
                                     }) {

    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Border error={error}>
                <Input
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={name}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    label={label}
                    realType={type}
                    isBody={name}
                    contenteditable="true"
                />
            </Border>

            <Error error={error}>{error ? errorMessage : ''}</Error>
        </Container>
    );
}
