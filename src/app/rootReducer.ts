import { combineReducers } from "redux";
import uploadPageReducers from "../features/uploadPage/reducers"
import freightsPageReducers from "../features/freightsPage/reducers"


const rootReducer = combineReducers({
    uploadPage: uploadPageReducers,
    freightsPage: freightsPageReducers
})

export default rootReducer