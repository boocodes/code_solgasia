import styled from "styled-components";

interface IProps
{

}

function InDevelopmentPage(props:IProps)
{
    return (
        <ExternalWrapper>
            <Text>Страница находится в разработке!</Text>
        </ExternalWrapper>
    )
}
const ExternalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
const Text = styled.h1`
    font-size: 24px;
`


export default InDevelopmentPage;