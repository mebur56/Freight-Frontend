import { uploadTypes } from "../interfaces"
import reducers from "../reducers"


it("Request Upload State return", () => {
  const requestState = {
    success: false,
    finished: false,
    pending: true,
  }
  const fileForm = new FormData();
  expect(
    reducers(undefined, {
      type: uploadTypes.UPLOAD_REQUEST,
      payload: { fileForm }

    })).toEqual(requestState)
})


it("Failure Upload State return", () => {
  const failureState = {
    success: false,
    finished: true,
    pending: false,
  }

  expect(reducers(undefined, {
    type: uploadTypes.UPLOAD_FAILURE
  })).toEqual(failureState)
})
it("Success Upload State return", () => {
  const successState = {
    success: true,
    finished: true,
    pending: false,
  }

  expect(reducers(undefined, {
    type: uploadTypes.UPLOAD_SUCCESS

  })).toEqual(successState)
})
