const axiosRequest = require("axios");

const apiUrl = "https://www.boredapi.com/api/activity/";

// async function getActivity() {
//   let response = await axiosRequest.get(apiUrl);
//   console.log(response);
// }

// getActivity();

async function tryGetActivity() {
  try {
    let response = await axiosRequest.get(apiUrl);
    console.log(response);
  } catch (err) {
    console.log("Error: " + err);
  }
}

tryGetActivity();



//arrow functions
axiosRequest
  .get(apiUrl)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
console.log(arrowFunction);
