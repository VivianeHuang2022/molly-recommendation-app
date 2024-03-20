import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './DownloadPage.css'; // Ensure this file is properly linked with the updated styles.
import recommendationLetterImage from '../../assets/images/RecommendationTemplate.PNG'; // Correct the path if needed
import downloadIcon from '../../assets/images/Download.PNG'; // Correct the path if needed

const DownloadPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const downloadFormData = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recommendationFormData.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar>
      <div className="download-container">
        <img src={recommendationLetterImage} alt="Recommendation Letter Preview" className="preview-image" />
        <div className="buttons-container">
          <button className="btn generate-again">Generate</button>
          <button className="btn change-template">Change Template</button>
          <button className="btn make-payment">Make Payment</button>
          <div className="download-btn" onClick={downloadFormData}>
            <img src={downloadIcon} alt="Download" className="download-icon" />
            <span>Download</span>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default DownloadPage;