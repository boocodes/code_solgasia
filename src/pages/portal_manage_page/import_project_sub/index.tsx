import styled from "styled-components";

interface IProps
{
    setModalFlag: () => void;
}

function ImportProjectSub(props: IProps)
{
    return (
        <>
        <ModalOverlay onClick={()=>props.setModalFlag()}/>
        <ExternalWrapper>
            
            <HeaderWrapper>
                <TitleWrapper>
                    <TitleText>Импорт проекта</TitleText>
                    <SubTitleText>Выберите файл или перенесите его сюда</SubTitleText>
                </TitleWrapper>
                <CloseIconButtonWrapper>
                    <CloseIconButton onClick={()=>props.setModalFlag()}>
                        <CloseIcon src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </HeaderWrapper>
            <GetFileForm>
                <SelectFileInputButton type={"file"}/>
            </GetFileForm>
        </ExternalWrapper>
        </>
        
    )
}

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
const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
const TitleWrapper = styled.div`
    margin-right: 100px;
`
const TitleText = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
`
const SubTitleText = styled.p`
    font-size: 16px;
`
const CloseIconButtonWrapper = styled.div`

`
const CloseIconButton = styled.button`
    background: none;       
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
`
const CloseIcon = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`
const GetFileForm = styled.form`

`
const SelectFileInputButton = styled.input`
    opacity: 0;
`
const UploadFileInputButton = styled.input`

`
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



export default ImportProjectSub;