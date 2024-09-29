import styled from "styled-components";

interface IProps
{

}

function SearchPanelComponent(props:IProps)
{
    return (
        <ExternalWrapper>
            <SearchForm>
                <SearchInput placeholder="Поиск"/>
            </SearchForm>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`

`
const SearchForm = styled.form`

`
const SearchInput = styled.input`

`



export default SearchPanelComponent;
