import React from "react";
import { Button } from '@mui/material';
import UploadFileIcon from "@mui/icons-material/UploadFile";
const UploadPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        style={
          {
          }
        }
      >
        Upload CSV
        < input type="file" accept=".csv" hidden />
      </Button >
    </div>
  )
}

export default UploadPage;
