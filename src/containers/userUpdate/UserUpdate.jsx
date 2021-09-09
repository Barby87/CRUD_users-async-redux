import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import FormUser from '../../components/formUser/FormUser';
import useFormUsers from '../../hooks/useFormUsers';
import { usersSelector } from '../../store/users/selectors';
import { updateUserStartThunk } from '../../store/users/thunks';
import styles from './UserUpdate.module.css';

const UserUpdate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const users = useSelector(usersSelector);

    const { formValues, setFormValues, handleChange } = useFormUsers({
        userName: '',
        userAlias: '',
        userEmail: '',
        userPhone: '',
        userCompany: '',
    });

    useEffect(() => {
        const user = users.find((user) => user.id === parseInt(id));
        setFormValues({
            userName: user?.name,
            userAlias: user?.username,
            userEmail: user?.email,
            userPhone: user?.phone,
            userCompany: user?.company?.name,
        })
    }, [users, id, setFormValues])

    const handleOnUpdate = () => {
        dispatch(updateUserStartThunk({
            id: parseInt(id),
            name: formValues.userName,
            username: formValues.userAlias,
            email: formValues.userEmail,
            phone: formValues.userPhone,
            company: { 
                name: formValues.userCompany,
            }
        }));
        history.push('/');
    }

    return (
        <>
            <Row type="flex" justify="center" className={styles.title_wrapper}>
                <Col>
                    <h1>Actualiza los datos de {formValues.userName}</h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col>
                    <FormUser
                        onFinish={(e) => handleOnUpdate(e)}
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

export default UserUpdate
