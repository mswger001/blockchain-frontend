import React, { useState } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Bids.styles.css';

function PlaceBid({ auctions }) {
  const [placeBidRequest, setPlaceBidRequest] = useState({
    placedBy: '',
    forAuction: '',
    amount: '',
  });
  const [bid, setBid] = useState({});
  const [bids, setBids] = useState([]);

  const handlePlaceBidSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/placeBid', placeBidRequest)
      .then((response) => {
        setBid(response.data);
        setPlaceBidRequest({
          placedBy: '',
          forAuction: '',
          amount: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleListForAuctionSubmit = (event) => {
    event.preventDefault();
    axios
      .get('/listForAuction', { params: { auctionId: placeBidRequest.forAuction } })
      .then((response) => {
        setBids(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <Typography component="h1" variant="h4" align="center">
        Place Bids  Interface
      </Typography>

      <Paper className="paper">
        <Typography component="h2" variant="h5">
          Place Bid
        </Typography>
      </Paper>

      <Paper className="paper">
        <Typography component="h2" variant="h5">
          List of Open Auctions:
        </Typography>
        {auctions ? (
            <ul>
              {auctions.map((auction) => (
                <li key={auction.id}>
                  <strong>{auction.name}</strong> - Current Bid: {auction.currentBid}
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="body1">
              No auctions available.
            </Typography>
          )}
      </Paper>
    </div>);
}

export default PlaceBid;


