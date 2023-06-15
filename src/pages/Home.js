import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { auth, logout, user } = useContext(AuthContext);
  return (
    <div>
      { user ? user.username : <div>Welecom tho th home page pleas login</div> }
    </div>
  );
}
