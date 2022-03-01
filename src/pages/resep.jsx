import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaginationItem, Pagination, PaginationLink, Button } from "reactstrap";
import Loading from "../components/loading";
import CardComp from "../components/card";
import { generatePages } from "../helpers";

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
  const [maxPage] = useState(15);

  useEffect(() => {
    fetchDatafilter();
  }, [page, selectedDiet]);

  const fetchDatafilter = async () => {
    try {
      console.log(selectedDiet);
      let url = `${API_URL}/recipes/complexSearch?${API_KEY}&offset=${
        page * 10
      }`;
      if (selectedDiet) {
        url += `&diet=${selectedDiet}`;
      }
      let res = await axios.get(url);
      setresep(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  //   componenntdidupdate ini ke trigger pada saat selected diet berubah
  // useEffect(() => {
  //   fetchDatafilter();
  // }, [selectedDiet]);

  const onDietCLick = (diet) => {
    setSelectedDiet(diet);
    setpage(0);
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
      return <CardComp data={val} key={val.id} />;
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

  const renderPagination = () => {
    const arrPages = generatePages(page + 1, maxPage);
    return arrPages.map((val) => {
      return (
        <PaginationItem
          onClick={() => setpage(val - 1)}
          active={val === page + 1}
          key={val}
        >
          <PaginationLink>{val}</PaginationLink>
        </PaginationItem>
      );
    });
  };

  return (
    <div>
      {loading ? <Loading /> : null}
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
        <div>
          <Pagination>
            <PaginationItem onClick={() => setpage(0)} disabled={page === 0}>
              <PaginationLink first></PaginationLink>
            </PaginationItem>
            <PaginationItem
              onClick={() => setpage(page - 1)}
              disabled={page === 0}
            >
              <PaginationLink previous></PaginationLink>
            </PaginationItem>
            {renderPagination()}
            <PaginationItem
              onClick={() => setpage(page + 1)}
              disabled={page === maxPage - 1}
            >
              <PaginationLink next></PaginationLink>
            </PaginationItem>
            <PaginationItem
              onClick={() => setpage(maxPage - 1)}
              disabled={page === maxPage - 1}
            >
              <PaginationLink last></PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Resep;
