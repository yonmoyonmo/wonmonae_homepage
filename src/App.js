import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Information from "./Pages/Information";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Information} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
