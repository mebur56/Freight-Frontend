import { all } from "redux-saga/effects"
import uploadSaga from "../features/uploadPage/sagas"
import freightsSaga from "../features/freightsPage/sagas"


function* rootSaga() {
    yield all(
        [
            uploadSaga(),
            freightsSaga(),
        ]
    )
}

export default rootSaga 