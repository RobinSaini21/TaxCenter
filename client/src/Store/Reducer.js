import {LOGIN_SUCCESS,REGISTER_SUCCESS,SIGN_OUT,LOGIN_SUCCESS_FAILED,USER_DB_ID} from './actions/AuthActions';


const initialState = {
    loading: false,
    userLoggedIn: false,
    userDetails: null,
    auth_token: null,
    authError: '',
    userDb_Id: null,
  };



const authReducer = (state = initialState,action) => {
switch (action.type){
    case REGISTER_SUCCESS:
        return {
            ...state,
            userLoggedIn: true,
            auth_token: action.payload.data.auth_token,
            userDetails: action.payload.data.email
        }
        case  LOGIN_SUCCESS:
       return {
        ...state,
        userLoggedIn: true,
        auth_token: action.payload.data.auth_token,
        userDetails: action.payload.data.email

    }
    case  LOGIN_SUCCESS_FAILED:
        return {
         ...state,
         userLoggedIn: false,
         auth_token: null,
         userDetails: null
 
     }

     case USER_DB_ID:
         return{
             ...state,
             userDb_Id: action.payload.data
         }
    case SIGN_OUT:
        return{
            ...state,
            userLoggedIn: false,
            auth_token: null,
            userDetails: null,
            userDb_Id: null
        }
        default: return state
 
    }

}
export default authReducer;



