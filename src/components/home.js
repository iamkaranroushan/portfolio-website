import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent.js";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <MainContent/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
