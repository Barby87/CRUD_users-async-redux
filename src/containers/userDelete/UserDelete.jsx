import React, { useState, useEffect } from 'react';
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { usersSelector } from '../../store/users/selectors';
import { deleteUserStartThunk } from '../../store/users/thunks';
import { Col, Row } from 'antd';
import styles from './UserDelete.module.css';

const UserDelete = () => {
    const users = useSelector(usersSelector);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const user = users.filter((elem) => elem.id === parseInt(id))[0]
        setUser(user);
    }, [users, id])

    const handleDelete = () => {
        dispatch(deleteUserStartThunk(parseInt(id)));
        history.push('/');
    }

    return (
        <>
            <Row type="flex" justify="center" align="middle" className={styles.title_container}>
                <Col>
                    <h2>
                        ¿De verdad quieres borrar a {user?.name}?
                    </h2>
                </Col>
                
            </Row>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Button onClick={handleDelete} type="primary" danger>Borrar</Button>
                </Col>
            </Row>
        </>
    )
}

export default UserDelete
