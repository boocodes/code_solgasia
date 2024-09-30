import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IProps
{

}
interface ISearchResults
{
    title: string;
    link: string;
    icon: string;
    id: number;
    empty_text: number;
}

function SearchPanelComponent(props:IProps)
{
    const navigate = useNavigate();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<ISearchResults[]>([]);
    const [searchModelViewFlag, setSearchModelViewFlag] = useState<boolean>(false);

    function getSearchResult()
    {
    
        if(!searchModelViewFlag) setSearchModelViewFlag(true);
        console.log(searchInputRef.current?.value)
        if(searchInputRef.current?.value.length == 0)
        {
            fetch('https://arhicult.ru/api/search_field/get_sugguest_result.php', 
                {
                    method: 'GET',
                    mode: 'cors',
                } 
            )
                .then((response)=> {
                    return response.json();
                })
                .then((data)=>{
                    setSearchResults(data);
                })
        }
        else
        {

        }
    }


    return (
        <ExternalWrapper>
            <SearchForm>
                <SearchIcon src="./images/search_icon.png"/>
                <SearchInput ref={searchInputRef} onFocus={getSearchResult} onChange={getSearchResult} placeholder="Поиск"/>
                <SearchButton>Искать</SearchButton>
            </SearchForm>
            {searchModelViewFlag ?
                <>
                    <SearchResultOverlay onClick={()=>setSearchModelViewFlag(false)}/>
                    <SearchResultWrapper>
                        {
                            searchResults.length == 0 ?
                            <>
                                <NotFoundText>Ничего не найдено</NotFoundText>
                            </>
                            :
                            <>
                            {
                                    searchResults.map((elem:ISearchResults)=>{
                                        return (
                                            <SearchResultElemWrapper onClick={()=>navigate(elem.link)}>
                                                <SearchResultElemLink>{elem.title}</SearchResultElemLink>
                                            </SearchResultElemWrapper>
                                        )
                                    })
                                }
                            </>
                        }
                    </SearchResultWrapper>  
                </>
            :
            null
            }
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
    padding: 20px 30px 20px 30px;
    z-index: 3;
`
const NotFoundText = styled.p`

`
const SearchResultElemWrapper = styled.div`
    margin-bottom: 15px;
    :hover{
        background-color: #233047;
        color: white;
    }
    position: relative;
    cursor: pointer;
    padding: 10px 0px 10px 30px;
    border-radius: 5px;
`
const SearchResultElemIcon = styled.img`

`
const SearchResultElemLink = styled.p`

`
const SearchResultOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;

`

export default SearchPanelComponent;
