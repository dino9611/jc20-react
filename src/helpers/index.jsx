export const API_URL_SPOON = `https://api.spoonacular.com`;
export const API_KEY_SPOON = `apiKey=ff938463dc4844d889bd93169fe83043`;

export const API_URL = `http://localhost:5000`;

//
export const generatePages = (currPage, maxPage) => {
  let output;
  // currpage ekspektasi 1
  if (currPage <= 5) {
    output = [1, 2, 3, 4, 5, 6, 7];
    // let ind = output.indexOf(currPage)
    // output[ind] = output[ind]+ ''
    return output;
  } else {
    if (maxPage - 2 < currPage) {
      output = Array(5);
      console.log(output); // [,,,,,]
      // for(let i = maxPage-4;i<=maxPage;i++){
      //     output.push(i)
      // }
      for (let i = 0; i < output.length; i++) {
        output[i] = maxPage - 4 + i;
      }
    } else {
      output = [];
      for (let i = currPage - 2; i <= currPage + 2; i++) {
        output.push(i);
      }
    }

    // let ind = output.indexOf(currPage)
    // output[ind] = output[ind]+ ''
    return output;
  }
};
