import styled from "styled-components";

interface IProps
{
    text: string;
}

function NotificationModalStatic(props:IProps)
{
    return (
        <ExternalWrapper>
            <NotificationText>{props.text}</NotificationText>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    background-color: #F27E3A;
    border-radius: 10px;    
    top: 100px;
    color: #FFFFFF;
    right: 0px;
    transform:translate(-50%, -50%);
    position: absolute;
    padding: 10px 15px;
    z-index: 10;
`
const NotificationText = styled.p`
    font-size: 16px;
`
export default NotificationModalStatic;