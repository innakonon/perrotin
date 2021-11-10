import axios from 'axios';
import React from 'react'
import heart from '../../img/couer.png';
import App from '../../App';

function ArtworkFavorites({ favorite }) {
    const removeLink = async (id) =>{
        try {
            const deleteFavorite = await axios(`http://localhost/remove.php?id=${id}`)
         
        }
        catch (err){

            console.log(err)
        }
    }
    // console.log(favorite);
    return (
        <div > <img src={heart} width="33" alt='' />
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
                    <button onClick={() => removeLink(favorite.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ArtworkFavorites
