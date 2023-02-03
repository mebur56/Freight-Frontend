import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { FreightsRequestAction } from "./action";
import Table from "../../components/FreightsTable"


const FreightsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FreightsRequestAction())
  }, [])
  const { freights } = useSelector(
    (state: RootState) => state.reducer.freightsPage
  )
  useEffect(() => {
    
  }, [freights])
  return (
    <div >
      {freights?.length &&
        (<Table
          freights={freights}
        />
        )
      }
    </div>
  );
}

export default FreightsPage;
