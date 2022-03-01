import { Routes, Route, Link } from "react-router-dom";

// contoh nested routing

const Tes = () => {
  return <div>BELUM PILIH</div>;
};
const Reactjs = () => {
  return <div>reactjs</div>;
};
const Nextjs = () => {
  return <div>Nextjs</div>;
};

const Topics = () => {
  return (
    <div className="mt-5 d-flex align-items-center">
      <div className="mx-2 bg-primary" style={{ width: "30%" }}>
        <h1>INI Topics</h1>
        <ul>
          <Link to="">
            <li>balik</li>
          </Link>
          <Link to="reactjs">
            <li>react</li>
          </Link>
          <Link to="nextjs">
            <li>Next</li>
          </Link>
        </ul>
      </div>
      <div className="mx-2 bg-danger" style={{ width: "70%" }}>
        <Routes>
          <Route path="" element={<Tes />} />
          <Route path="reactjs" element={<Reactjs />} />
          <Route path="nextjs" element={<Nextjs />} />
        </Routes>
      </div>
    </div>
  );
};

export default Topics;
