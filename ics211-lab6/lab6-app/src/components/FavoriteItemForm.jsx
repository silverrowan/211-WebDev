import styled from 'styled-components'
import { useState } from 'react'

const FavoriteItemForm = ({ addTea }) => {

    const handleSubmit = event => {
    console.log(name, link) 
    event.preventDefault();
    addTea( name, link );
    }

    const[ name, setName ] = useState( '' );
    const[ link, setLink ] = useState( '' );

    return (          
    <>
        <form onSubmit={handleSubmit}>
        <fieldset style={{ display: 'flex', flexDirection: "column", gap: '2em'}}>
            <StyledLegend style={{ marginBottom: '0.75em'}}>Add a Tea:</StyledLegend>

            <div style={{ display: 'flex', flexDirection: "row", gap: "0.25em", width: '60%' }}>
                <StyledLabel htmlFor="addTeaName">Tea:</StyledLabel> {/* note, no id for label... "[var]str" but w curlies wasn't working */}
                <input name="TeaIn" id="addTeaName" style={{flex: 1}} value={name} onChange={ event => setName( event.target.value )} />                
            </div>
            <div style={{ display: 'flex', flexDirection: "row", gap: "0.25em"}}>
                <StyledLabel htmlFor="addTeaLink">Link:</StyledLabel> {/* note, no id for label... "[var]str" but w curlies wasn't working */}
                <input type="text" name="LinkIn" id="addTeaLink" style={{flex: 1}} value={link} onChange={ event => setLink( event.target.value ) } />                
            </div>

            <div style={{ display:'flex', justifyContent:'center'}}>
            <StyledButton type="submit">Add Tea</StyledButton>
            </div>
        </fieldset>
        </form>
    </>
    );
};


const StyledLegend = styled.legend`
    color: navy;
    font-weight: 900;
    padding: 0.5em; 
`
const StyledLabel = styled.label`
    font-weight: 900;
    margin: 0.1em; 
`
const StyledButton = styled.button`
    color: white;
    padding: 0.8em;
    font-size: 10pt;
    border: 1px solid rgba(0,0,0, 0.1);
    border-radius: 0.2em;
    background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
    box-shadow: 0 0.05em 0.25em rgba(0,0,0, 0.5);
`

export default FavoriteItemForm
