import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import Header from "./Components/header";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import SignInAndSignUp from "./Pages/SignIn-SignUp";
import Hats from "./Pages/Hats";
import Jackets from "./Pages/Jackets";
import Sneakers from "./Pages/Sneakers";
import Womens from "./Pages/Womens";
import Mens from "./Pages/Mens";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route exact path="/shop/hats" component={Hats} />
          <Route exact path="/shop/jackets" component={Jackets} />
          <Route exact path="/shop/sneakers" component={Sneakers} />
          <Route exact path="/shop/womens" component={Womens} />
          <Route exact path="/shop/mens" component={Mens} />
        </Switch>
      </>
    );
  }
}

export default App;
