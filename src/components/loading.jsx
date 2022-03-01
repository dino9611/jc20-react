import React from "react";

import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center">
      <Spinner size={"lg"} color="primary" />
    </div>
  );
}
