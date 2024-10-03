import styled from "styled-components";
import { useEffect, useState } from "react";
import {
    getLastUrlPath
} from '../../';
import { useNavigate } from "react-router-dom";


interface IProps
{
    
}

interface INavBarLinks
{
    text: string;
    icon: string;
    link: string;
    link_order: number;
    id: number;
    at_nav_bar_display: number;
}
interface IUserData
{
    firstname: string;
    lastname: string;
    middlename: string;
    user_photo: string;
    id: number;
    created_at: string;
    updated_at: string;
    login: string;
    email: string;
}

function NavBarComponent(props:IProps)
{
    

    const [navBarLinks, setNavBarLinks] = useState<INavBarLinks[]>([]);
    const [userData, setUserData] = useState<IUserData>();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://arhicult.ru/api/sidebar_nav/get_sidebar_links.php/', 
            {
                method: 'GET',
                mode: 'cors',
            } 
        )
            .then((response)=> {
                return response.json();
            })
            .then((data)=>{
                setNavBarLinks(data);
            })
    }, [])
    return(
        <ExternalWrapper>
            <LogoWrapper>
                <LogoIcon onClick={()=>navigate("/main")} src="https://arhicult.ru/public/images/soglasie_icon.webp"/>
            </LogoWrapper>
            <UnderlogoLine/>
            <NavigationButtonsWrapper>
                {navBarLinks.length == 0 ?
                    <>
                        <LoadingNavigationButtonsElemWrapper/>
                        <LoadingNavigationButtonsElemWrapper/>
                        <LoadingNavigationButtonsElemWrapper/>
                        <LoadingNavigationButtonsElemWrapper/>
                    </>
                    :
                    <>
                        {navBarLinks.map((elem:INavBarLinks)=>{
                            return(
                                <NavigationButtonsElemWrapper onClick={()=>navigate("/" + elem.link)}>
                                    <NavigationButtonElemIcon src={"https://arhicult.ru/public/images/" + elem.icon}/>
                                    {console.log("url - " + getLastUrlPath() + ", link - " + elem.link )}
                                    <NavigationButtonElemText clicked={ getLastUrlPath() == elem.link ? true : false}>{elem.text}</NavigationButtonElemText>
                                </NavigationButtonsElemWrapper>
                            )
                        })}
                    </>
                }
                
            </NavigationButtonsWrapper>
            <UserProfileWrapper>
                <UserPofileIcon src={"https://arhicult.ru/public/images/" + localStorage.getItem('user_photo')} />
                <UserProfileTextWrapper>
                    <UserProfileName>{localStorage.getItem('user_firstname')}</UserProfileName>
                    <UserProfileLastname>{localStorage.getItem('user_lastname')}</UserProfileLastname>
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
    cursor: pointer;
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
const LoadingNavigationButtonsElemWrapper = styled.div`
    width: 200px;
    background-color: #BCBCBC;
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
`


export default NavBarComponent;