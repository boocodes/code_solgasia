import { useEffect, useState } from "react";
import styled from "styled-components";
import DrawRegistrationFieldsByStep from "../draw_registration_fields";

interface IProps
{
    setModalFlag: (flag: boolean) => void;
}

interface IRegistrationFormDataFields
{
    firstname: string;
    middlename: string;
    lastname: string;
    login: string;
    email: string;
    password: string;
}

function GetAccessModal(props: IProps)
{
    const [registrationFormDataFields, setRegistrationFormDataFields] = useState<IRegistrationFormDataFields>()
    const firstRegistrationStep = 1;
    const lastRegistrationStep = 3;
    const [registrationStep, setRegistrationStep] = useState<number>(1)
    const switchRegistrationStepsNext = () => registrationStep !== lastRegistrationStep ? setRegistrationStep(registrationStep + 1) : null;
    const switchRegistrationStepsPrev = () => registrationStep !== firstRegistrationStep ? setRegistrationStep(registrationStep - 1) : null;


    function sumbitForm(e: any)
    {
        e.preventDefault();
        {
            fetch('https://arhicult.ru/api/user/get_access.php/', 
                {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(registrationFormDataFields)
                } 
            )
        }
        props.setModalFlag(false);
    }


    return (
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Введите данные</TitleText>
                <CloseIconButtonWrapper>
                    <CloseIconButton onClick={()=>props.setModalFlag(false)}>
                        <CloseIcon src="./images/close_icon.png"/>
                    </CloseIconButton>
                </CloseIconButtonWrapper>
            </TitleWrapper>
            <DataForm onSubmit={sumbitForm}>
            <DrawRegistrationFieldsByStep setRegistrationFormDataFields={setRegistrationFormDataFields} registrationStep={registrationStep} setModalFlag={props.setModalFlag}/>
            </DataForm>
            {
                registrationStep !== firstRegistrationStep ? 
                    <PrevStepButton>
                        <PrevStepIcon onClick={switchRegistrationStepsPrev} src="./images/next_step_icon.png" />
                    </PrevStepButton>
                    :
                    null
            }
            {
                registrationStep !== lastRegistrationStep ?
                    <NextStepButton>
                        <NextStepIcon onClick={switchRegistrationStepsNext} src="./images/next_step_icon.png"/>
                    </NextStepButton>
                    :
                    null
            }
            
            
        </ExternalWrapper>
    )
}

const NextStepButton = styled.button`
    border: none;
    background: none;
    width: 30px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 10px;
`
const NextStepIcon = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`
const PrevStepButton = styled.button`
    border: none;
    background: none;
    width: 30px;
    cursor: pointer;
    position: absolute;
    left: 30px;
    bottom: 10px;
`
const PrevStepIcon = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
`

const ExternalWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;    
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    position: fixed;
    padding: 20px 30px 60px 20px;
    z-index: 4;
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
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
    margin-top: 20px;
    height: 150px;
    width: 450px;
`


export default GetAccessModal;