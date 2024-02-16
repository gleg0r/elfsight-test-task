import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, setShowModal, setCharacter } from "../../store/getDataSlice";
import Card from "../card/Card";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 60px;
    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(10, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(20, 1fr);
        padding-left: calc(73% - 300px)
    }
    @media (max-width: 540px) {
        padding-left: calc(78% - 300px)
    }
    @media (max-width: 370px) {
        padding: 25px;
    }
`

export default function ListContainer() {
    const characters = useSelector(state => state.getData.characters);
    const status = useSelector(state => state.getData.status);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCharacters());
    }, [dispatch])
    
    function handleClick(index) {
       dispatch(setCharacter(index));
       dispatch(setShowModal(true));
    }

    console.log(characters);

    return (
        status === 'resolved' && <GridContainer>
            {
            characters.map((item, index) => {
                return <Card
                            onClick={() => handleClick(index)}
                            name={item.name}
                            url={item.image}
                            status={item.status}
                            gender={item.gender}
                            species={item.species}
                        />
            })
            }
        </GridContainer>
    )
}
