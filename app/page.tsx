"use client";

import { useState } from 'react';

export default function Home() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <div>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0 }}>First Project</h1>
          <h2 style={{ margin: 0 }}>Front-end</h2>
        </div>
        <div style={buttonContainerStyle}>
          <button
            onMouseOver={() => setShowHelp(true)}
            onMouseOut={() => setShowHelp(false)}
            style={buttonStyle}
          >
            Help
          </button>
          {showHelp && (
            <div style={tooltipStyle}>
              This is a simple Mountain page created using Next.js.
            </div>
          )}
          <button onClick={() => setShowProfileMenu(!showProfileMenu)} style={buttonStyle}>
            Profile
          </button>
          {showProfileMenu && (
            <div style={profileMenuStyle}>
              <strong>Sourav</strong>
              <br />
              <a href="#">Change Password</a>
              <br />
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </header>

      
      <main style={mainStyle}>
      <div style={imageContainerStyle}>
          <img src="/mountains.jpg" alt="Mountain 1" style={imageStyle} />
          <img src="/mountains1.jpeg" alt="Mountain 2" style={imageStyle} />
          <img src="/mountains2.jpg" alt="Mountain 3" style={imageStyle} />
        </div>
        <p>This is a simple project about mountains.</p><br></br>
        <p>Mountains are beautiful natural formations.</p><br></br>
        <p>Mountains are sacred and uplifting places. They occur in all biogeographical regions of the world and are home to many different people1. They are treasuries of high biodiversity and rich in endemic species. Mountains are beautiful adventures that offer a unique experience with trees, animals, and rivers. They are small irregularities on the earth\’s surface, formed of hard rock3. To describe mountains in writing, one can focus on aspects like size, shape, color, textures, and climate, as well as unique geological features, wildlife, vegetation, and the impact of seasons.</p>
      </main><br></br>

      
      <footer style={footerStyle}>
        <p>Nth Project</p>
        <p>Contact us: Sourav@example.com</p>
      </footer>
      <div style={socialIconsStyle}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.jpg" alt="LinkedIn" style={iconStyle} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/yt.jpg" alt="YouTube" style={iconStyle} />
          </a>
        </div>
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  borderBottom: '2px solid #ccc',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  marginLeft: '10px',
  padding: '5px 10px',
  cursor: 'pointer',
};

const imageContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

const tooltipStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50px',
  right: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
  zIndex: 1,
};

const profileMenuStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50px',
  right: '100px',
  backgroundColor: 'black',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '300px',
  margin: '10px',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '10px',
  borderTop: '2px solid #ccc',
};

const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
};

const iconStyle: React.CSSProperties = {
  width: '32px', // Adjust the size as needed
  height: '32px',
};