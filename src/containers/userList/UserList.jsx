import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/users/selectors';
import { fetchUsersStartThunk } from '../../store/users/thunks';
import { Link } from 'react-router-dom';

const UserList = () => {
    const users = useSelector(usersSelector);
    const { isLoading } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoading === 'iddle') 
            dispatch(fetchUsersStartThunk());
    }, [isLoading, dispatch]);

    return isLoading === 'loading' ? (
        "...Loading"
        ) : (
            <>
                <div className="container">
                        <h1>Lista de usuarios</h1>
                        {users.map((user) => (<div className="row" key={user?.id}>
                            <div className="col-4">
                                {user.name}
                            </div>
                            <div className="col-3">
                                <Link to={`/users/delete/${user?.id}`}>Borrar</Link>
                                <Link to={`/users/update/${user?.id}`}>Editar</Link>
                            </div>
                        </div>))}
                </div>
            </>
        )
}

export default UserList;
