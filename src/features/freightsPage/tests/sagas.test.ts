import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { filterTypes, Freight, FreightsRequest, freightsTypes } from '../interfaces';
import freightsSaga, { getFreightsSaga } from '../sagas';
import * as api from "../../../app/api"
import { Axios, AxiosResponse } from 'axios';
describe('Freight Sagas', () => {
    const genObject = freightsSaga();

    it('should take Latest freight request call and trigger getFreightsSaga', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest(freightsTypes.FREIGHTS_REQUEST, getFreightsSaga));
    });

});


describe('Freight Sagas Requests', () => {
    it('should call api and dispatch success action', async () => {


        const mockResponse: AxiosResponse = {
            data: "test",
            status: 200,
            statusText: '',
            headers: undefined,
            config: undefined
        }
        const freightSuccessRequest = jest.spyOn(api, 'getFreights')
            .mockImplementation(() => Promise.resolve(mockResponse))

        const dispatched: any[] = [];
        const mockFreight: FreightsRequest = {
            type: freightsTypes.FREIGHTS_REQUEST,
            payload: null
        }
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, getFreightsSaga, mockFreight);

        expect(freightSuccessRequest).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual({ type: freightsTypes.FREIGHTS_SUCCESS, payload: "test" });
        freightSuccessRequest.mockClear();
    });

    it('should call api and dispatch failure action', async () => {
        const freightFailureRequest = jest.spyOn(api, 'getFreights')
            .mockImplementation(() => Promise.reject());

        const dispatched: any[] = [];
        const mockFreight: FreightsRequest = {
            type: freightsTypes.FREIGHTS_REQUEST,
            payload: { filterType: filterTypes.DATE, filterText: "test" }
        }
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, getFreightsSaga, mockFreight);

        expect(freightFailureRequest).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual({ type: freightsTypes.FREIGHTS_FAILURE });
        freightFailureRequest.mockClear();
    });
})
