import React from 'react';
import {validatorSchema} from '../../services/validations/fromValidator';
import useForm from '../../services/hooks/useForm';
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import {register} from "../../services/api/user";
import {
    Container,
    Desk,
    Input,
    LogoWrapper,
    RegisterButton,
    RegisterTextWrapper,
    RegisterWrapper,
    SubmitButton
} from "../Login/style";
import {useHistory} from "react-router-dom";

export default function Register() {
    const history = useHistory();

    const stateSchema = {
        user: {value: '', error: ''},
        email: {value: '', error: ''},
        password: {value: '', error: ''},
    };

    const stateValidatorSchema = Object.keys(stateSchema).reduce((acc, cur) => {
        acc[cur] = validatorSchema[cur];
        return acc;
    }, {});

    function onSubmitForm() {
        if (errors.email.length < 1 && errors.password.length < 1 && errors.user.length < 1) {
            register(values.user, values.email, values.password).then((result) => {
                if (result) history.push('/login')
            });

        }

    }


    const {values, errors, dirty, handleOnChange, handleOnBlur, handleOnSubmit} = useForm(
        stateSchema,
        stateValidatorSchema,
        onSubmitForm
    );

    const inputs = [
        {
            id: 1,
            name: 'user',
            value: values.user,
            label: 'User',
            error: errors.user && dirty.user,
            errorMessage: errors.user,
        },
        {
            id: 2,
            name: 'email',
            value: values.email,
            label: 'Email',
            error: errors.email && dirty.email,
            errorMessage: errors.email,
        },
        {
            id: 3,
            name: 'password',
            value: values.password,
            label: 'Password',
            error: errors.password && dirty.password,
            errorMessage: errors.password,
            type: 'password',
        },
    ];

    function renderInputs() {
        return inputs.map((item) => {
            return (
                <Input key={item.id} error={item.error}>
                    <GeneralInput
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        error={item.error}
                        errorMessage={item.errorMessage}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        type={item.type}
                        autoComplete={item.autoComplete}
                        disabled={item.disabled}
                    />
                </Input>
            );
        });
    }

    return (
        <Container>
            <Desk>
                <LogoWrapper>
                    Register
                </LogoWrapper>

                {renderInputs()}

                <SubmitButton onClick={handleOnSubmit}>
                    Register
                </SubmitButton>

                <RegisterWrapper>
                    <RegisterTextWrapper>
                        Already Registered?
                    </RegisterTextWrapper>
                    <RegisterButton onClick={() => history.push('/login')}>
                        Login
                    </RegisterButton>

                </RegisterWrapper>
            </Desk>
        </Container>
    );
}
