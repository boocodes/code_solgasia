import { useState } from "react";
import styled from "styled-components";

interface IProps
{
    groupingModal: JSX.Element;
    exportModal: JSX.Element;
    exportModalFlag: boolean;
    groupingModalFlag: boolean;
    setExportModalFlag: (flag:boolean) => void;
    setGroupingModalFlag: (flag: boolean) => void;
}


function ReestrProjectsMainTable(props: IProps)
{
    
    return (
        <ExternalWrapper>
            <HeaderFiltersWrapper>
                <HeaderCheckboxFilterWrapper>
                    <CurrentYearPortfelFilterForm>
                        <CurrentYearPortfelFilterCheckbox type={'checkbox'}/>
                        <CurrentYearPortfelFilterText>Портфель проектов 2022</CurrentYearPortfelFilterText>
                    </CurrentYearPortfelFilterForm>
                    <ArhiveProjectsFilterForm>
                        <ArhiveProjectsFilterCheckbox type={'checkbox'}/>
                        <ArhiveProjectsFilterText>Архивные проекты</ArhiveProjectsFilterText>
                    </ArhiveProjectsFilterForm>
                </HeaderCheckboxFilterWrapper>
            </HeaderFiltersWrapper>
            <MainTableFiltersWrapper>
                <LeftSideButtonsWrapper>
                    <ExportButton onClick={()=>props.setExportModalFlag(true)}>Эскпорт</ExportButton>
                    {props.exportModalFlag ? <>{props.exportModal}<ModalOverlay onClick={()=>{props.setExportModalFlag(false); props.setGroupingModalFlag(false)}}/></> : null}
                    <GroupButton onClick={()=>props.setGroupingModalFlag(true)}>Группировать</GroupButton>
                    {props.groupingModalFlag ? <>{props.groupingModal}<ModalOverlay onClick={()=>{props.setExportModalFlag(false); props.   setGroupingModalFlag(false)}}/></> : null}
                    <SearchByTableForm>
                        <SearchByTableLabel>Поиск: </SearchByTableLabel>
                        <SearchByTableInput/>
                    </SearchByTableForm>
                </LeftSideButtonsWrapper>
                <RightSideButtonsWrapper>
                    <SetDefaultFiltersButtonWrapper>
                        <SetDefaultFiltersButton>
                            <SetDefaultFiltersButtonIcon src="https://arhicult.ru/public/images/table_reset_filters.png"/>
                        </SetDefaultFiltersButton>
                    </SetDefaultFiltersButtonWrapper>
                    <RightSideButtonElem>Общая информация</RightSideButtonElem>
                    <RightSideButtonElem>Состояние</RightSideButtonElem>
                    <RightSideButtonElem>Команда проекта</RightSideButtonElem>
                    <RightSideButtonElem>Сроки</RightSideButtonElem>
                    <RightSideButtonElem>Стоимость</RightSideButtonElem>
                    <RightSideButtonElem>Документация</RightSideButtonElem>
                </RightSideButtonsWrapper>
            </MainTableFiltersWrapper>
        </ExternalWrapper>
    )
}



const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: 3;
    top: 0px;
    left: 0px;
    background-color: #F5F5F5;
`

const ExternalWrapper = styled.div`
    padding: 10px 15px;
    margin-top: 30px;
`
const HeaderFiltersWrapper = styled.div`
    
`
const HeaderCheckboxFilterWrapper = styled.div`
    display: flex;
    align-items: center;
`
const CurrentYearPortfelFilterForm = styled.form`
    display: flex;
    align-items: center;
    margin-right: 30px;
`
const CurrentYearPortfelFilterCheckbox = styled.input`
    margin-right: 5px;
    cursor: pointer;
`
const CurrentYearPortfelFilterText = styled.p`

`
const ArhiveProjectsFilterForm = styled.form`
    display: flex;
    align-items: center;
`
const ArhiveProjectsFilterCheckbox = styled.input`
    margin-right: 5px;
    cursor: pointer;
`
const ArhiveProjectsFilterText = styled.p`

`
const MainTableFiltersWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftSideButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ExportButton = styled.button`
    font-size: 16px;
    margin-right: 15px;
    padding: 5px 15px;
    border: none;
    background-color: #233047;
    color: #FFFFFF;
    border-radius: 5px;
     cursor: pointer;
`
const GroupButton = styled.button`
    font-size: 16px;
    cursor: pointer;
    padding: 5px 15px;
    border: none;
    background-color: #233047;
    color: #FFFFFF;
    border-radius: 5px;
`
const SearchByTableForm = styled.form`
    display: flex;
    align-items: center;
    margin-left: 30px;
`
const SearchByTableLabel = styled.label`
    margin-right: 10px;
    font-size: 16px;
    opacity: 0.7;
    color: #233047;
`
const SearchByTableInput = styled.input`
    outline: none;
    font-size: 16px;
    padding: 5px 0px 5px 10px;
    border: 1px solid #233047;
    border-radius: 5px;
`
const RightSideButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const SetDefaultFiltersButtonWrapper = styled.div`
    width: 25px;
    margin-right: 10px;
`
const SetDefaultFiltersButton = styled.button`
    background-color: #F27E3A;
    border: none;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px;
`
const SetDefaultFiltersButtonIcon = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`
const RightSideButtonElem = styled.button`
    font-size: 14px;
    margin-right: 10px;
    padding: 5px 15px;
    border: none;
    background-color: #F0F0F0;
    color: #233047;
    border-radius: 5px;
    cursor: pointer;
`



export default ReestrProjectsMainTable;

