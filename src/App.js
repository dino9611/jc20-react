import React, { Component, useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Text from "./components/text";
// import Title from "./components/title";
// import { ButtonPrimary, ButtonSecondary, API_URL } from "./components/buttons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Fade,
} from "reactstrap";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const [dataKegiatan, setdataKegiatan] = useState([
    {
      kegiatan: "belajar",
      hari: "Senin",
    },
    {
      kegiatan: "berenang",
      hari: "Rabu",
    },
  ]);

  const [input, setInput] = useState({
    kegiatan: "",
    hari: "",
  });

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSaveDatahandle = (e) => {
    e.preventDefault();
    let { hari, kegiatan } = input;
    if ([hari, kegiatan].includes("")) {
      alert("tidak boleh save");
    } else {
      let dataKegiatanMut = dataKegiatan;
      dataKegiatanMut.push(input);
      setdataKegiatan(dataKegiatanMut);
      setisOpen(false);
      setInput({
        kegiatan: "",
        hari: "",
      });
      // cara lain
      // setdataKegiatan([...dataKegiatan,input])
    }
  };

  const renderData = () => {
    return dataKegiatan.map((val, index) => {
      return (
        <Fade key={index}>
          <div className="shadow-lg p-3 kotak rounded w-100 bg-white my-3">
            <div className="hari mb-2 text-success text-capitalize">
              {val.hari}
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <h3 className="text-capitalize">{val.kegiatan}</h3>
              </div>
              <div>
                <Button color="warning me-2">Edit</Button>
                <Button color="danger">Delete</Button>
              </div>
            </div>
          </div>
        </Fade>
      );
    });
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tambah Data</ModalHeader>
        <ModalBody>
          <form onSubmit={onSaveDatahandle}>
            <div className="my-2">
              <label>Kegiatan</label>
              <input
                value={input.kegiatan}
                name="kegiatan"
                type="text"
                placeholder="masukkan Kegiatan"
                className="form-control mt-2"
                onChange={handleInput}
              />
            </div>
            <div className="my-2">
              <label>Hari</label>
              <select
                value={input.hari}
                name="hari"
                onChange={handleInput}
                className="form-control mt-2"
              >
                <option hidden value={""}>
                  Pilih hari
                </option>
                <option value={"Senin"}>Senin</option>
                <option value={"Selasa"}>Selasa</option>
                <option value={"Rabu"}>Rabu</option>
                <option value={"Kamis"}>Kamis</option>
                <option value={"Jum'at"}>Jum'at</option>
                <option value={"Sabtu"}>Sabtu</option>
                <option value={"Minggu"}>Minggu</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSaveDatahandle}>
            Save Data
          </Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <div className=" pt-5 main-container">
        <div>
          <Button onClick={toggle} className="w-100" color="primary">
            Tambah Data
          </Button>
        </div>
        <div>{renderData()}</div>
      </div>
    </div>
  );
}

// class App extends Component {
//   state = {
//     number: 0,
//     data: [1, 2, 3],
//   };

//   componentDidMount() {
//     // component didmound bakal dieksekusi pada saat
//     // setelah render pertama
//     // biasanya digunakan untuk get data
//     console.log("render pertmaa");
//   }

//   componentDidUpdate(prevprops, prevstate) {
//     // component didupdate dieksekusi pada saat
//     // setleah setstate / perubahan didalam props
//     if (prevstate.number !== this.state.number) {
//       console.log("masuk diddmount");
//       // this.setState({ data: [1, 2, 3, 4] });
//     }
//   }

//   tambahAngka = () => {
//     // untuk mengedit data distate harus dilakukan mutasi
//     // mutasi ini artinya dikopi dulu ke varibale baru
//     // lalu diedit variable barunya
//     // setelah itu baru di update statenya
//     // let angkaUjung = this.state.data.length + 1;
//     // let dataNew = this.state.data;
//     // dataNew.push(angkaUjung);
//     // this.setState({ number: this.state.number + 1, data: dataNew });
//     this.setState({ number: this.state.number + 1 });
//   };
//   kurangAngka = () => {
//     this.setState({ number: this.state.number - 1 });
//   };

//   renderData = () => {
//     return this.state.data.map((val) => {
//       return <p>{val}</p>;
//     });
//   };

//   render() {
// console.log('render')
//     return (
//       <>
//         <div className="App">
//           <header className="App-header">
//             {/* <Text />
//             <Text />
//             <Text />
//             <Title /> */}
//             {/* <div>{API_URL}</div>
//             <ButtonPrimary name="coba" style={{ backgroundColor: "red" }} />
//             <ButtonPrimary name="coba lagi" />
//             <ButtonPrimary name="coba aja" />
//             <ButtonSecondary>lagi aja</ButtonSecondary> */}
//             <h1>{this.state.number}</h1>
//             {this.renderData()}
//             <div>
//               <ButtonSecondary
//                 onClick={this.kurangAngka}
//                 disabled={!this.state.number}
//                 className="mar-1"
//               >
//                 -
//               </ButtonSecondary>
//               <ButtonSecondary onClick={this.tambahAngka}>+</ButtonSecondary>
//             </div>
//           </header>
//         </div>
//         <div></div>
//       </>
//     );
//   }
// }

// export default hanya bisa diexport sekali pada satu file
export default App;
