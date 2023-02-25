// How to use axios to fetch Data from an API

// Instantiate axios
const axiosRequest = require("axios");

// api uri
const apiURI = "https://www.boredapi.com/api/activity/";

// Step 1
// fetching Data
async function getActivity() {
  //Make a promise
  let response = await axiosRequest.get(apiURI);
  console.log(response.data);
}
getActivity();

// Step 2
// Catching errors when promise is mot full filled
async function fetchData() {
  //try to make a promise
  try {
    let response = await axiosRequest.get(apiURI);
    console.log(response.data);
  } catch (error) {
    //when promise is not fulfilled due to any error
    console.error("Error: " + error);
  }
}
fetchData();

// Step 3
// Using Arrow Functions
// Works perfect with react in a useState() hook
const arrowFetchData = async () => {
  //try to make a promise
  try {
    let response = await axiosRequest.get(apiURI);
    console.log(response.data);
  } catch (error) {
    //when promise is not fulfilled due to any error
    console.error("Error: " + error);
  }
};

//Assign this to a setData function in a useState hook
