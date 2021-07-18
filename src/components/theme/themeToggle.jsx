import React from "react";
import styled from "styled-components";
import { MdWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const ToggleWrapper = styled.button`
    position: fixed;
    z-index: 999999;
    top: 3%;
    right: 4%;
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 36px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.bgColor};
    color: ${(props) => props.theme.colors.color};
`;

function ThemeToggleBtn({ mode, click }) {
    return (
        <ToggleWrapper onClick={click}>
            {mode === "dark" ? <FaRegMoon /> : <MdWbSunny />}
        </ToggleWrapper>
    );
}

export default ThemeToggleBtn;
