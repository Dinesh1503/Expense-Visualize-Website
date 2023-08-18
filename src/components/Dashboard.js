import React from "react";
import './Dashboard.css';
import {useParams} from 'react-router-dom';
import ImageUpload from './Upload';
import Content from './Content';
import { useState } from "react";
import Dark from "./Dark";
import Light from "./Light";
import { ThemeProvider } from '@mui/material/styles';

function Dashboard() {
  const { username } = useParams();

  const [currentTheme, setCurrentTheme] = useState('light'); // Initial theme

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === 'light' ? 'dark' : 'light'
    );
  };

  const theme = currentTheme === 'light' ? Light:Dark;

  return (

    //<ThemeProvider theme={theme}>
    <div className="background">
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="image-upload-container">
      <ImageUpload user={username}/>
      </div>

      {/* <button onClick={toggleTheme}>Toggle Theme</button> Theme toggle button */}

      <div>
        <Content username={username}/>
      </div>
    </div>
    {/* //</ThemeProvider> */}
    </div>
  );
}

export default Dashboard;
