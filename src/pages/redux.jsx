import { connect, useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { kurangAction, tambahAction } from "../redux/actions";

// cara 1 pake connect , connect ini bisa digunakan di functional comp
// class component

// cara 2 hanya  bisa dipake di functional component

const Redux = (props) => {
  // cara ke 2 pengganti mapstatetoprops
  // const angka = useSelector((state) => state.angka.value);
  // const user = useSelector((state) => state.userData);
  const kata = useSelector((state) => state.kata.jumlah);

  // cara ke 2 action
  const dispatch = useDispatch();

  const onTambahCLick = () => {
    // props.tambahAction(5)

    // cara 2
    dispatch({ type: "TAMBAH", payload: 5 });
  };

  const onKurangCLick = () => {
    //   props.kurangAction()

    // cara 2
    dispatch({ type: "KURANG" });
  };

  const onKataChange = (e) => {
    let kata = e.target.value;
    kata = kata.split(" ");
    kata = kata.filter((val) => val !== "").length;
    dispatch({ type: "HITUNG", payload: kata });
  };

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      {/* <h1>
        redux {angka} {user.username}
      </h1>
      <Button onClick={onTambahCLick}>+</Button>
      <Button onClick={onKurangCLick}>-</Button> */}
      <div>kata : {kata}</div>
      <textarea
        className="form-control w-75"
        onChange={onKataChange}
      ></textarea>
    </div>
  );
};

// function mapstatetoprops harus return object
const mapStateToProps = (state) => {
  return {
    bebas: state.angka,
  };
};

// export default connect(mapStateToProps, { tambahAction, kurangAction })(Redux);
export default Redux;
