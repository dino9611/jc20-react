import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_URL_SPOON, API_KEY_SPOON } from "../helpers";

const ResepDetail = () => {
  const loc = useLocation();
  const params = useParams();

  const [taste, settaste] = useState({});

  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `${API_URL_SPOON}/recipes/${params.id}/tasteWidget.json`
      );
      settaste(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // axios disini
    fetchdata();
  }, []);
  // console.log(params);
  // console.log(loc);
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>INI Resep DEtail {params.id}</h1>
      <div>{JSON.stringify(loc.state)}</div>
      <div>{JSON.stringify(taste)}</div>
    </div>
  );
};

export default ResepDetail;
