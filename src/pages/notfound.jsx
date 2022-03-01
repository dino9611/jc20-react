import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>INI 404 </h1>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default NotFound;
