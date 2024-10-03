import { useState } from "react";
import styled from "styled-components";
import ImportProjectSub from "./import_project_sub";



interface IProps{



}

function PortalManageBlock(props:IProps)
{
    const [importProjectModalFlag, setImportProjectModalFlag] = useState(false);
    return(
        <ExternalWrapper>
            <ModalsOverlay/>
            <InnerHeader>
                <OfferText>Основные функции</OfferText>
            </InnerHeader>
            <ManageButtonsWrapper>
                <ManageButton onClick={()=>setImportProjectModalFlag(true)}>Импортировать проект</ManageButton>
                { importProjectModalFlag ? <ImportProjectSub setModalFlag={setImportProjectModalFlag}/> : null }
                <ManageButton>Права доступа</ManageButton>
                <ManageButton>Посещяемость портала</ManageButton>
                <ManageButton>Эскпортировать логи</ManageButton>
            </ManageButtonsWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    padding: 30px 20px 20px 30px;
`
const InnerHeader = styled.div`

`
const OfferText = styled.h1`
    font-size: 24px;
`
const ManageButtonsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
`
const ManageButton = styled.button`
    font-size: 18px;
    padding: 15px 20px;
    border: 1px solid #BDBDBD;
    background: none;
    border-radius: 5px;
    cursor: pointer;
`
const ModalsOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: gray;
    opacity: 0.5;
`

export default PortalManageBlock;