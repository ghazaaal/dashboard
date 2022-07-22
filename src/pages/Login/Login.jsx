import React from 'react';
import {
    SubmitButton,
    Container,
    Desk,
    Input,
    LogoWrapper, RegisterWrapper, RegisterButton, RegisterTextWrapper,
} from './style';
import {validatorSchema} from '../../services/validations/fromValidator';
import useForm from '../../services/hooks/useForm';
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import {login} from "../../services/api/user";
import {userLoggedIn} from "../../reducers/userSlice";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import {useKeyboardAndMouse} from "../../services/hooks/useKeyboardAndMouse";

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    const stateSchema = {
        email: {value: '', error: ''},
        password: {value: '', error: ''},
    };

    const stateValidatorSchema = Object.keys(stateSchema).reduce((acc, cur) => {
        acc[cur] = validatorSchema[cur];
        return acc;
    }, {});

    function onSubmitForm(formValues) {
        if (errors.email.length < 1 && errors.password.length < 1) {
            login(values.email, values.password).then((result) => {
                dispatch(userLoggedIn(result));
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
            name: 'email',
            value: values.email,
            label: 'Email',
            error: errors.email && dirty.email,
            errorMessage: errors.email,
        },
        {
            id: 2,
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

    const handleKeyup = (event) => {
        if (event.key === 'Enter') handleOnSubmit();
    };
    useKeyboardAndMouse(handleKeyup);

    return (
        <Container>
            <Desk>
                <LogoWrapper>
                    LOGIN
                </LogoWrapper>

                {renderInputs()}

                <SubmitButton onClick={handleOnSubmit}>
                    Login
                </SubmitButton>

                <RegisterWrapper>
                    <RegisterTextWrapper>
                        Don’t have account?
                    </RegisterTextWrapper>
                    <RegisterButton onClick={() => history.push('/register')}>
                        Register Now
                    </RegisterButton>

                </RegisterWrapper>
            </Desk>
        </Container>
    );
}
