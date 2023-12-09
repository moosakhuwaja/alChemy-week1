import { useState } from "react";
import server from "./server";



function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("please generate message");
  const [messageVerify, setMessageVerify] = useState("please generate message");
  const [verifyBool, setVerifyBool] = useState();

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    

    evt.preventDefault();
    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }
  const getRandomMessage = () => {
    const buffer = new Uint8Array(32);
    window.crypto.getRandomValues(buffer);
    return buffer.reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '');
  };
  const generateMessage = () => {
    setMessage(getRandomMessage())
  }

  return (
    <div className="container">
      <h1>sign generated message</h1>
    <form className="container">
      <input className="button" type="button" value="Generate" onClick={generateMessage}/>
      <h5>{message}</h5>
      <input
          placeholder="enter signed message"
          onChange={setValue(setMessageVerify)}
        ></input>
      </form>


    <form className="container transfer for_margin" onSubmit={transfer}>



      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
    </div>
  );
}

export default Transfer;
