import React from "react";
import { Link } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/works/Login";
import Todo from "./components/works/Todo";
import Cal from "./components/works/Cal";
import ThanksPage from "./components/profile/ThanksPage";

function Home() {
    return (
        <>
            <div>
                <Main />
            </div>
            <div>
                <Login />
            </div>
            <div>
                <Todo />
            </div>
            <div>
                <Cal />
            </div>
            <div>
                <ThanksPage />
            </div>
            {/* <div>
                <button>
                    <Link to="/profile">Profile</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/works">Works</Link>
                </button>
            </div> */}
        </>
    );
}

export default Home;
