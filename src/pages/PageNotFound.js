import React from "react";
import { Link } from "react-router-dom";


function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div className="flex">
        <h1> Página no encontrada :( </h1>
        <h3>
          Ir a la página <Link to="/presentation"> Principal </Link>
        </h3>
      </div>
    </div>
  );
}

export default PageNotFound;
