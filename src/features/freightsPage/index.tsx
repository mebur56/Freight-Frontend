import React from "react";
import api from "../../app/axiosClient";


console.log(api.get("/teste"));
const  FreightsPage = () => {
  return (
    <div >
      Página de Frete
    </div>
  );
}

export default FreightsPage;
