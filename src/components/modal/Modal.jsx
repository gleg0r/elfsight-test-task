import { useEffect, useMemo } from "react"
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { setShowModal } from "../../store/getDataSlice";

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: transparent;
`
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    /* top: 25%;
    left: 31%; */
    width: fit-content;
    height: fit-content;
    background: #282828;
    opacity: 1;
    border-radius: 40px;
    filter: drop-shadow(0 1px 20px #8A2DE7);
    border: 1px solid #868686;
    padding: 20px;
    justify-content: center;
`

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.7;
`

const Button = styled.button`
    background: transparent;
    background-image: url('https://freesvg.org/img/1544641784.png');
    background-size: cover;
    background-repeat: no-repeat;
    outline: 0;
    border: 0; 
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: #868686;
    justify-self: flex-end;
    align-self: flex-start;
`

const CloseContainer = styled.div`
    width: 100%;
    height: fit-content;
    background: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    padding: 20px;
    padding-top: 0;
    gap: 20px;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
    background: none;
    border: 2px solid #A7F67B;
    border-radius: 28px;
    filter: drop-shadow(0px 0px 5px #A7F67B);
`

const ContentText = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: none;
    padding: 20px;
    padding-top: 40px;
`

const Title = styled.h2`
    font-size: 24px;
    color: #FDFAFF;
    background: none;
`
const Text = styled.p`
    font-size: 16px;
    color: #FDFAFF;
    background: none;
`

const AccentText = styled.span`
    color: #A7F67B;
    background: none;
`

const modalRootElement = document.getElementById('modal');

export default function Modal() {
    const showModal = useSelector(state => state.getData.showModal);
    const characters = useSelector(state => state.getData.characters);
    const characterId = useSelector(state => state.getData.characterId);

    const dispatch = useDispatch();

    const element = useMemo(() => {
        const element = document.createElement('div');
        return element;
    }, [])

    useEffect(() => {
        modalRootElement.appendChild(element);
        return () => {
            modalRootElement.removeChild(element);
        }
    })

    function closeModal() {
        dispatch(setShowModal(false));
    }

    return(
        createPortal(
            showModal && 
                characters.map((item, index) => {
                    if(index === characterId) {
                        return (
                            <>
                                <ModalBackground></ModalBackground>
                                <FlexCenter>
                                    <ModalContainer>
                                        <CloseContainer>
                                            <Button onClick={() => closeModal()} />
                                        </CloseContainer>
                                        <Content>
                                            <Img src={item.image} />
                                            <ContentText>
                                                <Title>{item.name}</Title>
                                                <Text><AccentText>ID:</AccentText> {item.id}</Text>
                                                <Text><AccentText>Universe:</AccentText> {item.origin.name}</Text>
                                                <Text><AccentText>Gender:</AccentText> {item.gender}</Text>
                                                <Text><AccentText>Status:</AccentText> {item.status}</Text>
                                                <Text><AccentText>Type:</AccentText> {item.type}</Text>
                                                <Text><AccentText>Current location:</AccentText> {item.location.name}</Text>
                                                <Text><AccentText>Species:</AccentText> {item.species}</Text>
                                                <Text><AccentText>Created:</AccentText> {item.created.slice(0, 10)}</Text>
                                            </ContentText>
                                        </Content>
                                    </ModalContainer>
                                </FlexCenter>
                            </>
                        )         
                    }  else {
                        return () => {};
                    }      
                }
                ) 
        , element))
}