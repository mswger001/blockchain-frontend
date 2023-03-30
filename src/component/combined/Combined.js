import React from 'react'
import ListBids from "../Auction/ListBids"
import ListTokens from "../Auction/ListTokens"
import PlaceBid from "../Auction/PlaceBid"

class Combined extends React.Component {
    render() {
      return (<>
        <ListTokens/>
        <ListBids/>
        <PlaceBid/>
        
      </>)
    }
}

export default Combined
