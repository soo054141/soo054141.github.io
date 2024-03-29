import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    h1 {
        color: ${({ mode, theme }) =>
            mode === "light" ? "#212121" : theme.colors.color};
    }

    @media screen and (max-width: 767px) {
        height: 80em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

const Title_box = styled.div`
    padding: 12.5% 0 0 12.5%;
    font-weight: bold;

    h3 {
        margin-left: 0.8rem;
        font-size: 3.5rem;
        color: ${({ mode, theme }) =>
            mode === "light" ? "#6b6666" : theme.colors.color};
    }

    h1 {
        font-size: 12rem;
    }

    @media screen and (max-width: 767px) {
        padding: 3rem 0 0 0;
        h3 {
            margin-left: 0.5rem;
            font-size: 2.5rem;
        }
        h1 {
            font-size: 8rem;
        }
    }
`;

const Name_box = styled.div`
    width: 20rem;
    margin: 11.19% 0% 0% 78.12%;
    font-weight: bold;
    color: ${({ mode, theme }) =>
        mode === "light" ? "#3a3a3a" : theme.colors.color};

    h1 {
        font-size: 4rem;
        margin-left: -0.5rem;
    }
    h3 {
        margin: 1rem 0rem 1rem 0rem;
        font-size: 2rem;
    }
    p {
        font-size: 1.65rem;
    }
    h6 {
        margin-top: 3.5rem;
        font-size: 1.25rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-left: 74%;
    }

    @media screen and (max-width: 767px) {
        margin: 0;
        text-align: center;

        h1 {
            font-size: 3rem;
            margin-left: -0.1rem;
        }

        h3 {
            margin: 0.5rem 0rem 1.7rem 0rem;
        }

        h6 {
            margin-top: 2rem;
        }
    }
`;

const Header = ({ mode }) => {
    return (
        <Container>
            <Title_box mode={mode}>
                <h3>2022</h3>
                <h1>Portfolio</h1>
            </Title_box>
            <Name_box mode={mode}>
                <h1>김유림</h1>
                <h3>KIM YURIM</h3>
                <p>soo054141@gmail.com</p>
                <h6>https://github.com/soo054141</h6>
            </Name_box>
        </Container>
    );
};

export default Header;
