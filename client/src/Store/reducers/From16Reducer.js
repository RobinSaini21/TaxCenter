import { FORM16_DATA, CLEAR_FORM16_DATA, USER_DETAILS } from "../actions/PdfActions";

const initialState = {
    form16: false,
    userDetails: false
  };

const form16Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FORM16_DATA:
        return {
            ...state,
          form16: true,
        };
        case CLEAR_FORM16_DATA:
            return {
                ...state,
                form16: false
            }
            case USER_DETAILS:
              return {
              ...state,
              userDetails: true
            }
  
      default:
        return state;
    }
  };
  

  export default form16Reducer;