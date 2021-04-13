import React from "react";
import styled from "styled-components";
import imgA from "../images/box2.png";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px) {
        margin-bottom: 8rem;
        flex-direction: column-reverse;
    }
`;

const InfoWrap = styled.div`
    width: 48%;
    height: 70rem;
    font-weight: bold;
    padding-top: 5rem;

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
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 60rem;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 51.3rem;
    }
`;

const Cal = () => {
    return (
        <Container>
            <InfoWrap>
                <div>
                    <h1>계산기</h1>
                    <h2>[Calculator]</h2>
                </div>
                <div>
                    <p>
                        <span>제작연도</span>2020
                    </p>
                    <p>
                        <span>팀구성&nbsp; &nbsp;</span>
                        개인 100%
                    </p>
                    <p>
                        <span>사용기술</span>
                        Vanila JS, CSS3, HTML5
                    </p>
                </div>
                <div>
                    <h3>상세설명</h3>
                    <p>
                        바닐라 자바스크립트로 간단한 사칙연산을 할 수 있는
                        <br />
                        계산기 기능을 구현하였습니다.
                        <br />
                        Equal 사인을 누르지 않고도 다른 기호를 누르면 화면에
                        <br />
                        계산된 결과 값이 출력됩니다.
                    </p>
                </div>
                <div>
                    <h3>Repo</h3>
                    <p>
                        <a href="https://yurimi95.github.io/Calculator/">
                            https://yurimi95.github.io/Calculator/
                        </a>
                    </p>
                </div>
            </InfoWrap>
            <ImgWrap>
                <img src={imgA} alt="line" />
            </ImgWrap>
        </Container>
    );
};

export default Cal;
