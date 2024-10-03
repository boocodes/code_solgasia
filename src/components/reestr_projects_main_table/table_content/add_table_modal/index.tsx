import styled from "styled-components";

interface IProps
{
    setModalFlag: (flag: boolean) => void;
}


function AddTableModal(props: IProps)
{
    return (
        <>  
            <ModalOverlay onClick={()=>props.setModalFlag(false)}/>
            <ExternalWrapper>
                Загрузка файла
            </ExternalWrapper>
        </>
    )
}

const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 4;
    background-color: gray;
    opacity: 0.6;
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

export default AddTableModal;