import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
const API_URL = `https://api.spoonacular.com`;
const API_KEY = `apiKey=ff938463dc4844d889bd93169fe83043`;

const Resep = () => {
  const [loading, setloading] = useState(true);
  const [resep, setresep] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/recipes/complexSearch?${API_KEY}&diet=Vegetarian`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setresep(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  //   if(loading){
  //       <div className="d-flex justify-content-center"></div>
  //   }

  return (
    <div>
      {loading ? (
        <div className="loading-container d-flex justify-content-center align-items-center">
          <Spinner size={"lg"} color="primary" />
        </div>
      ) : null}
      <div className="d-flex justify-content-center">
        <h1>Resep Bro</h1>
      </div>
    </div>
  );
};

export default Resep;
