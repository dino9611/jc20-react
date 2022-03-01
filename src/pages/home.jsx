import React, { Component, useState, useEffect } from "react";
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
import axios from "axios";

const API_URL = `http://localhost:5000`;

function Home() {
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDel, setisOpenDel] = useState(false);
  const [isOpenEd, setisOpenEd] = useState(false);
  // data awal
  const [dataKegiatan, setdataKegiatan] = useState([]);
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

  const fetchdata = async () => {
    try {
      let res = await axios.get(`${API_URL}/activities`);
      setdataKegiatan(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
      // post put patch datanya harus object
      axios
        .post(`${API_URL}/activities`, input)
        .then(() => {
          fetchdata();
          setisOpen(false);
          setInput({
            kegiatan: "",
            hari: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onDeleteClick = (index) => {
    setindexdel(index);
    setisOpenDel(true);
  };

  const onYesDeleteClick = async () => {
    // delete data in json-server
    await axios.delete(`${API_URL}/activities/${dataKegiatan[indexdel].id}`);
    // refresh data
    fetchdata();
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
  const onSaveEditCLick = async (e) => {
    try {
      // untuk mencegah apa website tidak reload
      e.preventDefault();
      // UPDATE DATA DI JSON-SERVER
      await axios.patch(
        `${API_URL}/activities/${dataKegiatan[indexed].id}`,
        inputEdit
      );
      // refresh data
      fetchdata();

      setindexded(-1);
      setisOpenEd(false);
      setinputEdit({
        kegiatan: "",
        hari: "",
      });
    } catch (error) {
      console.log(error);
    }
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

// export default hanya bisa diexport sekali pada satu file
export default Home;
