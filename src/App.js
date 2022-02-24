import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Text from "./components/text";
import Title from "./components/title";
import { ButtonPrimary, ButtonSecondary, API_URL } from "./components/buttons";

function App() {
  return (
    <div>
      <h1>tes</h1>
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
