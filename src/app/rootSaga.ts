import { all } from "redux-saga/effects"
import uploadSaga from "../features/uploadPage/sagas"


function* rootSaga() {
    yield all(
        [
            uploadSaga(),
        ]
    )
}

export default rootSaga 