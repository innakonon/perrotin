import React from 'react'
import ArtworkItem from './ArtworkItem'

function ArtworkGrid({items, isLoading}) {
    return isLoading ? (<h1>Loading...</h1>) : <section className="cards">


        {items.map(item => (
            <ArtworkItem key = {item.id} item={item}></ArtworkItem>
        ))}
    </section>
}

export default ArtworkGrid
