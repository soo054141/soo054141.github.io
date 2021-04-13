import React from "react";
import ReactDOM from "react-dom";
import Router from "src/Router";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
    return (
        <>
            <Router />
            <GlobalStyles />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
