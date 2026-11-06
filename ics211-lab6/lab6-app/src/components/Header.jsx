import styled from 'styled-components';

const Header = () => (
    <>
        <StyledTitle>Favorite Teas</StyledTitle>
        <h3>by Mariah Malczewska</h3>  
    </>
)

const StyledTitle = styled.h1`
    color: navy;
    font-size: 30pt;
    margin-bottom: -15px;
`

export default Header;