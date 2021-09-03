import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { createUserStartThunk } from '../../store/users/thunks';

const UserCreate = () => {
    const [ name, setName] = useInput('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnSave = (e) => {
        e.preventDefault();
        dispatch(createUserStartThunk({
            id: new Date().getTime(),
            name
        }))
        history.push('/');
    }

    return (
        <>
        <h2>Crea un usuario</h2>
        <div>
            <form onSubmit={handleOnSave}>
                <label>Nombre</label>
                <input
                    type="text"
                    class="form-control"
                    value={name}
                    onChange={setName}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>
                        
        </>
    )
}

export default UserCreate;
