import React from "react";
import './Dashboard.css';
import {useParams} from 'react-router-dom';
import ImageUpload from './Upload';

function Dashboard() {
  const { username } = useParams();
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="image-upload-container">
      <ImageUpload user={username}/>
      </div>
    </div>
  );
}

export default Dashboard;
