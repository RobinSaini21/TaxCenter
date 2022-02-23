import {
  USER_IS_INDIAN,
  USER_IS_NOT_ORDINART,
  USER_IS_NRI,
} from "../actions/ResidentActions";

const initialState = {
  userisIndian: null,
  userisnri: false,
  userisnotordinart: false,
};

const ResidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_IS_INDIAN:
      return {
        ...state,
        userisIndian: true,
      };
    case USER_IS_NRI:
      return {
        userisnri: true,
      };
    case USER_IS_NOT_ORDINART:
      return {
        ...state,
        userisnotordinart: true,
      };

    default:
      return state;
  }
};
export default ResidentReducer;
