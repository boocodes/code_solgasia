import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Interface } from "readline";
import styled from "styled-components";
import { ReestrProjectsMainTable } from "../../components";
import GroupingComponent from "./grouping_component";
import ExportComponent from './export_component';

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

function ProjectsReestr(props:IProps)
{
    const [exportModalFlag, setExportModalFlag] = useState(false);
    const [groupingModalFlag, setGroupingModalFlag] = useState(false);
    const navigate = useNavigate();
    const [headerNavigationButtonsData, setHeaderNavigationButtonsData] = useState<INavBarLinks[]>([]);

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
                setHeaderNavigationButtonsData(data);
            })
    }, [])

    return(
        <ExternalWrapper>
            <InnerHeader>
                <HeaderSemanticBlock>
                    <LogoWrapper>
                        <LogoIcon onClick={()=>navigate("/main")} src="https://arhicult.ru/public/images/soglasie_icon.webp"/>
                    </LogoWrapper>
                    <HeaderOfferTextWrapper>
                        <HeaderOfferText>Портал<br/>Проектного Управления</HeaderOfferText>
                    </HeaderOfferTextWrapper>
                </HeaderSemanticBlock>
                <HeaderNavigationButtonsWrapper>
                    {headerNavigationButtonsData?.length == 0 ?
                        <>
                            <HeaderNavigationButtonLoading>Loading block</HeaderNavigationButtonLoading>
                            <HeaderNavigationButtonLoading>Loading block</HeaderNavigationButtonLoading>
                            <HeaderNavigationButtonLoading>Loading block</HeaderNavigationButtonLoading>
                            <HeaderNavigationButtonLoading>Loading block</HeaderNavigationButtonLoading>
                            <HeaderNavigationButtonLoading>Loading block</HeaderNavigationButtonLoading>
                        </>
                        :
                        <>
                            {headerNavigationButtonsData.map((elem:INavBarLinks)=>{
                                return (
                                    <HeaderNavigationButton active_link={elem.link == "reestr_project"} onClick={()=>navigate("/" + elem.link)}>
                                        {elem.text}
                                    </HeaderNavigationButton>
                                )
                            })}
                        </>
                    }
                </HeaderNavigationButtonsWrapper>
            </InnerHeader>
            <ReestrProjectsMainTable exportModalFlag={exportModalFlag} groupingModalFlag={groupingModalFlag} setExportModalFlag={setExportModalFlag} setGroupingModalFlag={setGroupingModalFlag} exportModal={<ExportComponent setExportModalFlag={setExportModalFlag}/>} groupingModal={<GroupingComponent setGroupingModalFlag={setGroupingModalFlag}/>}/>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`

`
const InnerHeader = styled.div`
    background-color: #F0F0F0;
    margin: 10px 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoWrapper = styled.div`

`
const LogoIcon = styled.img`
    cursor: pointer;
`
const HeaderOfferTextWrapper = styled.div`

`
const HeaderOfferText = styled.p`
    font-weight: 500;
    color: #233047;
`
const HeaderSemanticBlock = styled.div`
    display: flex;
    align-items: center;
`
const HeaderNavigationButtonsWrapper = styled.div`

`
interface IHeaderNacigationButton
{
    active_link?: boolean;
}
const HeaderNavigationButton = styled.button<IHeaderNacigationButton>`
    font-size: 16px;
    padding: 5px 10px;
    margin-right: 10px;
    :last-child{
        margin-right: 0px;
    }
    background-color: ${props => props.active_link ? "#233047" : "#FFFFFF" };
    border: none;
    border-radius: 5px;
    color: ${props => props.active_link ? "#FFFFFF" : "#233047"};
    cursor: pointer;
`
const HeaderNavigationButtonLoading = styled.button`
    font-size: 16px;
    padding: 5px 10px;
    margin-right: 10px;
    :last-child{
        margin-right: 0px;
    }
    background-color: #BDBDBD;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #BDBDBD
`

export default ProjectsReestr;