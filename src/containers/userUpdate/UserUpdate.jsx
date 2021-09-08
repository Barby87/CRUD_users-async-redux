import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { usersSelector } from '../../store/users/selectors';
import { updateUserStartThunk } from '../../store/users/thunks';

const UserUpdate = () => {
    const { id } = useParams();
    const users = useSelector(usersSelector);
    console.log('users', users);
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const user = users.find(user => user.id === parseInt(id));
        debugger
        setName(user?.name);
    }, [users, id])

    const handleOnUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUserStartThunk({
            id: parseInt(id),
            name
        }));
        history.push('/');
    }

    return (
        <div>
            <form onSubmit={(e) => handleOnUpdate(e)}>
                Update id: {id}
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button type="submit">Actualizar</button>     
            </form>       
        </div>
    )
}

export default UserUpdate
