import React, { useState } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Bids.styles.css';



function ListBids()  {  

  const [placeBidRequest, setPlaceBidRequest] = useState({
    placedBy: '',
    forAuction: '',
    amount: '',
  });
  const [listForAuctionRequest, setListForAuctionRequest] = useState({
    auctionId: '',
  });
  const [bid, setBid] = useState({});
  const [bids, setBids] = useState([]);

  const handlePlaceBidSubmit = (event) => {
    event.preventDefault();
    axios.post('/placeBid', placeBidRequest)
      .then(response => {
        setBid(response.data);
        setPlaceBidRequest({
          placedBy: '',
          forAuction: '',
          amount: '',
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleListForAuctionSubmit = (event) => {
    event.preventDefault();
    axios.get('/listForAuction', { params: listForAuctionRequest })
      .then(response => {
        setBids(response.data);
        setListForAuctionRequest({
          auctionId: '',
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <div className="main">
      <Typography component="h1" variant="h4" align="center">
        Bids Controller Interface
      </Typography>
  
      <Paper className="paper">
    
        {bid.id && (
          <Typography variant="body1">
            Bid placed successfully with ID: {bid.id}
          </Typography>
        )}
  
        <Typography component="h2" variant="h5" className="formlabel">
          List Bid for Auction
        </Typography>
        <form className="form" onSubmit={handleListForAuctionSubmit}>
          <TextField
            label="Auction ID"
            value={listForAuctionRequest.auctionId}
            onChange={(event) =>
              setListForAuctionRequest({
                ...listForAuctionRequest,
                auctionId: event.target.value,
              })
            }
            margin="normal"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit"
          >
            List Bids
          </Button>
        </form>
        {bids.length > 0 && (
          <ul>
            {bids.map((bid) => (
              <li key={bid.id}>
                {bid.placedBy}: {bid.amount}
              </li>
            ))}
          </ul>
        )}
      </Paper>
    </div>
  );
  
}

export default ListBids;
