import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100px;
    width: 100px;
    height: 100px;
    border: 1px solid #8A2DE7;
    border-radius: 50%;
    align-self: center;
`

export default function Img(props) {
    return <StyledImg {...props} />
}