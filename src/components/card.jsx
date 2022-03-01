import React from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const CardComp = ({ data }) => {
  return (
    <div className="px-1 my-1 " style={{ width: "20%" }}>
      <Link state={data} to={`/resep/${data.id}`}>
        <Card className="shadow-lg me-2 resep">
          <CardImg alt={data.title} src={data.image} top width="100%" />
          <CardBody>
            <CardTitle tag="h6" style={{ height: "10vh" }}>
              {data.title}
            </CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardComp;
