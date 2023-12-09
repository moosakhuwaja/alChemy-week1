import React, { useState } from 'react';
import { toHex } from 'ethereum-cryptography/utils';
import { secp256k1 } from 'ethereum-cryptography/secp256k1.js';
import server from './server';

function CreateKey() {
  const [privateKeyLabel, setPrivateKeyLabel] = useState('84C7C8814BB5FFEA49DFF23E8ABABE770362420B72EA191160D2A1BA26ABBEC3');

  // Use an arrow function to avoid immediate invocation
  const generateKey = () => {
    setPrivateKeyLabel(toHex(secp256k1.utils.randomPrivateKey()));
  };

  return (
    <>
      <div className='container'>
        <button className='button' onClick={generateKey}>
          Generate Private key
        </button>
        <div className='wallet'>
        <div className="balance for_margin">Private Key: {privateKeyLabel}</div>
        <div className="balance for_margin">Public Key: {toHex(secp256k1.getPublicKey(privateKeyLabel))}</div>
        </div>
      </div>
    </>
  );
}

export default CreateKey;
