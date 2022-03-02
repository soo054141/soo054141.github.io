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
                    <h1>유기동물 정보 커뮤니티</h1>
                    <h2>[반려in]</h2>
                </div>
                <div>
                    <p>
                        <span>제작연도</span>2022
                    </p>
                    <p>
                        <span>팀구성&nbsp; &nbsp;</span>
                        Front - 4명/ Back - 2명
                    </p>
                    <p>
                        <span>사용기술</span>
                        JavaScript, CSS3, HTML5, Node.js
                    </p>
                </div>
                <div>
                    <h3>상세설명</h3>
                    <p>
                        유기동물 입양 정보 획득 및 반려 동물 정보 공유 및
                        <br /> 
                        소통을 할 수 있는 커뮤니티 사이트
                        <br /> 
                        <br />
                        유기동물 공공 API를 이용하여 현재 보호중인 동물의
                        <br /> 
                        현황 및 통계를 확인할 수 있습니다. 이를 통해 새로 생긴 가족이
                        <br />
                        쉽게 적응할 수 있도록 유저간 정보 공유가
                        <br />
                        가능한 게시판 기능이 있습니다.
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
