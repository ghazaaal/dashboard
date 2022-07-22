import { useState, useEffect, useCallback } from 'react';

const VALUE = 'value';
const ERROR = 'error';
const REQUIRED_FIELD_ERROR = 'Required field';

/**
 * Determines a value if it's an object
 *
 * @param {object} value
 */
function is_object(value) {
    return typeof value === 'object' && value !== null;
}

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
function is_required(value, isRequired) {
    if (!value && isRequired) return REQUIRED_FIELD_ERROR;
    return '';
}

function get_prop_values(stateSchema, prop) {
    return Object.keys(stateSchema).reduce((accumulator, curr) => {
        accumulator[curr] = prop ? stateSchema[curr][prop] : !!stateSchema[curr][ERROR];

        return accumulator;
    }, {});
}

/**
 * Custom hooks to validate your Form...
 *
 * @param {object} stateSchema model you stateSchema.
 * @param {object} stateValidatorSchema model your validation.
 * @param {function} submitFormCallback function to be execute during form submission.
 */
function useForm(stateSchema = {}, stateValidatorSchema = {}, submitFormCallback) {
    const [values, setValues] = useState(get_prop_values(stateSchema, VALUE));
    const [errors, setErrors] = useState(get_prop_values(stateSchema, ERROR));
    const [dirty, setDirty] = useState(get_prop_values(stateSchema));

    const [isReadytoSubmit, setIsReadyToSubmit] = useState(false);

    const resetForm = useCallback(() => {
        setValues(get_prop_values(stateSchema, VALUE));
        setErrors(get_prop_values(stateSchema, ERROR));
        setDirty(get_prop_values(stateSchema));
        setIsReadyToSubmit(false);
    }, [stateSchema]);

    // Validate field in form
    const validateField = useCallback(
        (name, value) => {
            const validator = stateValidatorSchema;
            // Making sure that stateValidatorSchema name is same in stateSchema
            if (!validator[name]) return;

            const field = validator[name];

            let error;
            error = is_required(value, field.required);

            if (is_object(field.validator) && error === '') {
                const fieldValidator = field.validator;

                // Test the function callback if the value is meet the criteria
                const testFunc = fieldValidator.func;
                const errorIndex = +testFunc(value, values);
                error = fieldValidator.error[errorIndex];
            }
            // eslint-disable-next-line consistent-return
            return error;
        },
        [stateValidatorSchema, values]
    );

    const validateAllFields = useCallback(() => {
        Object.keys(values).forEach((name) => {
            setErrors((prevState) => ({
                ...prevState,
                [name]: validateField(name, values[name]),
            }));

            setDirty((prevState) => ({
                ...prevState,
                [name]: true,
            }));
        });

        setIsReadyToSubmit(true);
    }, [values, validateField]);

    // Wrapped in useCallback to cached the function to avoid intensive memory leaked
    // in every re-render in component
    const formHasError = useCallback(() => Object.values(errors).some((error) => error), [errors]);

    // Event handler for handling changes in input.
    const handleOnChange = useCallback(
        (event) => {
            const { name } = event.target;
            const { value } = event.target;

            if (!dirty[name]) setDirty((prevState) => ({ ...prevState, [name]: true }));
            if (errors[name])
                setErrors((prevState) => ({
                    ...prevState,
                    [name]: '',
                }));

            const validator = stateValidatorSchema;
            if (!validator[name]) return;
            const field = validator[name];

            if (value !== '' && is_object(field.restrictor)) {
                const fieldRestrictor = field.restrictor;
                const testFunc = fieldRestrictor.func;
                const errorIndex = +testFunc(value);

                if (!errorIndex) {
                    setValues((prevState) => ({ ...prevState, [name]: value }));
                }

                setErrors((prevState) => ({
                    ...prevState,
                    [name]: fieldRestrictor.error[errorIndex],
                }));
            } else {
                setValues((prevState) => ({ ...prevState, [name]: value }));
            }
        },
        [validateField]
    );

    // Event handler for handling validation on blur in input.
    const handleOnBlur = useCallback(
        (event) => {
            const { name } = event.target;
            if (dirty[name]) {
                const error = validateField(name, values[name]);
                setErrors((prevState) => ({ ...prevState, [name]: error }));
            }
        },
        [validateField]
    );

    useEffect(() => {
        // Making sure that there's no error in the state
        // before calling the submit callback function
        if (isReadytoSubmit && !formHasError()) {
            submitFormCallback(values);
        }
        setIsReadyToSubmit(false);
    }, [isReadytoSubmit]);

    const handleOnSubmit = useCallback(
        (event) => {
            event?.preventDefault();
            validateAllFields();
        },
        [validateAllFields]
    );

    // Event handler for change input on demand.
    const changeOnDemand = useCallback(
        /**
         *
         * @param {string} name
         * @param {string} value
         */
        (name, value) => {
            const error = validateField(name, value);

            setValues((prevState) => ({ ...prevState, [name]: value }));
            setErrors((prevState) => ({ ...prevState, [name]: error }));
            setDirty((prevState) => ({ ...prevState, [name]: true }));
        },
        [validateField]
    );

    return {
        values,
        errors,
        dirty,
        handleOnChange,
        handleOnBlur,
        handleOnSubmit,
        changeOnDemand,
        resetForm,
    };
}

export default useForm;
