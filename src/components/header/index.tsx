import styled from "styled-components";
import {
    SearchPanelComponent
}   from '../../';

interface IProps
{

}



function HeaderComponent(props:IProps)
{
    return (
        <ExternalWrapper>
            <SearchWrapper>
                <SearchPanelComponent/>
            </SearchWrapper>
            <ButtonsWrapper>
                <ButtonElemWrapper>
                    <ButtonElemIcon src="./images/fullsize_icon.png"/>
                </ButtonElemWrapper> 
                <ButtonElemWrapper>
                    <ButtonElemIcon src="./images/settings_icon.png"/>
                </ButtonElemWrapper>
                <ButtonElemWrapper>
                    <ButtonElemIcon src="./images/night_mode_icon.png"/>
                </ButtonElemWrapper>
            </ButtonsWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    padding: 28px 46px 28px 64px;
    border-bottom: 1px solid #E6E6E6;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SearchWrapper = styled.div`

`
const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ButtonElemWrapper = styled.div`
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
`
const ButtonElemIcon = styled.img`
    position: relative;
    width: 100%;
`




export default HeaderComponent;