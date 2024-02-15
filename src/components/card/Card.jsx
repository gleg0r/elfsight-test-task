import React from "react";
import styled from "styled-components";
import Img from "../ui/Img";
import TextContainer from "../ui/TextContainer";

const CardWrapper = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    background: #282828;
    border: 1px solid #A7F67B;
    border-radius: 40px;
    transition: .3s;
    padding: 18px;
    cursor: pointer;
    gap: 10px;
    &:hover {
       filter: drop-shadow(0px 0px 10px #A7F67B)
    }
`

export default function Card(props) {
    return (
        <CardWrapper {...props}>
            <Img url={props.url} />
            <TextContainer
                name={props.name} 
                status={props.status} 
                gender={props.gender}
                species={props.species}
            />
        </CardWrapper>
    )
}