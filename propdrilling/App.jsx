import React from "react";
import Header from "./Header";

export default function App() {
  const username = "Alice"; // source of truth in App

  return (
    <div className="app-root">
      <Header username={username} />
    </div>
  );
}
