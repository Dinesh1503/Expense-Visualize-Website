// import React, { useState } from 'react';
// import { PYTHON_API_URL } from './config';
// import axios from 'axios';

// function ImageUpload() {
//   const [image, setImage] = useState(null);

//   const handleFileUpload = (event) => {
//     const file = [];
//     for (const element of event.target.files) {
//       file.push(element);
//     }
//     console.log('files',file);
//     setImage(file);
//   };

//   const handleSubmit = async () => {
//     if (!image) {
//       alert('Please select an image first.');
//       return;
//     }

//     const formData = new FormData();
//     for (var element of image)
//     {
//       formData.append('files[]', element);
//     }
//     console.log('formdata',formData);

//   try {
//     // Assuming PYTHON_API_URL contains the URL to your Python API endpoint
//     const response = await axios.post(PYTHON_API_URL, formData);

//     // Handle the response here
//     console.log(response.data);
//     const index = 0;
//     for (var element of response.data)
//     {
//       index++;
//       if(element === "Error")
//       {
        
//       }
//     }

//   } catch (error) {
//     // Handle errors here
//     console.error('Error occurred while fetching data:', error);
//   }

//   };

//   return (
//     <div>
//       <input type="file" accept="image/* " multiple onChange={handleFileUpload} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default ImageUpload;

import React, { useState } from 'react';
import { API_URLS, PYTHON_API_URL } from './config';
import axios from 'axios';

function ImageUpload({user}) {
  console.log('Upload Username variable: ',user);
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control the form visibility
  const [total, setTotal] = useState(''); // State to hold the total value from the form
  const [index, setIndex] = useState(null);

  const handleFileUpload = (event) => {
    const file = [];
    for (const element of event.target.files) {
      file.push(element);
    }
    setImage(file);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    for (const element of image) {
      formData.append('files[]', element);
    }

    try {
      // Send the image data to the Python API
      const response = await axios.post(PYTHON_API_URL, formData);

      // Handle the response here
      console.log("Data extracted: ",response.data);

      for(var i=0;i<response.data.length;i++)
      {
        console.log(i,response.data[i]);
        if (response.data[i] === "Error") {
          setIndex(i+1);
          setShowForm(true); // Show the form for manual data entry
        }
        else
        {
          var backend_response = await axios.post(API_URLS.upload,
            {
              username:user,
              value:response.data[i]
            })
            console.log(backend_response.data);
        }
        
      }

      // const backend_response = await axios.post(API_URLS.upload,
      //   {
      //     username:user,
      //     value:response.data[0]
      //   })
      // console.log(backend_response.data);

      // for (const value of response.data) {
      //   try {
      //     // Send an API call to the backend server for each value
      //     const backendResponse = await axios.post(API_URLS.upload, {
      //       username: username,
      //       total: value
      //     });
      //     console.log('Data added to database:', backendResponse.data);
      //   } catch (error) {
      //     console.error('Error occurred while sending API call to backend:', error);
      //   }
      // }
      // Check if the response contains an "Error"
      // for (var element in response.data)
      // {
      //   if(element === "Error")
      //   {
      //     index++;
      //     console.log('Image ',index," not able to extract information");
      //     setShowForm(true);
      //   }
      //   else
      //   {
      //     console.log('Inside Response [element]: ',element)
      //     const response = await axios.post(API_URLS.upload,{
      //       'username':username,
      //       'total':element
      //     })
      //     console.log('Data added to database:', response.data);

      //     // Reset the form and hide it
      //     setTotal('');
      //     setShowForm(false);
      //   }
      // }
      

    } catch (error) {
      // Handle errors here
      console.error('Error occurred while fetching data:', error);
    }
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    // Handle the form submission for manual data entry
    console.log('Total:', total);
    // Add your logic here to handle the total value
    var backend_response = await axios.post(API_URLS.upload,
      {
        username:user,
        value:total
      })
      console.log(backend_response.data);

    // Reset the form and hide it
    setTotal('');
    setShowForm(false);
  };

  return (
    <div>
      <input type="file" accept="image/* " multiple onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Submit</button>

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <p>Enter the total value of Image {index}</p>
          <label htmlFor="total">Total:</label>
          <input
            type="text"
            id="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
          />
          <button type="submit">Submit Total</button>
        </form>
      )}
    </div>
  );
}

export default ImageUpload;
