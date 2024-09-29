import styled from "styled-components";
import {
    HeaderComponent,
    NavBarComponent
} from '../../';

interface IProps
{

}


function MainPage(props:IProps)
{
    return(
        <ExternalWrapper>
            <NavBarComponent/>
            <ContentWrapper>
                <HeaderComponent/>
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