import React from "react";
import Icon from "./Icon";

export default function Header({ username }) {
  return (
    <header className="header">
      <h1>My App</h1>
      {/* Header doesn't use username itself; it forwards it to Icon */}
      <Icon username={username} />
    </header>
  );
}
