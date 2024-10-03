import { useState } from "react";
import styled from "styled-components";
import AddTableModal from "./add_table_modal";
import { ITablesData } from "..";



interface IProps
{
    currentTableFile: string;
    tablesData: ITablesData[] | undefined;
    setActiveTableTab: (title: string) => void;
}


function TableContent(props:IProps)
{
    const [addNewTableModalFlag, setAddNewTableModalFlag] = useState(false);
    return (
        <>
            {addNewTableModalFlag ? <AddTableModal setModalFlag={setAddNewTableModalFlag}/> : null}
            <ExternalWrapper>
            {props.currentTableFile == "" ?
                <TableNotExistWrapper>
                    <TableNotExistText>
                        Таблица не выбрана. Загрузите новую.
                    </TableNotExistText>
                    <TableNotExistButton onClick={()=>setAddNewTableModalFlag(true)}>Добавить</TableNotExistButton>
                </TableNotExistWrapper>
                :
                <TableTabsWrapper>
                  {
                    props.tablesData?.map((elem: ITablesData)=>{
                        return elem.title == props.currentTableFile ?
                        <ActiveTableTabButton>{elem.title}</ActiveTableTabButton>
                        :
                        <TableTabButton onClick={()=>props.setActiveTableTab(elem.title)}>{elem.title}</TableTabButton>
                    })
                  }
                </TableTabsWrapper>
            }
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    margin-top: 30px;
`
const TableNotExistWrapper = styled.div`
    display: flex;
    align-items: center;

`
const TableNotExistText = styled.p`
    font-size: 18px;
    font-weight: 300;
    margin-right: 20px;
`
const TableNotExistButton = styled.button`
    background-color: #F27E3A;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
`
const TableTabsWrapper = styled.div`
    display: flex;
    align-items: center;
    
`
const TableTabButton = styled.button`
    margin-right: 5px;
    font-size: 16px;
    border: none;
    background-color: rgb(240, 240, 240);
    padding: 10px 15px;
    color: rgb(35, 48, 71);
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
`
const ActiveTableTabButton = styled.button`
    margin-right: 5px;
    font-size: 16px;
    border: none;
    background-color: #F27E3A;
    padding: 10px 15px;
    color: white;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
`


export default TableContent;