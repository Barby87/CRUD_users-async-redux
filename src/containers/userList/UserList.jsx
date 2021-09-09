import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/users/selectors';
import { fetchUsersStartThunk } from '../../store/users/thunks';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import UsersTable from '../../components/usersTable/UsersTable';
import styles from './UserList.module.css';

const UserList = () => {
    const users = useSelector(usersSelector);
    const { isLoading } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchUsersStartThunk());
    }, [isLoading, dispatch]);

    return isLoading === 'loading' ? (
            <LoadingSpinner/>
        ) : (
           <>
                <Row type="flex" justify="center" className={styles.title_wrapper}>
                    <Col>
                        <h1>Lista de usuarios</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <UsersTable data={users}/>
                    </Col>
                </Row>
           </>
        )
}

export default UserList;
