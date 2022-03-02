import {
  PDF_SUCCESS,
  PDF_CLEAR,
  BASIC_SUCCSESS,
  EXTRACTED_DATA,
  ClEAR_USER_BASIC_DATA,

} from "../actions/PdfActions";

const initialState = {
  userPdf: false,
  userbasic: false,
  userform16data: null,
  userbasicdata: null,
  form16: false,
};

const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case PDF_SUCCESS:
      return {
        ...state,
        userPdf: true,
      };
    case PDF_CLEAR:
      return {
        ...state,
        userPdf: false,
      };
    case BASIC_SUCCSESS:
      return {
        ...state,
        userbasic: true,
        userbasicdata: action.payload.data,
      };
    case EXTRACTED_DATA:
      return {
        userform16data: action.payload.data,
      };
    case ClEAR_USER_BASIC_DATA:
      return {
        userbasicdata: null,
        userbasic: false,
      };

    default:
      return state;
  }
};



export default pdfReducer;
