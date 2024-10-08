import PropTypes from "prop-types";

import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

function CreateAccount({ setWallet, setSeedPhrase }) {
  const navigate = useNavigate();
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);

  function generateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPhrase(mnemonic);
  }

  function setWalletAndMnemonic() {
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
  }

  return (
    <div className="content">
      <div className="mnemonic">
        <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
        <div>
          Once you generate the seed phrase, save it securely in order to
          recover your wallet in the future.
        </div>
      </div>

      <Button
        className="frontPageButton"
        type="primary"
        style={{ backgroundColor: "#6552FE", borderColor: "#6552FE" }}
        onClick={() => generateWallet()}
      >
        Generate Seed Phrase
      </Button>
      <Card className="seedPhraseContainer">
        {newSeedPhrase && (
          <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
        )}
      </Card>
      <Button
        className="frontPageButton"
        type="default"
        style={{ color: "#6552FE" }}
        onClick={() => setWalletAndMnemonic()}
      >
        Open Your New Wallet
      </Button>
      <p className="frontPageBottom" onClick={() => navigate("/")}>
        Back Home
      </p>
    </div>
  );
}

// PropTypes validation
CreateAccount.propTypes = {
  setWallet: PropTypes.func.isRequired,
  setSeedPhrase: PropTypes.func.isRequired,
};

export default CreateAccount;
