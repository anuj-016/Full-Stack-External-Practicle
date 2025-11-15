import React from "react";
import UserProfile from "./UserProfile";

export default function Icon({ username }) {
  return (
    <div className="icon-row">
      <div className="avatar" aria-hidden="true" />
      {/* Icon forwards username to UserProfile */}
      <UserProfile username={username} />
    </div>
  );
}
