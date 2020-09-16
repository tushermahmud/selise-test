import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from "react-router-dom";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import store from "./redux/store";
import {Provider} from "react-redux"
import SingleProduct from "./components/pages/SingleProduct";
function App() {
  return (
      <Provider store={store}>
          <Switch>
              <Route exact path="/" component={Shop}/>
              <Route exact path="/cart" component={Cart}/>
              <Route path="/product/:productId" component={SingleProduct}/>
          </Switch>
      </Provider>
  );
}

export default App;
