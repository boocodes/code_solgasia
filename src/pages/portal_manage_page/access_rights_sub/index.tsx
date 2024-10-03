import styled from "styled-components";

interface IProps
{
    setModalFlag: () => void;
}  

function AccessRightsSub(props: IProps)
{
    return(
        <>
            <ModalOverlay onClick={()=>props.setModalFlag()}/>
            <ExternalWrapper>
                Права доступа
            </ExternalWrapper>
        </>
        
    )
}

const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 4;
    background-color: gray;
    opacity: 0.5;
`

const ExternalWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;    
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    position: fixed;
    padding: 20px 30px;
    z-index: 4;
`

export default AccessRightsSub;