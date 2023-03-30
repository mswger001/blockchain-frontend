import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

let usr = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "123456",
    mobile: "1234567890",
    role: "user",
    profilePicture: "",
    tokens: [],
    createdAt: 1585739094181,
    isAuthenticated: true
};

const User = (props) => {
    //const User = (usr) =>

    //const name = props.user.usr.firstName[0].toUpperCase() + props.user.user.firstName.slice(1).toLowerCase()
    const name = usr.firstName[0].toUpperCase() + usr.firstName.slice(1).toLowerCase()


    // const name = props.user.user.firstName
    // console.log(name)
    return (
        <>
            <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                    <Link className="nav-link" to="#">Welcome {name}</Link>
                </li>
                <li className="nav-item active">
                  <Link to='/currentBid' className="nav-link">Current Auctions</Link>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle " to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <span className="text-white">Actions</span>

                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/user/dashboard" className="dropdown-item">Dashboard</Link>
                        <Link to="/product" className="dropdown-item">Add Product</Link>


                        <Link to='/myproduct' className="dropdown-item">My Product</Link>
                         <Link to="/myBids" className="dropdown-item">My Bids</Link>
                         <Link to="/bidders" className="dropdown-item">My Product Bidders</Link>

                    </div>
                </li>

                <li className="nav-item active">

                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item">
                    {/* <Link className="nav-link" href="#">Link</Link> */}
                </li>

                <li className="nav-item">
                    {/* <Link className="nav-link disabled" href="#">Disabled</Link> */}
                </li>
            </ul>

            <Link className="btn" to='/logout' role="button" style={{ background: "#000066", color:'#f3f3f3' }}>LogOut</Link>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(User)
