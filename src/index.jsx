import React from "react";
import ReactDOM from "react-dom";
import Router from "src/Router";
import GlobalStyles from "./components/theme/GlobalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Router />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
