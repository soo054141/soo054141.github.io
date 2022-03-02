import React from "react";
import styled from "styled-components";
import gitFarm from "../images/gitfarm.png";
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
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    width: 48%;
    font-weight: bold;

    div {
        width: 88%;
        margin: 4.5% 0% 0% 7%;
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

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
        div {
            width: 80%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 60rem;

        div {
            width: 90%;
            margin-left: 3%;
        }
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
    margin-left: 40px;

    img {
        width: 375px;
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

const Todo = () => {
    const animatedItem = useScrollFadeIn();
    return (
        <Container {...animatedItem}>
            <ImgWrap>
                <a href="https://elice-kdt-sw-1st-team1.elicecoding.com/">
                    <img src={gitFarm} alt="line" />
                    {/* <GitFarm /> */}
                </a>
            </ImgWrap>
            <InfoWrap>
                <div>
                    <h1>Git 잔디 관리 서비스</h1>
                    <h2>[Git Farm]</h2>
                </div>
                <div>
                    <p>
                        <span>제작연도</span>2022
                    </p>
                    <p>
                        <span>팀구성&nbsp; &nbsp;</span>
                        Front - 3명/ Back - 2명
                    </p>
                    <p>
                        <span>사용기술</span>
                        ReactJS, React Hooks API, styled-components
                    </p>
                </div>
                <div>
                    <h3>상세설명</h3>
                    <p>
                        Git 잔디 관리를 즐겁고 꾸준하게 할 수 있도록 장려하고 도와주는 서비스
                        <br />
                        
                        <br />
                        기존 GitHub 페이지에서 제공하는 잔디 그래프 형태 대신에,
                        <br />
                        캘린더와 차트 형태로 데이터를 시각화하여 제공하기 때문에 
                        <br />
                        유저가 좀 더 쉽게 데이터를 확인할 수 있습니다.
                        <br /> 
                        커밋 수에 따라 채워지는 농장 꾸미기, 랭킹 시스템, 배지 획득 등의
                        <br /> 
                        다양한 기능으로 게임하는 듯한 재미와 성취감을 
                        느낄 수 있게 하였습니다.
                        <br />
                        랭킹 시스템을 도입하여 유저들간의 선의의 경쟁을 유도할 수 있게 하였습니다.
                    </p>
                </div>
                <div>
                    <h3>View</h3>
                    <p>
                        <a href="https://elice-kdt-sw-1st-team1.elicecoding.com/">
                        https://elice-kdt-sw-1st-team1.elicecoding.com/
                        </a>
                    </p>
                </div>
                {/* <div>
                    <h3>Repo</h3>
                    <p>
                        <a href="https://github.com/soo054141/Todo">
                            https://github.com/soo054141/Todo
                        </a>
                    </p>
                </div> */}
            </InfoWrap>
        </Container>
    );
};

export default Todo;
