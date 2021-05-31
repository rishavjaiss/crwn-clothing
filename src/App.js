import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import Header from "./Components/header";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import SignInAndSignUp from "./Pages/SignIn-SignUp";
import CheckoutPage from "./Pages/Checkout";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(user);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
