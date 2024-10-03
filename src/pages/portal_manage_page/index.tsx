import { useState } from "react";
import styled from "styled-components";
import ImportProjectSub from "./import_project_sub";
import AccessRightsSub from "./access_rights_sub";
import PortalTrafficSub from "./portal_traffic_sub";
import ExportLogsSub from "./export_logs_sub";



interface IProps{



}

function PortalManageBlock(props:IProps)
{
    const [importProjectModalFlag, setImportProjectModalFlag] = useState(false);
    const [accessRightsModalFlag, setAccessRightsModalFlag] = useState(false);
    const [portalTrafficModalFlag, setPortalTrafficModalFlag] = useState(false);
    const [exportLogsModalFlag, setExportLogsModalFlag] = useState(false);

    function offModalsFlags()
    {
        setImportProjectModalFlag(false);
        setAccessRightsModalFlag(false);
        setPortalTrafficModalFlag(false);
        setExportLogsModalFlag(false);
    }

    return(
        <ExternalWrapper>
            <InnerHeader>
                <OfferText>Основные функции</OfferText>
            </InnerHeader>
            <ManageButtonsWrapper>
                <ManageButton onClick={()=>setImportProjectModalFlag(true)}>Импортировать проект</ManageButton>
                    {importProjectModalFlag ? <ImportProjectSub setModalFlag={offModalsFlags}/> : null}
                <ManageButton onClick={()=>setAccessRightsModalFlag(true)}>Права доступа</ManageButton>
                    {accessRightsModalFlag ? <AccessRightsSub setModalFlag={offModalsFlags} /> : null}
                <ManageButton onClick={()=>setPortalTrafficModalFlag(true)}>Посещяемость портала</ManageButton>
                    {portalTrafficModalFlag ? <PortalTrafficSub setModalFlag={offModalsFlags}/> : null}
                <ManageButton onClick={()=>setExportLogsModalFlag(true)}>Эскпортировать логи</ManageButton>
                    {exportLogsModalFlag ? <ExportLogsSub setModalFlag={offModalsFlags}/> : null}
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