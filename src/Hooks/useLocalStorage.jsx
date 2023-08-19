import { useEffect, useState } from "react";

function useLocalStorage(itemName, inicialState) {

    const [item, setItem] = useState(inicialState);
  
    useEffect(()=>{
      const getLocalStorage = localStorage.getItem(itemName);
    if(!getLocalStorage) {
      localStorage.setItem(itemName, JSON.stringify([]));
      const firstLocalStorage = localStorage.getItem(itemName)
      setItem(JSON.parse(firstLocalStorage));
    } else {
      const parse = JSON.parse(getLocalStorage);
      setItem(parse)
    }
    },[])
  
    const modifyLocalStorage = (newTODOS) => {
      localStorage.setItem(itemName, JSON.stringify(newTODOS))
      setItem(newTODOS)
    }
  
    return [modifyLocalStorage, item];
  };

  export default useLocalStorage;