import styled from "styled-components";

interface IProps
{
    setModalFlag: (boolean: false) => void;
}

function LoginModal(props:IProps)
{
    return (
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Авторизация</TitleText>
                <CloseIconButtonWrapper>
                    <CloseIconButton>
                        <CloseIcon src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </TitleWrapper>
            <DataForm>
                <LoginInputWrapper>
                    <LoginInputLabel>Логин: </LoginInputLabel>
                    <LoginInput type={"text"} placeholder="ivan08"/>
                </LoginInputWrapper>
                <PasswordInputWrapper>
                    <PasswordInputLabel>Пароль: </PasswordInputLabel>
                    <PasswordInput type={"password"}/>
                </PasswordInputWrapper>
                <SubmitFormInputWrapper>
                    <SubmitFormInput type={"submit"} value={"Подтвердить"}/>
                </SubmitFormInputWrapper>
            </DataForm>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;    
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    position: fixed;
    padding: 20px;
    z-index: 4;
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TitleText = styled.p`
    font-size: 18px;
    margin-right: 100px;
`
const CloseIconButtonWrapper = styled.div`

`
const CloseIconButton = styled.button`
    background: none;       
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
`
const CloseIcon = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`
const DataForm = styled.form`
    display: flex;
    
    flex-direction: column;
    margin-top: 20px;
`
const LoginInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const LoginInputLabel = styled.label`
    margin-bottom: 5px;
`
const LoginInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const PasswordInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const PasswordInputLabel = styled.label`
    margin-bottom: 5px;
`
const PasswordInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const SubmitFormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`
const SubmitFormInput = styled.input`
    margin-top: 20px;
    font-size: 16px;
    background-color: rgb(35, 48, 71);
    color: white;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(35, 48, 71);
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
`

export default LoginModal;