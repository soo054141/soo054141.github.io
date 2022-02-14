import React from "react";
import styled from "styled-components";
import imgB from "../images/login_page.png";
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
        margin-bottom: 5rem;
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
    padding: 9rem 4rem;
    display: flex;
    align-items: center;
    img {
        width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 60rem;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 51.3rem;
    }
`;

const Login = () => {
    const animatedItem = useScrollFadeIn();
    return (
        <Container {...animatedItem}>
            <InfoWrap>
                <div>
                    <h1>회원가입, 로그인 페이지</h1>
                    <h2>[Login Page]</h2>
                </div>
                <div>
                    <p>
                        <span>제작연도</span>2021
                    </p>
                    <p>
                        <span>팀구성&nbsp; &nbsp;</span>
                        개인
                    </p>
                    <p>
                        <span>사용기술</span>
                        ReactJS, React Hooks API, styled-components
                    </p>
                </div>
                <div>
                    <h3>상세설명</h3>
                    <p>
                        회원가입, 로그인, 로그아웃 기능을 구현한 사이트
                        <br />
                        React의 styled-components로 홈페이지 디자인 및 구현,
                        <br /> 로컬 스토리지와 세션 스토리지를 이용해 회원가입
                        및 로그아웃, <br />
                        React-router로 페이지 이동 구현
                    </p>
                </div>
                <div>
                    <h3>View</h3>
                    <p>
                        <a href="https://soo054141.github.io/Login/">
                            https://soo054141.github.io/Login/
                        </a>
                    </p>
                </div>
                <div>
                    <h3>Repo</h3>
                    <p>
                        <a href="https://github.com/soo054141/Login">
                            https://github.com/soo054141/Login
                        </a>
                    </p>
                </div>
            </InfoWrap>
            <ImgWrap>
                <a href="https://soo054141.github.io/Login/">
                    <img src={imgB} alt="works1" />
                </a>
            </ImgWrap>
        </Container>
    );
};

export default Login;
