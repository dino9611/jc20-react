// reducers
// state di reducer boleh tipe data apapun kecuali function
const INITIAL_STATE = { value: 110 };
// disetiap switch di reducer harus ada defualtnya
// defaultnya harus return state
const angkaReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAMBAH":
      //... untuk mengubah isi object, object state
      return { ...state, value: state.value + action.payload };
    case "KURANG":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default angkaReducers;
