import { useState } from "react";
import styled from "styled-components";


interface IProps
{

    registrationStep: number;
    setModalFlag: (flag: boolean) => any;
}


function DrawRegistrationFieldsByStep(props: IProps)
{
    const [sendingDataFlag, setSendingDataFlag] = useState(false);
    const [sendingResult, setSendingResult] = useState(false);
    switch (props.registrationStep) {
        case 1:
            return (
                <NamesInputsWrapper>
                    <FirstnameAndLastNameInputsWrapper>
                        <FirstnameInputWrapper>
                            <FirstnameInputLabel>Имя: </FirstnameInputLabel>
                            <FirstnameInput type={"text"} placeholder="Иван"/>
                        </FirstnameInputWrapper>
                        <LastnameInputWrapper>
                            <LastnameInputLabel>Фамилия: </LastnameInputLabel>
                            <LastnameInput type={"text"} placeholder="Иванов"/>
                        </LastnameInputWrapper>
                    </FirstnameAndLastNameInputsWrapper>
                    <MiddlenameInputWrapper>
                            <MiddlenameInputLabel>Отчество: </MiddlenameInputLabel>
                            <MiddlenameInput type={"text"} placeholder="Иванович"/>
                    </MiddlenameInputWrapper>
                </NamesInputsWrapper>
            )
        case 2:
            return (
                <LoginAndEmailInputsWrapper>
                    <LoginInputWrapper>
                        <LoginInputLabel>Логин: </LoginInputLabel>
                        <LoginInput type={"text"} placeholder="Ivanov08"/>
                    </LoginInputWrapper>
                    <EmailInputWrapper>
                        <EmailInputLabel>Электронная почта: </EmailInputLabel>
                        <EmailInput type={"email"} placeholder="ivanov@mail.ru"/>
                    </EmailInputWrapper>
                </LoginAndEmailInputsWrapper>
            )
        case 3:
            return (
                <PasswordInputWrapper>
                    <PasswordInputLabel>Пароль: </PasswordInputLabel>
                    <PasswordInput type={"password"} />
                    <SubmitFormDataButton value={"Подтвердить"} type={"submit"}/>
                </PasswordInputWrapper>
            )
        
        default:
            props.setModalFlag(false);
            return <></>
    }
}

const NamesInputsWrapper = styled.div`

`
const FirstnameAndLastNameInputsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`

const FirstnameInput = styled.input`
    margin-right: 5px;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const FirstnameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const FirstnameInputLabel = styled.label`
    margin-bottom: 5px;
`
const MiddlenameInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const MiddlenameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MiddlenameInputLabel = styled.label`
    padding-right: 110px;
    margin-bottom: 5px;
`
const LastnameInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const LastnameInputWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
`
const LastnameInputLabel = styled.label`
    margin-bottom: 5px;
`
const LoginAndEmailInputsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoginInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
    margin-right: 10px;
`
const LoginInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const LoginInputLabel = styled.label`
    margin-bottom: 5px;
`
const EmailInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const EmailInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const EmailInputLabel = styled.label`
    margin-bottom: 5px;
`
const PasswordInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const PasswordInputLabel = styled.label`
    margin-bottom: 5px;
    margin-right: 120px;
`
const PasswordInput = styled.input`
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 5px 5px 5px 10px;
`
const SuccesResultWrapper = styled.div`

`
const ErrorResultWrapper = styled.div`

`
const ResultText = styled.p`

`
const SubmitFormDataButton = styled.input`
    margin-top: 20px;
    font-size: 16px;
    border: none;
    background-color: #233047;
    color: white;
    outline: none;
    border-radius: 5px;
    border: 1px solid #233047;
    padding: 10px 15px;
    cursor: pointer;
`


export default DrawRegistrationFieldsByStep;