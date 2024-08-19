import React from "react";
import { WalletIcons } from "../../public";
import { Button } from "antd";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <img src={WalletIcons} alt="logo" className="frontPageLogo" />
      <h4
        className="h4 font-semibold text-white
      text-[28px] text-left ml-6"
      >
        Jump start your crypto portfolio
      </h4>
      <h2 className="text-left text-[16px] text-yellow-50">
        Take your investment portfolio to next level
      </h2>

      <Button
        onClick={() => navigate("/yourwallet")}
        className="frontPageButton"
        type="primary"
        style={{ backgroundColor: "#6552FE", borderColor: "#6552FE" }}
      >
        Create A Wallet
      </Button>
      <Button
        onClick={() => navigate("/recover")}
        className="frontPageButton mb-5"
        type="default"
        style={{ color: "#6552FE" }}
      >
        Sign In With Seed Phrase
      </Button>
    </div>
  );
}

export default Home;
