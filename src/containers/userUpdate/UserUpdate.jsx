import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { usersSelector } from '../../store/users/selectors';
import { updateUserStartThunk } from '../../store/users/thunks';

const UserUpdate = () => {
    const { id } =useParams();
    const users = useSelector(usersSelector);
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const user = users.find(user => {
            return user.id === parseInt(id);
        })
        setName(user.name);
    }, [id, users])

    const handleOnUpdate = () => {
        dispatch(updateUserStartThunk({
            id: parseInt(id),
            name
        }));
        history.push('/');
    }

    return (
        <div>
            Update id: {id}
            <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={e => handleOnUpdate()}>Actualizar</button>            
        </div>
    )
}

export default UserUpdate
