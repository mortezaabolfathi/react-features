import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router";
import RouteLits from "../routes";

const Header = () => {
  return (
    <div style={{ fontWeight: "bold" }}>
        <div 
            style={{
                backgroundColor:"gray" ,
                height:"40px",
                display:"flex",
                alignItems:"center",
                padding:"8px",
                marginBottom:"10px"
                 }}>
            <NavLink to={RouteLits.useDeferredValue}>
                <p>useDeferredValue</p>
            </NavLink>
        </div>
      <Outlet />
    </div>
  );
};

export default Header;
