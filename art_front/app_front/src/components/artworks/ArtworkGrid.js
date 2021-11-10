import React from 'react'
import AddFavorites from '../ui/AddFavorites'
import ArtworkFavorites from './ArtworkFavorites'
import ArtworkItem from './ArtworkItem'

function ArtworkGrid({favorites, items, isLoading}) {
   
    return isLoading ? (<h1>Loading...</h1>) : <section className="cards">


        {items.map(item => (
            <ArtworkItem key={item.id} item={item}></ArtworkItem>
           
        ))}

        {favorites.map(favorite => (
            <ArtworkFavorites favorite={favorite}></ArtworkFavorites>
        ))}
        {/* <AddFavorites items={items}/> */}
    </section>
  
}

export default ArtworkGrid
