export const tambahAction = (angkaTambah) => {
  return {
    type: "TAMBAH",
    payload: angkaTambah || 1,
  };
};

export const kurangAction = () => {
  return {
    type: "KURANG",
  };
};
