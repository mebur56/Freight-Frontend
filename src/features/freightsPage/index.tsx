import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { FreightsRequestAction } from "./action";
import Table from "../../components/FreightsTable"
import { Chip, CircularProgress, MenuItem, Select, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styles from "./styles";
import { filterTypes } from "./interfaces";


const FreightsPage = () => {
  const dispatch = useDispatch()
  const [filterType, setFilterType] = useState(filterTypes.DRIVER as string)
  const [filterText, setFilterText] = useState('')
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    inputChanged()
  }, [filterText, filterType])


  const { freights, pending, success } = useSelector(
    (state: RootState) => state.reducer.freightsPage
  )
  const inputChanged = () => {

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      dispatch(FreightsRequestAction({ filterText, filterType }))
    }, 500)

    setTimer(newTimer)
  }

  return (
    <div className="column" style={styles.container}>
      <div className="row">
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <MenuItem value={filterTypes.DRIVER}>Motorista</MenuItem>
          <MenuItem value={filterTypes.DATE}>Data</MenuItem>
          <MenuItem value={filterTypes.ORIGIN}>Origem</MenuItem>
          <MenuItem value={filterTypes.DESTINATION}>Destino</MenuItem>
        </Select>
        <TextField
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value)

          }}
          placeholder="Procurar..." />
      </div>
      {!success ?
        (
          <div style={styles.centerContent}>
            <Chip
              avatar={<InfoIcon />}
              label={"Não foi possivél consultar os dados"}
            />
          </div>
        ) :
        pending ?
          (
            <div style={styles.centerContent}>
              <CircularProgress size={120} />
            </div>
          ) : freights?.length ?
            (
              <div style={styles.subscribeContainer}>
                <Table
                  freights={freights}
                />
              </div>
            ) :
            (
              <div style={styles.centerContent}>
                <Chip
                  avatar={<InfoIcon />}
                  label={"Nenhum dado encontrado"}
                />
              </div>

            )
      }
    </div>
  );
}

export default FreightsPage;
