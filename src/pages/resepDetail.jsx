import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ResepDetail = () => {
  const loc = useLocation();
  const params = useParams();
  useEffect(() => {
    // axios disini
  }, []);
  console.log(params);
  console.log(loc);
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>INI Resep DEtail {params.id}</h1>
      <div>{JSON.stringify(loc.state)}</div>
    </div>
  );
};

export default ResepDetail;
