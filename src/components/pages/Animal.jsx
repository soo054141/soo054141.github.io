import React from "react";
import styled from "styled-components";
import animalImg from "../images/animal.gif"
import useScrollFadeIn from "./useScrollFadeIn";

const Container = styled.div`
    width: 100%;
    height: 90rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px) {
        height: auto;
        margin-bottom: 8rem;
        flex-direction: column-reverse;
    }
`;

const InfoWrap = styled.div`
    width: 48%;
    height: 70rem;
    font-weight: bold;
    padding-top: 2rem;
    div {
        width: 88%;
        margin: 4.5% 0% 0% 11.428%;
    }
    h1 {
        font-size: 3.2rem;
    }
    h2 {
        padding-top: 1.5rem;
        font-size: 2rem;
    }
    h3 {
        margin-top: 5rem;
        font-size: 1.9rem;
    }
    span {
        padding-right: 2rem;
        font-size: 1.6rem;
        font-weight: bold;
    }
    p,
    a {
        margin-top: 1.3rem;
        font-size: 1.6rem;
        font-weight: lighter;
        line-height: 1.5;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 60rem;

        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.6rem;
        }
        span,
        p,
        a {
            font-size: 1.3rem;
        }
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        padding: 2rem 0 0 1rem;
        height: auto;
        div {
            width: 100%;
            margin: 0;
        }

        h3 {
            margin-top: 5rem;
        }
    }
`;

const ImgWrap = styled.div`
    width: 48%;
    height: 70rem;
    padding: 8rem 4rem;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        padding: 20px;
        border: 2px solid #797979;
        border-radius: 10px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 60rem;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 51.3rem;
    }
`;

const Animal = () => {
    const animatedItem = useScrollFadeIn();
    return (
        <Container {...animatedItem}>
            <InfoWrap>
                <div>
                    <h1>???????????? ?????? ????????????</h1>
                    <h2>[??????in]</h2>
                </div>
                <div>
                    <p>
                        <span>????????????</span>2022
                    </p>
                    <p>
                        <span>?????????&nbsp; &nbsp;</span>
                        Front - 4???/ Back - 2???
                    </p>
                    <p>
                        <span>????????????</span>
                        JavaScript, CSS3, HTML5, Node.js
                    </p>
                </div>
                <div>
                    <h3>????????????</h3>
                    <p>
                        ???????????? ?????? ?????? ?????? ??? ?????? ?????? ?????? ?????? ???
                        <br /> 
                        ????????? ??? ??? ?????? ???????????? ?????????
                        <br /> 
                        <br />
                        ???????????? ?????? API??? ???????????? ?????? ???????????? ?????????
                        <br /> 
                        ?????? ??? ????????? ????????? ??? ????????????. ?????? ?????? ?????? ?????? ?????????
                        <br />
                        ?????? ????????? ??? ????????? ????????? ?????? ?????????
                        <br />
                        ????????? ????????? ????????? ????????????.
                    </p>
                </div>
                <div>
                    <h3>View</h3>
                    <p>
                        <a href="https://elice3.herokuapp.com/">
                        https://elice3.herokuapp.com/
                        </a>
                    </p>
                </div>
            </InfoWrap>
            <ImgWrap>
                <a href="https://yurimi95.github.io/Calculator/">
                    <img src={animalImg} alt="line" />
                </a>
            </ImgWrap>
        </Container>
    );
};

export default Animal;
