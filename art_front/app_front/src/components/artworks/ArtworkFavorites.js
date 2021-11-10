import React from 'react'
import heart from '../../img/couer.png';
function ArtworkFavorites({ favorite }) {
    // console.log(favorite);
    return (
        <div > <img src={heart} width="33" alt=''/>
            <div >

                <div>
                 
                    <ul>
                        <li>
                            Title: {favorite["title"]}
                        </li>
                        <li>
                            <strong>Artwork id: {favorite["artwork_id"]}</strong> 
                        </li>
                        <li>
                            <strong>Author: {favorite["author"]}</strong> 
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArtworkFavorites
