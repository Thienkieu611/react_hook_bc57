import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <div className="" style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <footer className="p-5 bg-dark text-center">
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default HomeTemplate;
