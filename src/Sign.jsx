import React, { useState } from 'react';
import { toHex,hexToBytes } from 'ethereum-cryptography/utils';
import { secp256k1 } from 'ethereum-cryptography/secp256k1.js';
import server from './server';

function Sign() {


  const [msg, setMsg] = useState('');
  const [pk, setPk] = useState('');
  const [msg_singned, setMsg_singned] = useState('N/A');
  const handleInputChange = (event) => {
    setMsg(event.target.value);
  };
  const handleInputChangepk = (event) => {
    setPk(event.target.value);
  };

  // Use an arrow function to avoid immediate invocation
  const sign = () => {
    setMsg_singned(toHex(secp256k1.sign(hexToBytes(msg), hexToBytes(pk))))
  };

  return (
    <>
      <div className='container'>
        <button className='button' onClick={sign}>
          Sign
        </button>
        <label htmlFor="myInput">msg to sign</label>
        <input
        type="text"
        id="myInput"
        value={msg}
        onChange={handleInputChange}
      />
        <label htmlFor="pk">private key</label>
        <input
        type="text"
        id="pk"
        value={pk}
        onChange={handleInputChangepk}
      />
        <h5>{msg_singned}</h5>
      </div>
    </>
  );
}

export default Sign