// import React, { useState } from 'react';
// import { API_URLS, PYTHON_API_URL } from './config';
// import axios from 'axios';
// import { useEffect } from 'react';


// function GetData({user})
// {
//     const [data,getData] = useState('null');

//     console.log('USER',user);
//     const request = axios.post(API_URLS.userData,{username:user}).then((response)=>{
//         console.log('DATA: ',response.data);
//     });

   

   
  
// }

// export default GetData;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URLS } from './config'; // Assuming you have imported your API URLs
import './Dashboard.css';

function Table() {
  const { username } = useParams();
  console.log('Data username: ',username)
  const user = username;
    const [data,getData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post(API_URLS.userData, { username: user });
        getData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]); // Include 'user' in the dependency array to re-run the effect when 'user' changes

  console.log(data);
  console.log(data[0]);

  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      const newData = data.filter((_, i) => i !== index);
      getData(newData);
    }
  };

  const k = 0;

  return (
    <div>
       <div>
      <h2>Data Table</h2>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Value</th>
            {/* Add more table headers for additional data fields */}
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.date}</td>
              <td>{item.value}</td>
              {/* Add more table cells for additional data fields */}
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Table;
