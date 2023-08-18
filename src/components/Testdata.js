// // TestData.js

// const axios = require("axios");

// // Function to generate random data
// const generateRandomData = () => {
//   const data = [];
//   const today = new Date();
//   for (let i = 0; i < 10; i++) {
//     const randomValue = Math.random() * 1000;
//     const randomDate = new Date(today.getTime() - i * 24 * 60 * 60 * 1000); // Subtract days
//     data.push({
//         username: "alaric",
//       value: randomValue.toFixed(2),
//       date: randomDate.toISOString().split("T")[0], // Convert to YYYY-MM-DD format
//     });
//   }
//   return data;
// };

// // Function to send data to the backend API
// const sendDataToAPI = async () => {
//   const data = generateRandomData();
//     for(let element of data)
//     {
//       try {
//         console.log(element);
//         const response = await axios.post("http://localhost:5000/data", element);
//         console.log("Data sent to API:", response.data);
//       } catch (error) {
//         console.error("Error sending data to API:", error);
//       }
//     }
// };

// sendDataToAPI();

const axios = require("axios");

// Function to generate random data for the first 12 days of each month in 2023
const generateRandomData = () => {
  const data = [];
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= 12; day++) {
      const randomValue = Math.random() * 1000;
      const date = new Date(2023, month - 1, day); // Months are zero-indexed
      data.push({
        username: "alaric",
        value: randomValue.toFixed(2),
        date: date.toISOString().split("T")[0], // Convert to YYYY-MM-DD format
      });
    }
  }
  return data;
};

// Function to send data to the backend API
const sendDataToAPI = async () => {
  const data = generateRandomData();
  for (let element of data) {
    try {
      console.log(element);
      const response = await axios.post("http://localhost:5000/data", element);
      console.log("Data sent to API:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  }
};

sendDataToAPI();

