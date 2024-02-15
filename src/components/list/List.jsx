import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, setShowModal, setCharacter } from "../../store/getDataSlice";
import Card from "../card/Card";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 60px;
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

    return (
        status === 'resolved' && <GridContainer>
            {
            characters.results.map((item, index) => {
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
