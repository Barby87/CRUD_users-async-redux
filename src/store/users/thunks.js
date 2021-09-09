import { 
    createUserFailure, 
    createUserStart, 
    createUserSuccess, 
    deleteUserFailure, 
    deleteUserStart, 
    deleteUserSuccess, 
    fetchUsersFailure, 
    fetchUsersStart, 
    fetchUsersSuccess, 
    updateUserFailure, 
    updateUserStart,
    updateUserSuccess
} from "./actions";

// Fetch
export const fetchUsersStartThunk = () => {
    return async (dispatch, getState) => {
        // const {users} = getState();
        // if(users.data.length > 10) {
        //     return;
        // }
        dispatch(fetchUsersStart());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            dispatch(fetchUsersSuccess(data));            
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    }
}

// Delete
export const deleteUserStartThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserStart());
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            console.log('data', data);
            // Se despacha la acción deleteUserSuccess con el id para borrar del estado local el elemento que la api borró, una vez que tuvo éxito
            dispatch(deleteUserSuccess(id))            
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    }
}

// Create
export const createUserStartThunk = (user) => {
    return async (dispatch) => {
        dispatch(createUserStart());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', { 
                method: 'POST', 
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
            console.log('data', data)
            dispatch(createUserSuccess(user));
        } catch (error) {
            dispatch(createUserFailure(error.message));
        }
    }
}

// Update
export const updateUserStartThunk = (user) => {
    return async (dispatch, getState) => {
        dispatch(updateUserStart());
        try {
            
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, { 
                method: 'PUT', 
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
            console.log('data', data)
            dispatch(updateUserSuccess(user));
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    }
}

