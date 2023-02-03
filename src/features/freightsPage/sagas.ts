import { all, AxiosResponse } from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as api from "../../app/api"
import { FreightsFailureAction, FreightsSuccessAction } from "./action"
import { freightsTypes } from "./interfaces"


function* freightsFileSaga() {
    try {
        const response: AxiosResponse = yield call(api.getFreights)
        yield put(FreightsSuccessAction(response.data))
    }
    catch (e) {
        yield put(
            FreightsFailureAction()
        )
    }
}

function* freightsSaga() {
    yield takeLatest(freightsTypes.FREIGHTS_REQUEST, freightsFileSaga)
}

export default freightsSaga