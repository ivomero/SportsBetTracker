import React from "react";
import { useState, useEffect } from "react";
import { getUser } from "../api";

export const Comment = ({ text, userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUser(userId).then((user) => {
      console.log("hello", user, user.username);
      setUserData(user);
    });
  }, [userId]);

  return (
    <div>
      {userData ? userData.username : null}: {text}
    </div>
  );
};
