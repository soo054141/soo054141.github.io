import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "src/Home";
import Profile from "src/components/profile/Profile";
import Cal from "src/components/works/Cal";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/works" component={Cal} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
