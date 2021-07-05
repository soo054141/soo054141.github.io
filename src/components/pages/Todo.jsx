import React from "react";
import styled from "styled-components";
import imgC from "../images/box3.png";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px) {
        margin-bottom: 8rem;
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    width: 48%;
    height: 70rem;
    font-weight: bold;
    padding-top: 5rem;

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
        margin-top: 7rem;
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
    padding: 8rem 4rem;
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

const Todo = () => {
    return (
        <Container>
            <ImgWrap>
                <a href="https://soo054141.github.io/Todo/">
                    <img src={imgC} alt="line" />
                </a>
            </ImgWrap>
            <InfoWrap>
                <div>
                    <h1>일정 관리 페이지</h1>
                    <h2>[To-do List]</h2>
                </div>
                <div>
                    <p>
                        <span>제작연도</span>2021
                    </p>
                    <p>
                        <span>팀구성&nbsp; &nbsp;</span>
                        개인 100%
                    </p>
                    <p>
                        <span>사용기술</span>
                        JavaScript, styled-components, ReactJS
                    </p>
                </div>
                <div>
                    <h3>상세설명</h3>
                    <p>
                        할 일 목록을 추가, 삭제하는 기능을 구현한 페이지
                        <br />
                        React의 styled-components로 디자인 및 웹 사이트 구축,
                        <br /> 사용자가 이용하는 날짜를 실시간으로 반영하여
                        보여주는 기능과
                        <br />
                        일정을 추가 및 삭제, 완료된 목록을 체크하는 기능이
                        있습니다.
                    </p>
                </div>
                <div>
                    <h3>Repo</h3>
                    <p>
                        <a href="https://github.com/soo054141/Todo">
                            https://github.com/soo054141/Todo
                        </a>
                    </p>
                </div>
            </InfoWrap>
        </Container>
    );
};

export default Todo;
