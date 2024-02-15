import { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 16px;
`

const Button = styled.button`
    cursor: pointer;
    padding: 12px 20px;
    text-align: center;
    font-size: 16px;
    background: transparent;
    border: 2px solid #A7F67B;
    color: #A7F67B;
    border-radius: 12px;
    transition: .3s;
    &:hover {
        color: #282828;
        background: #A7F67B;
    }
    &:active {
        color: #FDFAFF;
        background: #8A2DE7;
        border: 2px solid #8A2DE7;
    }
`

export default function Filter() {
    const [filterType, setFilterType] = useState('ALL')

    return(
        <FilterContainer>
            
        </FilterContainer>
    )
}