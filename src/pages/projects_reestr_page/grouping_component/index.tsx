import styled from "styled-components";


interface IProps
{
    setGroupingModalFlag: (flag: boolean) => void;

}



function GroupingComponent(props: IProps)
{
    return (
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Группировать проект по: </TitleText>
                <CloseIconButtonWrapper>
                    <CloseIconButton>
                        <CloseIcon onClick={()=>props.setGroupingModalFlag(false)} src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </TitleWrapper>
            <GroupButtonsWrapper>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Предпроект</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Реализация</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Завершен</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Закрыт</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Отменен</GroupButton>  
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Приостановлен</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Инициация</GroupButton>
                <GroupButton onClick={()=>props.setGroupingModalFlag(false)}>Заказчик с проекта</GroupButton>
            </GroupButtonsWrapper>
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
    margin-right: 70px;
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
const GroupButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 10px;
`
const GroupButton = styled.button`
    font-size: 14px;
    background-color: #233047;
    color: #FFFFFF;
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
`
export default GroupingComponent;