import React from "react";
/* import { Link, graphql } from "gatsby"; */
import "./layout.scss";
import Menu from "./menu";

export default function Layout({children}) {
  return (
    <div className="layout">
        <Menu></Menu>

        {children}
    </div>
  )
};
