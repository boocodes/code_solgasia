import styled from "styled-components";
import GetAccessModal from "./get_access_modal";
import LoginModal from "./login_modal";
import { useState } from "react";


interface IProps
{

}

function WelcomePage(props: IProps)
{
    const [getAccessModalFlag, setGetAccessModalFlag] = useState(false);
    const [loginModalFlag, setLoginModalFlag] = useState(false);
    
    function switchAllModals()
    {
        setGetAccessModalFlag(false);
        setLoginModalFlag(false);
    }

    return (
        <ExternalWrapper>
            {
                getAccessModalFlag ? 
                <>
                    <GetAccessModal setModalFlag={setGetAccessModalFlag}/>
                    <ModalOverlay onClick={switchAllModals}/>
                </>
                :
                null
            }
            {
                loginModalFlag ?
                <>
                    <LoginModal setModalFlag={setLoginModalFlag}/>
                    <ModalOverlay onClick={switchAllModals}/>
                </>
                :
                null
            }
            <MainContent>
                <HeaderLogoWrapper>
                    <LogoIcon src="https://arhicult.ru/public/images/soglasie_icon.webp"/>
                </HeaderLogoWrapper>
                <TitleWrapper>
                    <TitleTextLogo>ППУ</TitleTextLogo>
                    <Title>Портал проектного управления</Title>
                </TitleWrapper>
                <ControllButtonsWrapper>
                    <LoginButton onClick={()=>setLoginModalFlag(true)}>Войти</LoginButton>
                </ControllButtonsWrapper>
                <GetAccessWrapper>
                    <GetAccessText>Хотите получить доступ? Оставьте заявку, администратор рассмотрит ее</GetAccessText>
                </GetAccessWrapper>
                <GetAccessButtonWrapper>
                    <GetAccessButton onClick={()=>setGetAccessModalFlag(true)}>Оставить заявку</GetAccessButton>
                </GetAccessButtonWrapper>
            </MainContent>
        </ExternalWrapper>
    )
}

const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: gray;
    opacity: 0.7;
`

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`
const MainContent = styled.div`

`
const HeaderLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
const LogoIcon = styled.img`

`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #233047;
    justify-content: center;
`

const TitleTextLogo = styled.p`
    font-size: 24px;
    padding-right: 5px;
    margin-right: 5px;
    font-weight: 300;
    border-right: 1px solid #233047;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`
const ControllButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const LoginButton = styled.button`
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #233047;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
`
const GetAccessWrapper = styled.div`

`
const GetAccessText = styled.p`

`
const GetAccessButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const GetAccessButton = styled.button`
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #233047;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
`

export default WelcomePage;