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
import ProjectsReestr from "../projects_reestr_page";
import { useState } from "react";

interface IProps
{
    component: JSX.Element;
}


function MainPage(props:IProps)
{
    return(
        <ExternalWrapper>
            <NavBarComponent/>
            <ContentWrapper>
                <HeaderComponent/>
                {props.component}
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