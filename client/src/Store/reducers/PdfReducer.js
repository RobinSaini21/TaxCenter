import { PDF_SUCCESS,PDF_CLEAR } from "../actions/PdfActions";

const initialState ={
    userPdf: false
}

const pdfReducer = (state = initialState,action) => {
    switch (action.type){
        case PDF_SUCCESS:
            return {
                ...state,
              userPdf: true
            }
            case PDF_CLEAR:
                return {
                ...state,
              userPdf: false
            }
          
            default: 
            return state
        };
       
    }

    export default pdfReducer