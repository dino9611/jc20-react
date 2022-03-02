const INITIAL_STATE = { jumlah: 0 };
// disetiap switch di reducer harus ada defualtnya
// defaultnya harus return state
const kataaReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HITUNG":
      //... untuk mengubah isi object, object state
      return { ...state, jumlah: action.payload };
    default:
      return state;
  }
};

export default kataaReducers;
