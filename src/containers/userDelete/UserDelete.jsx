import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { usersSelector } from '../../store/users/selectors';
import { deleteUserStartThunk } from '../../store/users/thunks';

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
        <div>
            ¿De verdad quieres borrar a : {user?.name}?
            <button onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default UserDelete
