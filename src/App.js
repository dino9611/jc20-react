import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Text from "./components/text";
import Title from "./components/title";
import { ButtonPrimary, ButtonSecondary, API_URL } from "./components/buttons";
// function atau class yang return jsx disebut dengan komponen
let numb = 0;
// function App() {
//   // usestate return array
//   // state
//   // array pertama itu adalh value
//   // array kedua adalah function untuk mengubah state
//   let [number, setnumber] = useState(0);
//   // let dataManusia = useState()

//   const tambahAngka = () => {
//     setnumber(number + 1);
//     // numb++;
//     // console.log(numb);
//   };

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           {/* <Text />
//           <Text />
//           <Text />
//           <Title /> */}
//           {/* <div>{API_URL}</div>
//           <ButtonPrimary name="coba" style={{ backgroundColor: "red" }} />
//           <ButtonPrimary name="coba lagi" />
//           <ButtonPrimary name="coba aja" />
//           <ButtonSecondary>lagi aja</ButtonSecondary> */}
//           <h1>{numb}</h1>
//           <div>
//             <button>-</button>
//             <button onClick={tambahAngka}>+</button>
//           </div>
//         </header>
//       </div>
//       <div></div>
//     </>
//   );
// }

class App extends Component {
  state = {
    number: 0,
  };

  tambahAngka = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            {/* <Text />
            <Text />
            <Text />
            <Title /> */}
            {/* <div>{API_URL}</div>
            <ButtonPrimary name="coba" style={{ backgroundColor: "red" }} />
            <ButtonPrimary name="coba lagi" />
            <ButtonPrimary name="coba aja" />
            <ButtonSecondary>lagi aja</ButtonSecondary> */}
            <h1>{this.state.number}</h1>
            <div>
              <button>-</button>
              <button onClick={this.tambahAngka}>+</button>
            </div>
          </header>
        </div>
        <div></div>
      </>
    );
  }
}

// export default hanya bisa diexport sekali pada satu file
export default App;
