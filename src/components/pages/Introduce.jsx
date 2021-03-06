import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    width: 100%;
    height: 83rem;
    padding-top: 10rem;
    line-height: 1.3;

    @media screen and (max-width: 1919px) {
        height: auto;
    }
`;

const Container = styled.div`
    width: 89%;
    margin: 0 auto;
`;

const Name_title = styled.div`
    font-weight: bold;

    h1 {
        font-size: 4rem;
        color: ${({ mode, theme }) =>
            mode === "light" ? "#212121" : theme.colors.color};
    }

    h3 {
        margin-left: 0.3rem;
        font-size: 2rem;
        color: ${({ mode, theme }) =>
            mode === "light" ? "#3a3a3a" : theme.colors.color};
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }

        h3 {
            margin-left: 0.2rem;
            font-size: 1.6rem;
        }
    }
`;

const SectionTitle = styled.div`
    font-weight: bold;
    font-size: 1.9rem;

    @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
    }
`;

const SectionItems = styled.div`
    div {
        width: 590px;
    }

    h4 {
        font-weight: bold;
        font-size: 1.9rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.6rem;
        color: #74746f;
    }

    @media screen and (max-width: 1439px) {
        div {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 768px) {
        h4 {
            font-size: 1.6rem;
        }
        p {
            font-size: 1.3rem;
        }
    }
`;

const IntroSection = styled.div`
    padding-top: 5.6rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    @media screen and (max-width: 1439px) {
        display: block;
    }
`;

const CardBody = styled.div`
    margin-bottom: 2.6rem;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    h5 {
        margin-top: 0.25rem;
        font-size: 1.6rem;
        color: #98a8b9;
    }

    h4 {
        font-weight: bold;
        font-size: 1.9rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.6rem;
        color: #74746f;
    }

    @media screen and (max-width: 1439px) {
        div {
            display: block;
        }

        p {
            margin-bottom: 4rem;
        }
    }

    @media screen and (max-width: 768px) {
        h4 {
            font-size: 1.6rem;
        }
        p {
            font-size: 1.3rem;
        }
    }
`;

function Introduce({ mode }) {
    return (
        <Wrap mode={mode}>
            <Container>
                <Name_title>
                    <h1>?????????</h1>
                    <h3>KIM YURIM</h3>
                </Name_title>
                <IntroSection>
                    <SectionTitle>??????</SectionTitle>
                    <SectionItems>
                        <CardBody>
                            <div>
                                <h4>#????????? ?????? ??????</h4>
                            </div>
                            <p>
                                ????????? ???????????? ????????? ????????? ?????? ???????????? ???
                                ??? ????????? ???????????????. ??????????????? ????????? ??????
                                ????????? ????????? ????????? ?????? ?????????????????? ????????????
                                ????????? ????????????. ?????? ????????? ????????? ???
                                ??????????????? ????????? ??????????????????, ?????? ?????? ?????????
                                ????????? ?????? ????????? ?????? ?????? ????????? ??? ?????????
                                ????????? ???????????? ????????? ??? ?????? ????????? ???????????????
                                ???????????????. ?????? ????????? ???????????? ???????????? ???
                                ???????????? ???????????? ????????? ???????????? ????????? ?????????
                                ???????????? ??? ???????????? ????????? ??????????????????.
                                ???????????? ???????????? ????????? ?????? ???????????? ????????????
                                ???????????? ??????????????? ????????? ?????? ???????????? ?????????
                                ???????????? ????????? ?????? ?????? ????????????.
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>#????????? ?????? ??????????????? ?????? ????????????</h4>
                            </div>
                            <p>
                                ??????????????? ????????? ?????? ??????????????? ??????
                                ??????????????? ????????? ????????? ???????????????. ?????? ?????????
                                ????????? ????????? ???????????????, ???????????? ?????? ?????????
                                ?????? ????????? ????????? ??????????????? ?????? ???????????? ???
                                ??? ????????? ???????????????. ?????? ?????? ?????? ?????? ??????
                                ????????? ????????? ?????? ????????? ?????? ???
                                ???????????????????????? ????????????, ??????????????? ????????????
                                ?????????????????? ?????? ????????? ????????????. ???????????????
                                ?????? ????????? ????????????, ????????????????????? ??????
                                ??????????????? ???????????? ?????? ????????? ????????? ?????????
                                ?????? ????????? ???????????? ???????????? ????????????.
                            </p>
                        </CardBody>
                    </SectionItems>
                    <SectionTitle>??????</SectionTitle>
                    <SectionItems>
                        <CardBody>
                            <div>
                                <h4>????????? SW Engineer Track</h4>
                                <h5>2021-10 ~ 2022-02</h5>
                            </div>
                            <p>
                                ????????? SW Engineer Track?????? ??? ???????????????
                                ????????? ????????? JavaScript, React.js, node.js ??? ??????
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>??????????????? ???????????? 42 seoul La piscine</h4>
                                <h5>2020-11 ~ 2020-12</h5>
                            </div>
                            <p>
                                ??????????????? ??????????????? SW ??????????????? 1??????
                                ????????????(La Piscine) ?????? ??????, ????????? ????????????
                                ??? ??????????????? C????????? ??????
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>???????????? ????????? ??????</h4>
                                <h5>2020-03 ~ 2020-09</h5>
                            </div>
                            <p>
                                React??? ????????? ???????????? ?????? ???????????? ??????,
                                JavaScript??? ??????????????? ??????????????? ????????????
                                ????????? ????????? ?????? ??? ??????
                            </p>
                        </CardBody>
                    </SectionItems>
                </IntroSection>
            </Container>
        </Wrap>
    );
}
export default Introduce;
