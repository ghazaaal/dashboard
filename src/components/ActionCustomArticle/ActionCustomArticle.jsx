import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {toast} from 'react-toastify';
import {validatorSchema} from "../../services/validations/fromValidator";
import {createArticle, updateArticle} from "../../services/api/articles";
import {userClearEditedArticle} from "../../reducers/userSlice";
import pages from "../../services/routes/pages";
import useForm from "../../services/hooks/useForm";
import GeneralInput from "../GeneralInput/GeneralInput";
import {getAllTags} from "../../services/api/tags";
import {
    Container,
    Desk,
    Input,
    LeftWrapper,
    RightWrapper,
    TitleWrapper,
    CheckBoxWrapper,
    CheckBoxInputWrapper, TagsListWrapper, SubmitButton
} from './style';

export default function ActionCustomArticle({actionName, pageTitle}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {editedArticle} = useSelector((state) => state.user);
    const [checked, setChecked] = useState([]);

    const stateSchema = {
        title: {value: actionName === 'edit' ? editedArticle.title : '', error: ''},
        description: {value: actionName === 'edit' ? editedArticle.description : '', error: ''},
        body: {value: actionName === 'edit' ? editedArticle.excerpt : '', error: ''},
        tagList: {value: actionName === 'edit' ? editedArticle.tags : '', error: ''},
    };

    const stateValidatorSchema = Object.keys(stateSchema).reduce((acc, cur) => {
        acc[cur] = validatorSchema[cur];
        return acc;
    }, {});

    const submitEditArticle = () => {
        const newValues = {}
        Object.keys(stateSchema).map(item => {
            if (values[item] !== stateSchema[item].value && item !== 'tagList') {
                newValues[item] = values[item]
            }
            if (item === 'tagList') {
                const newTags = [];
                const filteredArray = checked.filter(function (eachTag) {
                    return eachTag.checked === true;
                });
                filteredArray.map((eachItem) => {
                    newTags.push(eachItem.name)
                })
                newValues[item] = newTags;
            }
        })
        updateArticle(newValues, editedArticle.slug).then(() => {
            dispatch(userClearEditedArticle());
            history.push(pages.articles);
            toast.success('Well done! Article updated successfuly')
        });
    }

    const submitCreateArticle = () => {
        values['tagList'] = initializeNewTags();
        createArticle(values).then(() => {
            history.push(pages.articles);
            toast.success('Well done! Article created successfuly')
        });
    }

    function onSubmitForm() {
        switch (actionName) {
            case 'edit':
                submitEditArticle();
                break

            case 'create':
                submitCreateArticle();
                break;

            default:
                return null;
        }
    }

    let {values, errors, dirty, handleOnChange, handleOnBlur, handleOnSubmit} = useForm(
        stateSchema,
        stateValidatorSchema,
        onSubmitForm
    );

    console.log(values)

    const inputs = [
        {
            id: 1,
            name: 'title',
            value: values.title,
            label: 'title',
            error: errors.title && dirty.title,
            errorMessage: errors.title,
        },
        {
            id: 2,
            name: 'description',
            value: values.description,
            label: 'description',
            error: errors.description && dirty.description,
            errorMessage: errors.description,
        },
        {
            id: 3,
            name: 'body',
            value: values.body,
            label: 'body',
            error: errors.body && dirty.body,
            errorMessage: errors.body,
        },
    ];


    function renderInputs() {
        return inputs.map((item) => {
            return (
                <Input key={item.id} isBody={item.name}>
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

    const initializeNewTags = () => {
        const newTags = [];
        checked.map(item => {
            if (item.checked)
                newTags.push(item.name)
        })
        return newTags;
    }


    const handleChange = ({name, checked}) => {
        setChecked((previousChecked) => {
            return previousChecked.map(item => {
                if (item.name === name) {
                    item.checked = checked
                }
                return item
            })
        })
    }

    function renderTags() {
        return checked?.map((item) => {
            return (
                <CheckBoxWrapper>
                    <input type="checkbox"
                           checked={item.checked}
                           onChange={() => handleChange({...item, checked: !item.checked})}
                    />
                    <label>
                        {item.name}
                    </label>
                </CheckBoxWrapper>

            );
        });
    }


    useEffect(() => {
        const tempList = []
        getAllTags().then((allTags) => {
            allTags.map((item, index) => {
                if (editedArticle?.tags?.indexOf(item) > -1) {
                    tempList.push({
                        name: item,
                        checked: true
                    })
                } else {
                    tempList.push({
                        name: item,
                        checked: false
                    })
                }

            })
            setChecked(tempList)
        })
    }, []);

    return (
        <Container>
            <TitleWrapper>
                {pageTitle}
            </TitleWrapper>
            <Desk>
                <LeftWrapper>
                    {renderInputs()}
                    <SubmitButton onClick={handleOnSubmit}>
                        Submit
                    </SubmitButton>
                </LeftWrapper>
                <RightWrapper>
                    <CheckBoxInputWrapper>
                        <GeneralInput
                            name='tagList'
                            value={initializeNewTags().length > 0 ? initializeNewTags() : 'newTags'}
                            disabled
                            label={'Tags'}
                        />
                    </CheckBoxInputWrapper>

                    <TagsListWrapper>
                        {renderTags()}
                    </TagsListWrapper>

                </RightWrapper>
            </Desk>
        </Container>
    );
}
