import styled from "styled-components";

interface IProps
{

}

function SearchPanelComponent(props:IProps)
{
    return (
        <ExternalWrapper>
            <SearchForm>
                <SearchIcon src="./images/search_icon.png"/>
                <SearchInput placeholder="Поиск"/>
                <SearchButton>Искать</SearchButton>
            </SearchForm>
            <SearchResultWrapper>
                <NotFoundText>Ничего не найдено</NotFoundText>
            </SearchResultWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    position: relative;
`
const SearchForm = styled.form`
    position: relative;
`
const SearchIcon = styled.img`
    position: absolute;
    top: 13px;
    left: 20px;
`
const SearchButton = styled.button`
    position: absolute;
    right: 6px;
    top: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: medium;
    font-family: "Roboto", sans-serif;
    color: #FFFFFF;
    background-color: #233047;
    border-radius: 5px;
    padding: 7px 10px;
    outline: none;
    border: none;
`


const SearchInput = styled.input`
    outline: none;
    border: 1px solid #233047;
    border-radius: 5px;
    width: 650px;
    padding: 11px 0px 11px 55px;
    ::placeholder {
        color: #A9A9A9;
        opacity: 1;
        
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        
        font-weight: regular;
    }
`
const SearchResultWrapper = styled.div`
    background-color: #FFFFFF;
    width: 650px;
    border: 1px solid #233047;
    position: absolute;
    top: 50px;
    border-radius: 5px;
    padding: 20px 0px 20px 30px;
`
const NotFoundText = styled.p`

`


export default SearchPanelComponent;
