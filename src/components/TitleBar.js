import React from "react";

export default function TitleBar() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "16px 0",
          marginBottom: "500px",
          background: "linear-gradient(45deg, #ffa94d, #ff922b)",
          color: "linear-gradient(45deg, #ffa94d, #ff922b)",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            margin: 0,
            textAlign: "center",
            color: "white",
            fontSize: "5.4rem",
            fontWeight: 800,
            fontFamily: "consolas",
            WebkitTextStroke: "3px black",
            paintOrder: "stroke fill",
          }}
        >
          Eat-n-Split
        </h1>
      </div>
    </>
  );
}
