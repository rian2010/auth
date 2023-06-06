import React from "react";
import Navbar from "@/Components/Navbar";

export default function Layout({ children, props, auth }) {
  return (
    <div>
      <Navbar user={props.auth.user} />
      {children}
    </div>
  );
}
