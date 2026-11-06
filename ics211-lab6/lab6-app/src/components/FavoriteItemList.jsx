import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';

const FavoriteItemList = ({ teas }) => {
    return (
        <>
            <h3>List: </h3>
            <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {teas.map( tea =>
                    <FavoriteItem key={tea.id} itemName={tea.itemName} itemLink={tea.itemLink} color={tea.color}/>
                )}
            </ol>
        </>
    )
}

export default FavoriteItemList;