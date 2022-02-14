import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Todo from "./components/pages/Todo";
import Animal from "./components/pages/Animal";
import Introduce from "./components/pages/Introduce";
import Footer from "./components/Footer";
import TopBtn from "./components/pages/TopBtn";
import ThemeToggleBtn from "./components/theme/themeToggle";
import { dark, light } from "./components/theme/theme";

const Main = styled.div`
    width: 100%;
    height: auto;
    background-color: ${(props) => props.theme.colors.bgColor};
    color: ${(props) => props.theme.colors.color};
`;

const Home = () => {
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () =>
        setThemeMode(themeMode === "light" ? "dark" : "light");

    const ReviewRef = useRef();

    const handleIndexClick = () =>
        ReviewRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });

    return (
        <ThemeProvider theme={themeMode === "light" ? light : dark}>
            <Main>
                <ThemeToggleBtn
                    click={toggleTheme}
                    mode={themeMode === "light" ? "light" : "dark"}
                />
                <div ref={ReviewRef}>
                    <Header mode={themeMode === "light" ? "light" : "dark"} />
                </div>
                <div>
                    <Animal />
                </div>
                <div>
                    <Todo />
                </div>
                <div>
                    <Login />
                </div>
                <div>
                    <Introduce
                        mode={themeMode === "light" ? "light" : "dark"}
                    />
                </div>
                <div>
                    <Footer />
                </div>
                <div onClick={handleIndexClick}>
                    <TopBtn />
                </div>
            </Main>
        </ThemeProvider>
    );
};

export default Home;
