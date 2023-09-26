import { useEffect, useState } from "react";

function useLocalStorageCategories(itemName, inicialState) {

    const [category, setCategory] = useState(inicialState);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [errorCategory, setErrorCategory] = useState(false);
  
    useEffect(()=>{
    setTimeout(()=>{
      try {
        const getLocalStorage = localStorage.getItem(itemName);
      if(!getLocalStorage) {
        localStorage.setItem(itemName, JSON.stringify([]));
        const firstLocalStorage = localStorage.getItem(itemName)
        setCategory(JSON.parse(firstLocalStorage));
      } else {
        const parse = JSON.parse(getLocalStorage);
        setCategory(parse)
      }
      setLoadingCategory(false)
      } catch (e) {
        setErrorCategory(true);
        setLoadingCategory(false);
      }
    }, 3000)
    },[itemName])
  
    const modifyLocalStorageCategories = (newCategory) => {
      localStorage.setItem(itemName, JSON.stringify(newCategory))
      setCategory(newCategory)
    }
  
    return {modifyLocalStorageCategories, category, loadingCategory, errorCategory};
  };

  export default useLocalStorageCategories;