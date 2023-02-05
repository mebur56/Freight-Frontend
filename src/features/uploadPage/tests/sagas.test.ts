import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { UploadRequest, uploadTypes } from '../interfaces';
import uploadSaga, { uploadFileSaga } from '../sagas';
import * as api from "../../../app/api"
import { AxiosResponse } from 'axios';
describe('Upload Sagas', () => {
    const genObject = uploadSaga();

    it('should take Latest upload request call and trigger uploadFileSaga', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest(uploadTypes.UPLOAD_REQUEST, uploadFileSaga));
    });

});


describe('Upload Sagas Request', () => {
    it('should call api and dispatch success action', async () => {

        const mockResponse: AxiosResponse = {
            data: "test",
            status: 201,
            statusText: '',
            headers: undefined,
            config: undefined
        }
        const uploadRequest = jest.spyOn(api, 'uploadFile')
            .mockImplementation(() => Promise.resolve(mockResponse));

        const dispatched: any[] = [];
        const mockUpload: UploadRequest = {
            type: uploadTypes.UPLOAD_REQUEST,
            payload: { fileForm: new FormData() }
        }
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, uploadFileSaga, mockUpload);

        expect(uploadRequest).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual({ type: uploadTypes.UPLOAD_SUCCESS });
        uploadRequest.mockClear();
    });

    it('should call api and dispatch failure action', async () => {
        const uploadRequest = jest.spyOn(api, 'uploadFile')
            .mockImplementation(() => Promise.reject());

        const dispatched: any[] = [];
        const mockUpload: UploadRequest = {
            type: uploadTypes.UPLOAD_REQUEST,
            payload: { fileForm: new FormData() }
        }
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, uploadFileSaga, mockUpload);

        expect(uploadRequest).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual({ type: uploadTypes.UPLOAD_FAILURE });
        uploadRequest.mockClear();
    });
})
