import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IProps
{
    setModalFlag: (boolean: false) => void;
}

function LoginModal(props:IProps)
{
    const navigate = useNavigate();
    
    const [errorDataFlag, setErrorDataFlag] = useState(false);

    const loginInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const [loginInputState, setLoginInputState] = useState("");
    const [passwordInputState, setPasswordInputState] = useState("");


    function loginFunction(e: any)
    {
        
        e.preventDefault();
        if(loginInputState.trim() !== "" && passwordInputState.trim() !== "")
        {
            fetch('https://arhicult.ru/api/user/login_user.php/', 
                {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        password: passwordInputState,
                        login: loginInputState,
                    })
                } 
            )
            .then((response)=> {
                return response.json();
            })
            .then((data)=>{
                if(!data.status){
                    setErrorDataFlag(true);
                }
                else{
                    localStorage.setItem("user_auth", "true");
                    navigate("/main");
                    props.setModalFlag(false);
                }
            })
            
        }
    }
    return (
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Авторизация</TitleText>
                <CloseIconButtonWrapper>
                    <CloseIconButton onClick={()=>props.setModalFlag(false)}>
                        <CloseIcon src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </TitleWrapper>
            <DataForm onSubmit={loginFunction}>
                <LoginInputWrapper>
                    <LoginInputLabel>Логин: </LoginInputLabel>
                    <LoginInput onChange={()=>setLoginInputState(loginInputRef.current?.value || "")} ref={loginInputRef} type={"text"} value={loginInputState} placeholder="ivan08"/>
                </LoginInputWrapper>
                <PasswordInputWrapper>
                    <PasswordInputLabel>Пароль: </PasswordInputLabel>
                    <PasswordInput onChange={()=>setPasswordInputState(passwordInputRef.current?.value || "")} value={passwordInputState} ref={passwordInputRef} type={"password"}/>
                </PasswordInputWrapper>
                <SubmitFormInputWrapper>
                    <SubmitFormInput onClick={loginFunction} type={"submit"} value={"Подтвердить"}/>
                </SubmitFormInputWrapper>
            </DataForm>
            {errorDataFlag ?
                <ErrorTextWrapper>
                    <ErrorText>Ошибка. Неверный логин или пароль</ErrorText>
                </ErrorTextWrapper>
                :
                null
            }
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
    height: 320px;
    width: 322px;
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
const ErrorTextWrapper = styled.div`
    position: absolute;
    bottom: 25px;
    font-size: 16px;
    color: #FF4500;
`
const ErrorText = styled.p`

`

export default LoginModal;