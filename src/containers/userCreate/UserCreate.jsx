import React from 'react';
import { Col, Row} from 'antd';
import styles from './UserCreate.module.css';
import FormUser from '../../components/formUser/FormUser';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useFormUsers from '../../hooks/useFormUsers';
import { createUserStartThunk } from '../../store/users/thunks';

const UserCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { formValues, handleChange } = useFormUsers({
        userName: '',
        userAlias: '',
        userEmail: '',
        userPhone: '',
        userCompany: '',
    });

    const handleOnSave = () => {
        dispatch(createUserStartThunk({
            id: new Date().getTime(),
            name: formValues.userName,
            username: formValues.userAlias,
            email: formValues.userEmail,
            phone: formValues.userPhone,
            company: {
                name: formValues.userCompany,
            }
        }))
        history.push('/');
    }

    return (
        <>
            <Row type="flex" justify="center" className={styles.title_wrapper}>
                <Col>
                    <h1>Crea un usuario</h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col>
                    <FormUser
                        onFinish={handleOnSave}
                        handleChangeForm={handleChange}
                        onChangeInput={handleChange}
                        valueName={formValues?.userName}
                        valueAlias={formValues?.userAlias}
                        valueEmail={formValues?.userEmail}
                        valuePhone={formValues?.userPhone}
                        valueCompany={formValues?.userCompany}
                    />
                </Col>
            </Row>
        </>
    )
}

export default UserCreate;
