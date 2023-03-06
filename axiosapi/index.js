const axiosRequest = require("axios");

const apiURL = "https://www.boredapi.com/api/activity/";

async function getActivity() {
  let response = await axiosRequest.get(apiURL);
  console.log(response);
}
getActivity();

async function fetchData() {
  try {
    let response = await axiosRequest.get(apiURL);
    console.log(response);
  } catch (err) {
    console.log("Error: " + err);
  }
}
fetchData();

const arrowFetch = async () => {
  try {
    let response = await axiosRequest.get(apiURL);
    console.log(response);
  } catch (err) {
    console.log("Error: " + err);
  }
};
