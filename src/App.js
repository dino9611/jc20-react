import React, { Component, useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Text from "./components/text";
// import Title from "./components/title";
import { ButtonPrimary, ButtonSecondary } from "./components/buttons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Fade,
  Collapse,
  Alert,
} from "reactstrap";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDel, setisOpenDel] = useState(false);
  const [isOpenEd, setisOpenEd] = useState(false);
  // data awal
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
  // add feauter
  const [input, setInput] = useState({
    kegiatan: "",
    hari: "",
  });
  // del feature
  const [indexdel, setindexdel] = useState(-1);
  // edit feature
  const [indexed, setindexded] = useState(-1);
  const [inputEdit, setinputEdit] = useState({
    kegiatan: "",
    hari: "",
  });

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const toggleDel = () => {
    setisOpenDel(!isOpenDel);
  };
  const toggleEd = () => {
    setisOpenEd(!isOpenEd);
  };

  const handleInput = (e) => {
    // console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleInputEdit = (e) => {
    // console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    setinputEdit({ ...inputEdit, [e.target.name]: e.target.value });
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

  const onDeleteClick = (index) => {
    setindexdel(index);
    setisOpenDel(true);
  };

  const onYesDeleteClick = () => {
    let dataKegiatanMut = dataKegiatan;
    dataKegiatanMut.splice(indexdel, 1);
    setdataKegiatan(dataKegiatanMut);
    setindexdel(-1);
    setisOpenDel(false);
  };

  const cancelDEl = () => {
    setindexdel(-1);
  };

  // edit feature
  const onEditClick = (ind) => {
    setindexded(ind);
    setinputEdit(dataKegiatan[ind]);
    setisOpenEd(true);
  };

  // saveEdit
  const onSaveEditCLick = (e) => {
    // untuk mencegah apa website tidak reload
    e.preventDefault();
    let dataKegiatanMut = dataKegiatan;
    dataKegiatanMut.splice(indexed, 1, inputEdit);
    setindexded(-1);
    setisOpenEd(false);
    setdataKegiatan(dataKegiatanMut);
    setinputEdit({
      kegiatan: "",
      hari: "",
    });
  };

  const renderData = () => {
    return dataKegiatan.map((val, index) => {
      return (
        <Fade key={index}>
          <div className="shadow-lg p-3 kotak rounded w-100 bg-white mt-3">
            <div className="hari mb-2 text-success text-capitalize">
              {val.hari}
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <h3 className="text-capitalize">{val.kegiatan}</h3>
              </div>
              <div>
                <Button color="warning me-2" onClick={() => onEditClick(index)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => onDeleteClick(index)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
          {/* <Collapse isOpen={index == indexdel}>
            <div className="bg-white rounded px-3 d-flex justify-content-end py-2">
              <div>
                <div>Apakah anda yakin hapus {val.kegiatan}?</div>
                <div className="d-flex mt-2 justify-content-end">
                  <Button color="danger">Yes</Button>
                  <Button
                    color="light"
                    className="ms-3 shadow"
                    onClick={cancelDEl}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </Collapse> */}
        </Fade>
      );
    });
  };

  const renderModalDel = () => {
    if (indexdel < 0) {
      return null;
    }
    return (
      <Modal backdropClassName="tes" isOpen={isOpenDel} toggle={toggleDel}>
        <ModalHeader toggle={toggleDel}>Delete Data</ModalHeader>
        <ModalBody>
          apakah anda yakin menghapus {dataKegiatan[indexdel].kegiatan}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onYesDeleteClick}>
            Delete Data
          </Button>
          <Button onClick={toggleDel}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  };

  const renderModalEd = () => {
    if (indexed < 0) {
      return null;
    }
    return (
      <Modal isOpen={isOpenEd} toggle={toggleEd}>
        <ModalHeader toggle={toggleEd}>Edit Data</ModalHeader>
        <ModalBody>
          <form onSubmit={onSaveEditCLick}>
            <div className="my-2">
              <label>Kegiatan</label>
              <input
                value={inputEdit.kegiatan}
                name="kegiatan"
                type="text"
                placeholder="masukkan Kegiatan"
                className="form-control mt-2"
                onChange={handleInputEdit}
              />
            </div>
            <div className="my-2">
              <label>Hari</label>
              <select
                value={inputEdit.hari}
                name="hari"
                onChange={handleInputEdit}
                className="form-control mt-2"
              >
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
          <Button color="primary" onClick={onSaveEditCLick}>
            Save Data
          </Button>
          <Button onClick={toggleEd}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div>
      {renderModalDel()}
      {renderModalEd()}
      {/* bisa cara ini */}
      {/* {indexdel < 0 ? null : (
        <Modal isOpen={isOpenDel} toggle={toggleDel}>
          <ModalHeader toggle={toggleDel}>Delete Data</ModalHeader>
          <ModalBody>
            apakah anda yakin menghapus {dataKegiatan[indexdel].kegiatan}
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Delete Data</Button>
            <Button onClick={toggleDel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      )} */}
      {/* bisa juga cara ini */}
      {/* <Modal isOpen={isOpenDel} toggle={toggleDel}>
        <ModalHeader toggle={toggleDel}>Delete Data</ModalHeader>
        <ModalBody>
          apakah anda yakin menghapus {dataKegiatan[indexdel]?.kegiatan}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Delete Data</Button>
          <Button onClick={toggleDel}>Cancel</Button>
        </ModalFooter>
      </Modal> */}

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
