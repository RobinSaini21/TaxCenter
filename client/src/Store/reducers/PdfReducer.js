import { PDF_SUCCESS } from "../actions/PdfActions";

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
          
            default: 
            return state
        };
       
    }

    export default pdfReducer