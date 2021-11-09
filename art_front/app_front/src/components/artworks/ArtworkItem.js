import React from 'react'

function ArtworkItem({item}) {
    console.log(item)
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={"https://www.artic.edu/iiif/2/"+item.image_id+"/full/843,/0/default.jpg"} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.title}</h1>
            <ul>
              <li>
                <strong>Classification:</strong> {item.classification_title}
              </li>
              <li>
                <strong>Category:</strong> {item.category_titles}
              </li>
              <li>
                <strong>Date:</strong> {item.date_start}
              </li>
              <li>
                <strong>Artist:</strong> {item.artist_title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ArtworkItem
