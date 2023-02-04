import { freightsTypes, Freight } from "../interfaces";
import reducers from "../reducers"


it("Request Freight State return", () => {
  const requestState = {
    success: false,
    finished: false,
    freights: [] as Freight[],
    pending: true,
  }
  expect(
    reducers(undefined, {
      type: freightsTypes.FREIGHTS_REQUEST
    })).toEqual(requestState)
})


it("Failure Freight State return", () => {
  const failureState = {
    success: false,
    finished: true,
    pending: false,
    freights: [] as Freight[],
  }

  expect(reducers(undefined, {
    type: freightsTypes.FREIGHTS_FAILURE
  })).toEqual(failureState)
})
it("Success Freight State return", () => {
    var freights: Freight[] = []
  const successState = {
    success: true,
    finished: true,
    pending: false,
    freights: freights,
  }

  expect(reducers(undefined, {
    type: freightsTypes.FREIGHTS_SUCCESS,
    payload: freights

  })).toEqual(successState)
})
