import { initialStateUsers } from "../initialState";
import { 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    DELETE_USER_START, 
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE, 
    CREATE_USER_START, 
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE,
    UPDATE_USER_START, 
    UPDATE_USER_SUCCESS, 
    UPDATE_USER_FAILURE   
} from "./constants";

const usersReducer = ( state = initialStateUsers, action ) => {
    switch (action.type) {
        // Fetcg
        case FETCH_USERS_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                data: action.payload,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: 'failed',
                data: [],
            };
        // Delete
        case DELETE_USER_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                data: state.data.filter((user) =>  user.id !== parseInt(action.payload)),
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: 'failed',
                data: [],
        };
        // Create
        case CREATE_USER_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                // Guardando el nuevo elemento en el estado inicial
                data: [...state.data, action.payload]
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                isLoading: 'failed',
                data: []
            };
        // Update
        case UPDATE_USER_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                // Guardando el nuevo elemento en el estado inicial
                data: [...state.data, action.payload]
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading: 'failed',
                data: []
            };
        default:
            return state;
    }
}

export default usersReducer;