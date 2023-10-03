import { useEffect, useState } from "react";
import Portfolios from "../components/Portfolios";

const Home = () => {
  return (
    <div className="container">
      <h3>포트폴리오 공유 플랫폼 HOME</h3>
      <div className="main">
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
      </div>
    </div>
  );
};

export default Home;
