import React from "react";
import styled from "styled-components";

const Container = styled.button`
    position: fixed;
    right: 4%;
    bottom: 9rem;
    font-size: 1.4rem;
    color: #bf8787;
    background-color: #ede0e0;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
`;

function TopBtn() {
    return <Container>Top ▲</Container>;
}

export default TopBtn;
