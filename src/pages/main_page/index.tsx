import styled from "styled-components";
import {
    HeaderComponent,
    NavBarComponent,
    PortalManageBlock,
    InDevelopmentPage
} from '../../';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import ProjectsReestr from "../projects_reestr";
import { useState } from "react";

interface IProps
{

}


function MainPage(props:IProps)
{

    const [hideControlBlocksFlag, setControlBlocksFlag] = useState<boolean>(false);
    function changeControllBlocksFlag (flag:boolean)
    {
        setControlBlocksFlag(flag);
    }
    return(
        <ExternalWrapper>
            <NavBarComponent changeControlBlocksFlag={changeControllBlocksFlag} hideControlBlocksFlag={hideControlBlocksFlag}/>
            <ContentWrapper>
                <HeaderComponent changeControlBlocksFlag={changeControllBlocksFlag} hideControlBlocksFlag={hideControlBlocksFlag}/>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={"/main"}/>}
                    />
                    <Route
                        path="/main"
                        element={<InDevelopmentPage/>}  
                    />
                    <Route
                        path="/portal_manage"
                        element={<PortalManageBlock/>}  
                    />
                    <Route
                        path="/reestr_project"
                        element={<ProjectsReestr/>}  
                    />
                    <Route
                        path="/library"
                        element={<InDevelopmentPage/>}  
                    />
                    <Route
                        path="/monitoring"
                        element={<InDevelopmentPage/>}  
                    />
                </Routes>
            </ContentWrapper>
            
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
`
const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
`

export default MainPage;