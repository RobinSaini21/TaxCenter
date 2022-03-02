import { API_DATA_SUCCESS } from "../actions/ApiActions";
const initialState = {
    isapidata: false,
    apidata: null
  };

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case API_DATA_SUCCESS:
        return {
            ...state,
            isapidata: true,
            apidata: action.payload.data
        };
      default:
        return state;
    }
  };

  export default apiReducer;