import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AuctionList() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get('/listOpenForBidding')
      .then(response => {
        setAuctions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Auctions Open for Bidding</h1>
      <ul>
        {auctions.map(auction => (
          <li key={auction.id}>{auction.name}: {auction.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
