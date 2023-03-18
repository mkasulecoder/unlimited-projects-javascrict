const axiosRequest = require("axios");

const apiUrl = "https://www.boredapi.com/api/activity/";

axiosRequest
  .get(apiUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });
