
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ListTokens() {
  const [tokens, setTokens] = useState([]);
  //const userId = useSelector(state => state.user.username); //get logged in user id from redux
    const userId = "gerald";
    
  useEffect(() => {
    axios.get('/allUserTokens', { params: { userId } })
      .then(response => {
        setTokens(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Wallet Interface</h1>
      <ul>
        {tokens.map(token => (
          <li key={token.id}>
            {token.name} ({token.symbol}): {token.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTokens;