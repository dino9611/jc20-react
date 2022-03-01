import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Spinner,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const API_URL = `https://api.spoonacular.com`;
const API_KEY = `apiKey=ff938463dc4844d889bd93169fe83043`;

const Resep = () => {
  const [loading, setloading] = useState(true);
  const [resep, setresep] = useState([]);
  const [diet] = useState([
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
  ]);

  const [selectedDiet, setSelectedDiet] = useState("");

  //   buat paging perlu state page
  const [page, setpage] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/recipes/complexSearch?${API_KEY}`)
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

  const fetchDatafilter = async () => {
    try {
      console.log(selectedDiet);
      let url = `${API_URL}/recipes/complexSearch?${API_KEY}`;
      if (selectedDiet) {
        url += `&diet=${selectedDiet}`;
      }
      let res = await axios.get(url);
      setresep(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  //   componenntdidupdate ini ke trigger pada saat selected diet berubah
  useEffect(() => {
    fetchDatafilter();
  }, [selectedDiet]);

  const onDietCLick = (diet) => {
    setSelectedDiet(diet);
    // console.log(diet);
    // let url = `${API_URL}/recipes/complexSearch?${API_KEY}`;
    // if (diet) {
    //   url += `&diet=${diet}`;
    // }
    // let res = await axios.get(url);
    // setresep(res.data.results);

    // axios
    //   .get(url)
    //   .then((res) => {
    //     setresep(res.data.results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  //   renderPaging

  //   const renderPagin = () => {
  // let pages = fungsi yang fundamental kemaren
  //   };

  //   render data
  const renderResep = () => {
    return resep.map((val) => {
      return (
        <div className="px-1 my-1 " key={val.id} style={{ width: "20%" }}>
          <Link state={val} to={`/resep/${val.id}`}>
            <Card className="shadow-lg me-2 resep">
              <CardImg alt={val.title} src={val.image} top width="100%" />
              <CardBody>
                <CardTitle tag="h6" style={{ height: "10vh" }}>
                  {val.title}
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
      );
    });
  };

  const renderDiet = () => {
    return diet.map((val, index) => {
      return (
        <Button
          key={index}
          outline={selectedDiet !== val}
          color="success"
          className="rounded-pill me-2"
          style={{ minWidth: "8%" }}
          onClick={() => onDietCLick(val)}
        >
          {val}
        </Button>
      );
    });
  };
  //   const Coba = (
  //     <div className="px-1 my-1 " style={{ width: "20%" }}>
  //       <Card className="shadow-lg me-2 resep">
  //         <CardImg
  //           alt="Card image cap"
  //           src="https://spoonacular.com/recipeImages/716426-312x231.jpg"
  //           top
  //           width="100%"
  //         />
  //         <CardBody>
  //           <CardTitle tag="h6" style={{ height: "10vh" }}>
  //             Cauliflower, Brown Rice, and Vegetable Fried Rice"
  //           </CardTitle>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   );

  return (
    <div>
      {loading ? (
        <div className="loading-container d-flex justify-content-center align-items-center">
          <Spinner size={"lg"} color="primary" />
        </div>
      ) : null}
      <div className="container pt-3 ">
        <div>
          <Button
            outline={selectedDiet !== ""}
            color="success"
            className="rounded-pill me-2"
            style={{ width: "8%" }}
            onClick={() => onDietCLick("")}
          >
            All
          </Button>
          {renderDiet()}
        </div>
        <div className="d-flex mt-5 mb-3 flex-wrap">{renderResep()}</div>
      </div>
    </div>
  );
};

export default Resep;
