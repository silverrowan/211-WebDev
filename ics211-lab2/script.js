let bodyNode = document.getElementsByTagName("body")

const my2DArray = [
    [ "fav thing name", "link" ]
    [ "fav thing 2 name", "link2" ]
];

const titleH1 = document.createElement("h1");
const bylineH3 = document.createElement("h3");
const favoritesList = document.createElement("ol");

favoritesList.forEach( item => console.log( `${item[0]}: ${item[1]}` ) );

    const favoriteItem = document.createElement("li");
    favoritesList.appendChild( favoriteItem );

document.body.appendChild( titleH1 );
document.body.appendChild( bylineH3 );
document.body.appendChild( favoritesList );


