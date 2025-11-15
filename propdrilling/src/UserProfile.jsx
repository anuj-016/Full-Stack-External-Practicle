import React from "react";

export default function UserProfile({ username }) {
  return (
    <div className="user-profile">
      <strong>User:</strong> <span>{username}</span>
    </div>
  );
}
