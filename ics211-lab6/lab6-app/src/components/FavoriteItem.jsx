import styled from 'styled-components';

const FavoriteItem = ({id, itemName, itemLink, color}) => (
    <StyledListItem key={id} color={color}><b>{itemName}:</b>  <a href={itemLink}>{itemLink}</a></StyledListItem>
)
const StyledListItem = styled.li`
    background-color: #ffffff88;
    margin: 10px 2px;
    padding: 5px;
    border-radius:5px;
    font-family: sans-serif;
    list-style: none;
    color: ${props=>props.color};
`;
export default FavoriteItem;