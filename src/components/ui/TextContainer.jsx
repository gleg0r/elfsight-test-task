import React from "react";
import styled from "styled-components";

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: fit-content;
    background: #282828;
    gap: 12px;
`

const Title = styled.h1`
    color: #FDFAFF;
    font-size: 16px;
    background: #282828;

`

const SubTitle = styled.p`
    font-size: 14px;
    background: #282828;
    color: #FDFAFF;

`

export default function TextContainer(props) {
    return (
        <FlexColumn>
            <Title>Имя: {props.name}</Title>
            <SubTitle>Статус: {props.status}</SubTitle>
            <SubTitle>Пол: {props.gender}</SubTitle>
            <SubTitle>Раса: {props.species}</SubTitle>
        </FlexColumn>
    )
}