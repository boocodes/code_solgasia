import styled from "styled-components";

interface IProps
{

}


function NavBarComponent(props:IProps)
{
    return(
        <ExternalWrapper>
            <LogoWrapper>
                <LogoIcon src="./images/soglasie_icon.webp"/>
            </LogoWrapper>
            <UnderlogoLine/>
            <NavigationButtonsWrapper>
                <NavigationButtonsElemWrapper>
                    <NavigationButtonElemIcon src= "./images/main_nav_icon.png"/>
                    <NavigationButtonElemText clicked={true}>Главная</NavigationButtonElemText>
                </NavigationButtonsElemWrapper>
                <NavigationButtonsElemWrapper>
                    <NavigationButtonElemIcon src="./images/reestr_nav_icon.png" />
                    <NavigationButtonElemText>Реестр проектов</NavigationButtonElemText>
                </NavigationButtonsElemWrapper>
                <NavigationButtonsElemWrapper>
                    <NavigationButtonElemIcon src="./images/library_nav_icon.png" />
                    <NavigationButtonElemText>Библиотека</NavigationButtonElemText>
                </NavigationButtonsElemWrapper>
                <NavigationButtonsElemWrapper>
                    <NavigationButtonElemIcon src="./images/monitoring_nav_icon.png" />
                    <NavigationButtonElemText>Мониторинг</NavigationButtonElemText>
                </NavigationButtonsElemWrapper>
                <NavigationButtonsElemWrapper>
                    <NavigationButtonElemIcon src="./images/control_nav_icon.png" />
                    <NavigationButtonElemText>Управление<br/>проектом</NavigationButtonElemText>
                </NavigationButtonsElemWrapper>
            </NavigationButtonsWrapper>
            <UserProfileWrapper>
                <UserPofileIcon src="./images/user_profile_icon.png" />
                <UserProfileTextWrapper>
                    <UserProfileName>Иван</UserProfileName>
                    <UserProfileLastname>Иванов</UserProfileLastname>
                </UserProfileTextWrapper>
            </UserProfileWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    padding: 31px 22px;
    width: 300px;
    border-right: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const LogoWrapper = styled.div`
    width: 200px;
    height: 50px;
    margin-bottom: 31px;
`
const LogoIcon = styled.img`

`
const UnderlogoLine = styled.div`
    height: 2px;
    width: 200px;
    background-color: #BDBDBD;
`
const NavigationButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 38px;
`
const NavigationButtonsElemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    cursor: pointer;
`
const NavigationButtonElemIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 6px;
`
interface INavigationButtonElemText
{
    clicked?: boolean;
}
const NavigationButtonElemText = styled.p<INavigationButtonElemText>`
    font-size: 20px;
    color: ${props => props.clicked ? '#FFFFFF' : '#233047'};
    background-color: ${props => props.clicked ? '#233047' : 'none'};
    border-radius: 11px;
    padding: 11px 15px;
`
const UserProfileWrapper = styled.div`
    background-color: #F1F1F1;
    width: 250px;
    display: flex;
    border-radius: 50px;
    padding: 13px 0px 14px 13px;
    align-items: center;
    cursor: pointer;
`
const UserPofileIcon = styled.img`
    margin-right: 15px;
`
const UserProfileTextWrapper = styled.div`
    font-size: 18px;
    font-weight: medium;
`
const UserProfileName = styled.p`

`
const UserProfileLastname = styled.p`

`


export default NavBarComponent;