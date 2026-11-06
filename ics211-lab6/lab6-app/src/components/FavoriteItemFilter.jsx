import styled from 'styled-components'

const FavoriteItemFilter = ({filterTea, setFilterTea, className}) => {

    return (
        <div className={className}>
            <StyledFilterLabel htmlFor="filterIn">Show only teas containing: </StyledFilterLabel>
            <StyledFilterInput id="filterIn" value={filterTea} onChange={setFilterTea}></ StyledFilterInput>
        </div>
    )
}

const StyledFilterLabel = styled.label`
    font-weight: 900;
    margin: 0.1em;
    min-width: 15em;
`
const StyledFilterInput = styled.input`
    width: 100%;
    

`
// #;
const StyledFavoriteItemFilter = styled( FavoriteItemFilter )`
    background-color: #ffffff88;
    border: 1px solid hsl(200, 53%, 53%);

    color: hsl(8, 61%, 60%);
    margin: 10px 2px;
    padding: 15glow2pin
    px;
    border-radius:5px;
    font-family: sans-serif;
    display: flex;
    gap: 0.25em;
    `;
    // list-style: none;
    // color: ${props=>props.color};

export default StyledFavoriteItemFilter;