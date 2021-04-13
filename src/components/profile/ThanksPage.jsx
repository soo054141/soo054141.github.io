import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 93rem;
    margin: 0 auto;
    line-height: 1.3;

    @media screen and (max-width: 500px) {
        height: auto;
        margin-bottom: 8rem;
    }
`;

const Messages = styled.div`
    width: 45rem;
    height: auto;
    margin: 0 auto;
    padding-top: 25%;
    text-align: center;
    div {
        background-color: #ede0e0;
        font-size: 3rem;
        color: #bf8787;
    }
    p {
        font-size: 2.8rem;
    }
    span {
        font-size: 2.8rem;
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

const Contacts = styled.div`
    margin-top: 20rem;
    width: 30rem;
    div {
        width: 15rem;
        height: 3rem;
        background-color: #ede0e0;
        font-size: 1.8rem;
        padding-left: 7rem;
    }
    p {
        font-size: 1.8rem;
        margin-left: 7rem;
    }

    @media screen and (max-width: 500px) {
        margin-left: -3rem;
    }
`;

const ThanksPage = () => {
    return (
        <Container>
            <Messages>
                <div>Thank you for watching</div>
                <p>
                    여기까지 봐주셔서 감사합니다
                    <br />
                    성장하는 FE개발자 <span>김유림</span>이었습니다
                </p>
            </Messages>

            <Contacts>
                <div>Contacts</div>
                <p>010.6623.0541</p>
                <p>soo054141@gmail.com</p>
            </Contacts>
        </Container>
    );
};
export default ThanksPage;
