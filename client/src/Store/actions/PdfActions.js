export const PDF_SUCCESS = "PDF_SUCCESS";
export const PDF_CLEAR = "PDF_CLEAR";
export const BASIC_SUCCSESS = "BASIC_SUCCSESS";
export const EXTRACTED_DATA = "EXTRACTED_DATA";
export const USER_BASIC_DATA = "USER_BASIC_DATA";
export const ClEAR_USER_BASIC_DATA = "ClEAR_USER_BASIC_DATA";
export const FORM16_DATA = "FORM16_DATA";
export const CLEAR_FORM16_DATA = "CLEAR_FORM16_DATA"; 
export const USER_DETAILS = "USER_DETAILS";

export const pdfsuccess = () => ({
  type: PDF_SUCCESS,
});

export const pdfclear = () => ({
  type: PDF_CLEAR,
});

export const basicsuccsess = (data) => ({
  type: BASIC_SUCCSESS,
  payload: {
    data: data,
  },
});

export const extracteddata = (data) => ({
  type: EXTRACTED_DATA,
  payload: {
    data: data,
  },
});

export const clearuserbasicdata = () =>({
    type: ClEAR_USER_BASIC_DATA
})

export const form16datasuccess = () => ({
  type: FORM16_DATA
})

export const clearform16datasuccess = () => ({
  type: CLEAR_FORM16_DATA
})
