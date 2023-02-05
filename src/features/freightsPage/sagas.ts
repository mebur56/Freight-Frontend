import { all, AxiosResponse } from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as api from "../../app/api"
import { FreightsFailureAction, FreightsSuccessAction } from "./action"
import { FreightsRequest, freightsTypes } from "./interfaces"


export function* getFreightsSaga(action: FreightsRequest) {
    try {
        const response: AxiosResponse = yield call(api.getFreights, action.payload?.filterType, action.payload?.filterText)
        switch (response.status) {
            case 200:
                yield put(FreightsSuccessAction(response.data))
                break;
            case 204:
                yield put(FreightsSuccessAction([]))
                break;
            default:
                FreightsFailureAction()

        }
    }
    catch (e) {
        yield put(
            FreightsFailureAction()
        )
    }
}

function* freightsSaga() {
    yield takeLatest(freightsTypes.FREIGHTS_REQUEST, getFreightsSaga)
}

export default freightsSaga