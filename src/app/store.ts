

import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        reducer: rootReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
    }).concat(sagaMiddleware)
}
)

sagaMiddleware.run(rootSaga);

export default store