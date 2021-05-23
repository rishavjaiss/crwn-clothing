import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import Hats from "./Pages/Hats";
import Jackets from "./Pages/Jackets";
import Sneakers from "./Pages/Sneakers";
import Womens from "./Pages/Womens";
import Mens from "./Pages/Mens";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/jackets" component={Jackets} />
        <Route exact path="/shop/sneakers" component={Sneakers} />
        <Route exact path="/shop/womens" component={Womens} />
        <Route exact path="/shop/mens" component={Mens} />
      </Switch>
    </>
  );
}

export default App;
