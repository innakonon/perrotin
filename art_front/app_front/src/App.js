import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
import ArtworkGrid from './components/artworks/ArtworkGrid';
import Search from './components/ui/Search';
import AddFavorites from './components/ui/AddFavorites';
// import ArtworkFavorites from './components/artworks/ArtworkFavorites';
import './App.css';


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchFavorites = async () => {

      const result = await axios(`http://localhost/favorites.php`)

      // console.log(result.data);
      setFavorites(result.data)

    }
    fetchFavorites();
  }, [])

  useEffect(() => {
    const fetchItems = async () => {

      const result = await axios(`http://localhost?name=${query}`)

      //console.log(result.data.data)
      setItems(result.data.data)
      setIsLoading(false)

    }
    fetchItems();
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) =>setQuery(q)}/>
      <ArtworkGrid favorites={favorites} isLoading={isLoading} items={items} favoriteComponent={AddFavorites}/>
      
    </div>
  );
}

export default App;
