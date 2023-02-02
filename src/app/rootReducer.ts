import { combineReducers } from "redux";
import uploadPageReducers from "../features/uploadPage/reducers"


const rootReducer = combineReducers({
    uploadPage: uploadPageReducers
})

export default rootReducer