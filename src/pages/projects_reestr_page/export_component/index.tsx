import styled from "styled-components";


interface IProps
{
    setExportModalFlag: (flag: boolean) => void;
}


function ExportComponent(props: IProps)
{
    return (
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Экспорт проекта</TitleText>
                <CloseIconButtonWrapper>
                    <CloseIconButton>
                        <CloseIcon onClick={()=>props.setExportModalFlag(false)} src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </TitleWrapper>
            
            <ButtonsWrapper>
                <ButtonDownloadProject>Скачать файл</ButtonDownloadProject>
                <ButtonCloseModal onClick={()=>props.setExportModalFlag(false)}>Закрыть окно</ButtonCloseModal>
            </ButtonsWrapper>
           
        </ExternalWrapper>
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
const TitleText = styled.p`
    font-weight: 500;
    font-size: 20px;
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonDownloadProject = styled.button`
    border: none;
    font-size: 16px;
    background-color: #F27E3A;
    color: #FFFFFF;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    margin-right: 30px;
    cursor: pointer;
`
const ButtonCloseModal = styled.button`
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: #233047;
    color: #FFFFFF;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
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

export default ExportComponent;