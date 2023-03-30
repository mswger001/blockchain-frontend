import React, { useState, useEffect } from 'react';

function AuctionList() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch('/listOpenForBidding')
      .then(res => res.json())
      .then(data => setAuctions(data));
  }, []);

  return (
    <div>
      <h1>List of Open Auctions:</h1>
      <ul>
        {auctions.map(auction => (
          <li key={auction.id}>
            <strong>{auction.name}</strong> - Current Bid: {auction.currentBid}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
