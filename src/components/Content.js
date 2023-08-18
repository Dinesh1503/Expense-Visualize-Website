// import React, { useEffect, useState, useRef } from "react";
// import axios from "../api/Axios";
// import { ResponsiveLine } from "@nivo/line";

// function Content({ username }) {
//   const [data, setData] = useState(null);
//   const chartContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`http://localhost:5000/data/total`, {
//           username: username,
//         });
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMoveGraph = (direction) => {
//     const chartContainer = chartContainerRef.current;
//     if (chartContainer) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       chartContainer.scrollLeft += scrollAmount;
//     }
//   };

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   if (data.length === 0) {
//     return <p>No data available.</p>;
//   }

//   const chartData = [
//     {
//       id: "Value",
//       data: data.map((item) => ({
//         x: new Date(item.date),
//         y: parseFloat(item.value),
//       })),
//     },
//   ];

//   return (
//     <div style={{ width: "100%", height: "400px", position: "relative", overflowX: "hidden" }}>
//       <h2>Value Over Time</h2>
//       <div ref={chartContainerRef} style={{ width: "100%", height: "100%", overflowX: "scroll" }}>
//         <ResponsiveLine
//           data={chartData}
//           margin={{ top: 50, right: 80, bottom: 80, left: 60 }}
//           xScale={{
//             type: "time",
//             format: "%Y-%m-%d",
//             precision: "day",
//             useUTC: false,
//             min: "auto",
//             max: "auto",
//           }}
//           xFormat="time:%Y-%m-%d"
//           axisBottom={{
//             format: "%b %d",
//             tickValues: "every 1 week",
//           }}
//           axisLeft={{
//             orient: "left",
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: "Value",
//             legendOffset: -40,
//             legendPosition: "middle",
//           }}
//           colors={{ scheme: "nivo" }}
//           enablePointLabel={true}
//           pointSize={8}
//           pointBorderWidth={2}
//           pointBorderColor={{ from: "serieColor" }}
//           useMesh={true}
//         />
//       </div>
//       <button onClick={() => handleMoveGraph("left")}>Move Left</button>
//       <button onClick={() => handleMoveGraph("right")}>Move Right</button>
//     </div>
//   );
// }

// export default Content;

import React, { useEffect, useState, useRef } from "react";
import axios from "../api/Axios";
import { ResponsiveLine } from "@nivo/line";

function Content({ username }) {
  const [data, setData] = useState(null);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/data/total`, {
          username: username,
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMoveGraph = (direction) => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      const scrollAmount = direction === "left" ? -200 : 200;
      chartContainer.scrollLeft += scrollAmount;
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  const chartData = [
    {
      id: "Value",
      data: data.map((item) => ({
        x: new Date(item.date),
        y: parseFloat(item.value),
      })),
    },
  ];

  return (
    <div>
      <h2>Value Over Time</h2>
      <div
        style={{
          width: "100%",
          height: "400px", // Set the desired height for the chart
          overflowX: "scroll",
          display: "flex",
          alignItems: "center", // Center vertically
        }}
        ref={chartContainerRef}
      >
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 80, bottom: 80, left: 60 }}
          xScale={{
            type: "time",
            format: "%Y-%m-%d",
            precision: "day",
            useUTC: false,
            min: "auto",
            max: "auto",
          }}
          xFormat="time:%Y-%m-%d"
          axisBottom={{
            format: "%b %d",
            tickValues: "every 1 week",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          enablePointLabel={true}
          pointSize={8}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          useMesh={true}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleMoveGraph("left")}>Move Left</button>
        <button onClick={() => handleMoveGraph("right")}>Move Right</button>
      </div>
    </div>
  );
}

export default Content;

