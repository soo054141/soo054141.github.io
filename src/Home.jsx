import React, { useRef } from "react";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Todo from "./components/pages/Todo";
import Cal from "./components/pages/Cal";
import Introduce from "./components/pages/Introduce";
import Footer from "./components/Footer";
import TopBtn from "./components/pages/TopBtn";

function Home() {
    const ReviewRef = useRef();

    const handleIndexClick = () =>
        ReviewRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });

    return (
        <>
            <div ref={ReviewRef}>
                <Header />
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
                <Introduce />
            </div>
            <div>
                <Footer />
            </div>
            <div onClick={handleIndexClick}>
                <TopBtn />
            </div>
        </>
    );
}

export default Home;
