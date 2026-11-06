import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import FavoriteItemList from './components/FavoriteItemList'
import FavoriteItemForm from './components/FavoriteItemForm'
import StyledFavoriteItemFilter from './components/FavoriteItemFilter'

const App = ({className}) => {
  const [ teas, setTeas ] = useState([
    { id:0, itemName: "Ice Wine Black Tea", itemLink: "https://www.stevesteas.com/products/icewine", color: 'blue'},
    { id:1, itemName: "Rose Congou Tea", itemLink: "https://pippinstea.com/products/china-rose-congou-loose-leaf-tea", color: 'green' },
    { id:2, itemName: "Masala Chai Black Tea", itemLink: "https://pippinstea.com/products/masala-chai-loose-leaf-tea", color: '#8f71e3' }
  ])

  let idCount = teas.length
  
  const addTea = ( teaName, tealink ) => {
    // event.preventDefault()
    console.log("addTea received:", teaName, tealink);
    const newTeaObj = {
        id: idCount++,
        itemName: teaName,
        itemLink: tealink,
        color: getRandomColor()
    } 

    console.log( newTeaObj )
    setTeas( teas.concat(newTeaObj) );
    console.log( teas )
  }

  const getRandomColor = () => {
    // yes its chat-gpt code
    // Blue page background has a hue around 207°
    // Generate colors across a complementary palette.
    const palette = [
      [100, 145], // Green
      [145, 175], // Mint
      [180, 207], // Teal / blue
      [207, 230], // Blue
      [255, 285], // Purple / lavender
      [290, 320], // Magenta
      [330, 355], // Rose / pink
      [5, 25],    // Coral / peach
      [35, 55]    // Gold
    ];

    const range = palette[Math.floor(Math.random() * palette.length)];

    const hue = Math.floor(
      Math.random() * (range[1] - range[0]) + range[0]
    );

    const saturation = Math.floor(Math.random() * 21) + 45;
    const lightness = Math.floor(Math.random() * 16) + 48;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };          

  const[ filterTea, setFilterTea ] = useState('');

  return (
    <div className={className}>
      <Header />
      <FavoriteItemForm addTea={addTea} />
      <h3>Filter:</h3>
      <StyledFavoriteItemFilter filterTea={filterTea} setFilterTea={event => setFilterTea(event.target.value)} />
      <FavoriteItemList teas={teas}/>          
    </div>
  )
}

const StyledApp = styled(App)`
  width: 650px;
  background-color: #a3d4ff;
  border: 3px solid;
  padding: 25px;
  padding-top: 0px;
  margin-top: 25px;
  margin-left: 25px;
  `;

  export default StyledApp