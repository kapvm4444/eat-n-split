import React from "react";

export default function TitleBar() {
  return (
    <div className="title-bar">
      <h1>Eat-n-Split</h1>
      <p style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        fontWeight: 500, 
        marginTop: '0.6rem', 
        marginBottom: '0', 
        textShadow: '0 2px 4px rgba(0,0,0,0.15)',
        letterSpacing: '0.5px'
      }}>
        Keep track of shared bills and balances with friends seamlessly.
      </p>
    </div>
  );
}
