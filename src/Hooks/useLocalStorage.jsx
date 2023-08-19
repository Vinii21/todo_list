import { useEffect, useState } from "react";

function useLocalStorage(itemName, inicialState) {

    const [item, setItem] = useState(inicialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(()=>{
    setTimeout(()=>{
      try {
        const getLocalStorage = localStorage.getItem(itemName);
      if(!getLocalStorage) {
        localStorage.setItem(itemName, JSON.stringify([]));
        const firstLocalStorage = localStorage.getItem(itemName)
        setItem(JSON.parse(firstLocalStorage));
      } else {
        const parse = JSON.parse(getLocalStorage);
        setItem(parse)
      }
      setLoading(false)
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }, 3000)
    },[itemName])
  
    const modifyLocalStorage = (newTODOS) => {
      localStorage.setItem(itemName, JSON.stringify(newTODOS))
      setItem(newTODOS)
    }
  
    return {modifyLocalStorage, item, loading, error};
  };

  export default useLocalStorage;