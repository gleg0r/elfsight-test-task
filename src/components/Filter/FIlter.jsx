import { useDispatch } from "react-redux";
import styled from "styled-components";
import { 
    filterGender,
    filterName,
    filterSpecies,
    filterStatus,
    filterType,
    filterAllFilters
} from "../../store/getDataSlice";

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
    //const [filterType, setFilterType] = useState('ALL')
    const dispatch = useDispatch(); 
    
    function filterClick(type) {
        switch (type) {
            case 'ALL':
                dispatch(filterAllFilters());
                break;
            case 'NAME':
                dispatch(filterName());
                break;
            case 'STATUS':
                dispatch(filterStatus());
                break;
            case 'SPECIES':
                dispatch(filterSpecies());
                break; 
            case 'TYPE':
                dispatch(filterType());
                break;
            case 'GENDER':
                dispatch(filterGender());
                break;           
            default: console.log('error');    
        }
    }

    return(
        <FilterContainer>
            <Button onClick={() => filterClick('ALL')}>Фильтр по все параметрам</Button>
            <Button onClick={() => filterClick('NAME')}>По имени</Button>
            <Button onClick={() => filterClick('STATUS')}>По статусу</Button>
            <Button onClick={() => filterClick('SPECIES')}>По виду</Button>
            <Button onClick={() => filterClick('TYPE')}>По типу</Button>
            <Button onClick={() => filterClick('GENDER')}>По полу</Button>
        </FilterContainer>
    )
}