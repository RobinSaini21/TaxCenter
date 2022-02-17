import {LOGIN_SUCCESS,REGISTER_SUCCESS,SIGN_OUT} from './actions/AuthActions';



// const userDataFromStorage = localSt.getItem("user_data")
//   ? JSON.parse(localStorage.getItem("user_data"))
//   : null;
let lastId = 0;

const initialState = {
    loading: false,
    userLoggedIn: false,
    userDetails: null,
    auth_token: null,
    authError: '',
  };



const authReducer = (state = [initialState],action) => {
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
    case SIGN_OUT:
        return{
            ...state,
            userLoggedIn: false,
            auth_token: null,
            userDetails: null
        }
 
    }

}
export default authReducer;




// export default function myReducer(state =[initialState],action){
//     if(action.type === "ADD_DETAILS"){
//         return[
//             ...state,
//             {
//                 id: ++lastId,
//                 email: action.payload.email,
//                 password: action.payload.password,
//                 resolved: false
//             }
//         ];
       
//     }
//     else if(action.type === "SAVE_TOKEN" ){
//    return[
//     ...state,
//     {
//         token: action.payload.token,
//         userLoggedIn: true
//     }
//    ]
//     }
//     return state;
// }