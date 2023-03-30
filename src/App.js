//add some line public/index.html<24-35>


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


import SignUp from './component/user/SignUp/SignUp'
import LogOut from './component/user/logout/LogOut'
import SignIn from './component/user/Signin/SignIn'
import UserDashboard from './component/user/Dashboard/Dashboard'
import NavBar from './component/dashboard/NavBar';
import PublicRoute from './component/Route/PublicRoute'
import UserRoute from './component/Route/UserRoute'
import ProductHero from './component/home/ProductHero'



//User
import NotFound from './component/dashboard/NotFound'
import PlaceBid from './component/Auction/PlaceBid';
import ListBids from './component/Auction/ListBids';
import ListTokens from './component/Auction/ListTokens';
import AuctionList from './component/Auction/AuctionList';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <NavBar />

          <Switch>
            <Route exact path='/' component={ProductHero} />
            <Route exact path="/user/register" component={SignUp} />
            <Route exact path="/user/login" component={SignIn} />
            <Route exact path="/listbids" component={ListBids}/>
            <Route exact path="/placeBid" component={PlaceBid}/>
            <PublicRoute exact path='/user/dashboard' component={UserDashboard} />
            <PublicRoute exact path="/logout" component={LogOut} />
            <PublicRoute exact path="/AuctionList" component={AuctionList} />
        
            <PublicRoute exact path="/ListToken" component={ListTokens} />
            
            //User


            <Route component={NotFound} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
