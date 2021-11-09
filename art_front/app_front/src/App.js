import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
import ArtworkGrid from './components/artworks/ArtworkGrid';
import './App.css';


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {

      const result = await axios(`http://localhost`)

      console.log(result.data.data)
      setItems(result.data.data)
      setIsLoading(false)

    }
    fetchItems();
  }, [])

  return (
    <div className="App">
      <Header />
      <ArtworkGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
