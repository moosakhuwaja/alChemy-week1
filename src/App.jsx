import Wallet from "./Wallet";
import Transfer from "./Transfer";
import CreateKey from "./CreateKey";
import Sign from "./Sign";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  return (
    <>
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
    </div>
    <div className="app for_margin" >
    <Transfer setBalance={setBalance} address={address} />
    </div>
    <div className="app for_margin" >
    <Sign/>
    </div>
    <div className="app for_margin" >
      <CreateKey/>
    </div>
    </>
  );
}

export default App;
