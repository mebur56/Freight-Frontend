import React, { useEffect, useState } from "react";
import { Button, Chip } from '@mui/material';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from "./styles";
import { useDispatch } from "react-redux";
import { UploadRequestAction } from "./action";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CustomSnackBar from "../../components/CustomSnackBar";
import { variantTypes } from "../../components/CustomSnackBar/types";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("")
  const [variant, setVariant] = useState(null)
  const dispatch = useDispatch();
  
  const { success, pending, finished } = useSelector(
    (state: RootState) => state.reducer.uploadPage
  )

  useEffect(() => {
    setSnackOpen(!pending && finished)
    success ? updateSnackBar("Seu arquivo foi enviado com sucesso", variantTypes.SUCCESS)
    : updateSnackBar("Houve um problema no envio do arquivo", variantTypes.ERROR)
    
  }, [success, pending])
  
  const updateSnackBar = (message: string, variant: variantTypes) => {
    setSnackMessage(message);
    setVariant(variant);
  }
  const onSubmit = () => {
    if (!file) {
      updateSnackBar("Nenhum arquivo selecionado", variantTypes.WARNING)
      setSnackOpen(true);
      return;
    }
    var fileForm = new FormData()
    fileForm.append("file", file)
    dispatch(UploadRequestAction({ fileForm }));
  }


  return (
    <div
      style={styles.uploadContainer}
    >
      <div style={styles.uploadButtonsContainer}>
        <Button
          component="label"
          variant="outlined"
          startIcon={<UploadFileIcon />}
          style={styles.uploadButton}
        >
          Upload CSV
          < input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            hidden
            onChange={(e) => setFile(e?.target?.files[0])}
          />
        </Button >
        <Button
          component="label"
          variant="outlined"
          onClick={() => onSubmit()}
          endIcon={<ArrowForwardIcon />}
        >
          Enviar
        </Button >
      </div>
      <Chip
        avatar={file?.name ? <CheckCircleIcon /> : <WarningIcon />}
        label={file?.name ? file.name : "Nenhum arquivo selecionado"}
      />

      <CustomSnackBar
        open={snackOpen}
        variant={variant}
        message={snackMessage}
        handleClose={() => setSnackOpen(false)}
      />


    </div>
  )
}

export default UploadPage;
