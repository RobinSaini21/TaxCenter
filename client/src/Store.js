import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./Store/Reducer";
import pdfReducer from "./Store/reducers/PdfReducer";
import ResidentReducer from "./Store/reducers/ResidentReducer";
import form16Reducer from "./Store/reducers/From16Reducer";
import apiReducer from "./Store/reducers/ApiReducer";

const rootReducer = combineReducers({
    form: form16Reducer,
    auth: authReducer,
    pdf: pdfReducer,
    Resident: ResidentReducer,
    api: apiReducer
})



const persistConfig = {
    key: 'persist-store',
    storage
}

 const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    )
   export const persistor = persistStore(store)
store.subscribe(() => {
     console.log("Store change!", store.getState())
})

export default store;
