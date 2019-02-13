import React from "react";

// aqui irá receber o número de atividades concluitdas, somar mais um e retornar
function points(points) {
  return parseInt(Object.values(points)) + parseInt(1);
}

export default points;
