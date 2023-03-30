import React, { useState } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Bids.styles.css';



function PlaceBid()  {

  

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
        <Typography component="h2" variant="h5">
          Place Bid
        </Typography>
        <form className="form" onSubmit={handlePlaceBidSubmit}>
          <TextField
            label="Placed By"
            value={placeBidRequest.placedBy}
            onChange={(event) =>
              setPlaceBidRequest({
                ...placeBidRequest,
                placedBy: event.target.value,
              })
            }
            margin="normal"
            fullWidth
          />
          <TextField
            label="For Auction"
            value={placeBidRequest.forAuction}
            onChange={(event) =>
              setPlaceBidRequest({
                ...placeBidRequest,
                forAuction: event.target.value,
              })
            }
            margin="normal"
            fullWidth
          />
          <TextField
            label="Amount"
            value={placeBidRequest.amount}
            onChange={(event) =>
              setPlaceBidRequest({
                ...placeBidRequest,
                amount: event.target.value,
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
            Place Bid
          </Button>
        </form>
        {bid.id && (
          <Typography variant="body1">
            Bid placed successfully with ID: {bid.id}
          </Typography>
        )}
  

      </Paper>
    </div>
  );
  
}

export default PlaceBid;
