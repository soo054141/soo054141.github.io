import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "src/Home";
// import Calculator from "./components/pages/calculator/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                {/* <Route exact path="/profile" component={Profile} />
                <Route exact path="/calculator" component={Calculator} /> */}
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
