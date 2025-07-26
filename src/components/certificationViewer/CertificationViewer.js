import React, { useState, useEffect } from "react";
import "./CertificationViewer.scss";
import DisplayLottie from "../displayLottie/DisplayLottie";
import splashAnimation from "../../assets/lottie/splashAnimation";

export default function CertificationViewer() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [certificationData, setCertificationData] = useState(null);

  useEffect(() => {
    // Get certification data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const certificationPath = urlParams.get('cert');
    const certificationTitle = urlParams.get('title');
    
    if (certificationPath && certificationTitle) {
      setCertificationData({
        imagePath: certificationPath,
        title: decodeURIComponent(certificationTitle)
      });
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClose = () => {
    window.close();
  };

  if (!certificationData) {
    return (
      <div className="certification-viewer">
        <div className="loading-container">
          <DisplayLottie animationData={splashAnimation} />
          <p>Loading certification...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="certification-viewer">
      {!imageLoaded && (
        <div className="loading-container">
          <DisplayLottie animationData={splashAnimation} />
          <p>Loading {certificationData.title}...</p>
        </div>
      )}
      
      <div className={`certification-content ${imageLoaded ? 'loaded' : 'hidden'}`}>
        <div className="certification-header">
          <h1>{certificationData.title}</h1>
          <button className="close-button" onClick={handleClose}>
            ✕
          </button>
        </div>
        
        <div className="certification-image-container">
          <img
            src={certificationData.imagePath}
            alt={certificationData.title}
            onLoad={handleImageLoad}
            className="certification-image"
          />
        </div>
      </div>
    </div>
  );
}
