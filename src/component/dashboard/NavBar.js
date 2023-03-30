
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'


let usr = {
    username: "gerald",
    password: "password"
}
const Navbar = (props) => {
    // console.log('navbar', props)
    //const { isAuthenticated, user } = props.user
    const isAuthenticated = true;
    const user = usr;

   
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link className="nav-link" to="/user/register" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Register</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to='/user/login' role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/user/dashboard" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Dashboard</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/product" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Add Tokens</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to='/ListToken' role="button" style={{ background: "#000066", color: '#f3f3f3' }}>My Tokens</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to='/AuctionList' role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Auctions</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/placeBid" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>Place Bid</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/ListBids" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>List Bid</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/bidders" role="button" style={{ background: "#000066", color: '#f3f3f3' }}>My token Bidders</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
    return {
        user: usr
    }
}

export default connect(mapStateToProps)(Navbar)