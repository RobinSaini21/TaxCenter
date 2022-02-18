import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./Store/Reducer";
import pdfReducer from "./Store/reducers/PdfReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    pdf: pdfReducer
})



const persistConfig = {
    key: 'persist-store',
    storage
}

 const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
// rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   export const persistor = persistStore(store)
store.subscribe(() => {
     console.log("Store change!", store.getState())
})

export default store;
