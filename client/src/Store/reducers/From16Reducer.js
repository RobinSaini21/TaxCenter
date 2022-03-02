import { FORM16_DATA, CLEAR_FORM16_DATA } from "../actions/PdfActions";

const initialState = {
    form16: false,
  };

const form16Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FORM16_DATA:
        return {
          form16: true,
        };
        case CLEAR_FORM16_DATA:
            return {
                form16: false
            }
  
      default:
        return state;
    }
  };
  

  export default form16Reducer;