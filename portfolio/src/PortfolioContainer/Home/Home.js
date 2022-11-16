import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Nav from "./NavBar/NavBar"
import About from "./AboutMe/AboutMe"
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <Nav/>
      <Profile />
      <Footer />
      <About/>
    </div>
  );
}
