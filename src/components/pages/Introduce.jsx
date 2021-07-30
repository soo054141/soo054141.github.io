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
                    <h1>김유림</h1>
                    <h3>KIM YURIM</h3>
                </Name_title>
                <IntroSection>
                    <SectionTitle>소개</SectionTitle>
                    <SectionItems>
                        <CardBody>
                            <div>
                                <h4>#원활한 소통 능력</h4>
                            </div>
                            <p>
                                원활한 의사소통 능력을 지녀야 좋은 개발자가 될
                                수 있다고 생각합니다. 개발자라는 직업에 대해
                                흔히들 ‘혼자 일해도 되는 직업’이라고 오해하는
                                경향이 있습니다. 물론 혼자서 결과를 잘
                                만들어내는 능력도 중요하겠지만, 문제 해결 방법을
                                빠르게 찾아 주어진 기한 내에 실행할 수 있도록
                                동료와 원만하게 소통할 줄 아는 능력도 중요하다고
                                생각합니다. 전공 특성상 빈번하게 이뤄졌던 팀
                                프로젝트 경험으로 갈등을 조정하는 방법과 배려를
                                기반으로 한 의사소통 능력을 길러냈습니다.
                                디자인과 마케팅을 배웠던 전공 지식으로 실무에서
                                기획자나 디자이너가 원하는 것을 남들보다 빠르고
                                정확하게 이해할 수도 있을 것입니다.
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>#새로운 것을 두려워하지 않는 도전정신</h4>
                            </div>
                            <p>
                                개발자라면 새로운 것을 두려워하지 않는
                                도전정신을 갖춰야 한다고 생각합니다. 매년 새로운
                                언어와 기술이 쏟아지는데, 습득하는 것이 싫다고
                                계속 오래된 기술을 고집한다면 좋은 개발자가 될
                                수 없다고 생각합니다. 저는 학부 시절 듣고 싶은
                                강의가 있다면 그게 난도가 높은 타
                                전공과목이더라도 수강했고, 창업대회에 도전하여
                                정부지원금을 받은 경험도 있습니다. 퍼블리셔로
                                일할 기회가 있었지만, 자바스크립트를 깊게
                                이해하고자 공부하는 것을 택했고 거기에 그치지
                                않고 현재는 리액트를 공부하고 있습니다.
                            </p>
                        </CardBody>
                    </SectionItems>
                    <SectionTitle>활동</SectionTitle>
                    <SectionItems>
                        <CardBody>
                            <div>
                                <h4>패스트캠퍼스 취업완성스쿨 1기 선발과정</h4>
                                <h5>2021-02 ~ 2021-03</h5>
                            </div>
                            <p>
                                패스트캠퍼스에서 주관하는 취업 완성 스쿨 1기
                                선발 과정에 참여, 자료구조와 알고리즘 공부
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>이노베이션 아카데미 42 seoul La piscine</h4>
                                <h5>2020-11 ~ 2020-12</h5>
                            </div>
                            <p>
                                이노베이션 아카데미의 SW 프로그램인 1개월
                                집중교육(La Piscine) 과정 참여, 리눅스 환경으로
                                셸 스크립트와 C언어를 경험
                            </p>
                        </CardBody>
                        <CardBody>
                            <div>
                                <h4>오프라인 스터디 활동</h4>
                                <h5>2020-03 ~ 2020-09</h5>
                            </div>
                            <p>
                                React를 익히고 이용하여 개인 프로젝트 제작,
                                JavaScript의 자료구조와 알고리즘을 공부하는
                                소규모 스터디 운영 및 활동
                            </p>
                        </CardBody>
                    </SectionItems>
                </IntroSection>
            </Container>
        </Wrap>
    );
}
export default Introduce;
