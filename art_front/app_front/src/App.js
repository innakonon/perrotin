import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
import './App.css';


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {

      const result = await axios(`http://localhost`)

      console.log(result.data.data)

      }
    fetchItems();
  }, [])

  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;
