import React, { useState } from "react";
import useLocalStorageCategories from "../Hooks/useLocalStorageCategories";

const ContextCategories = React.createContext();

const ProviderCategories = ({ children }) => {

    const {modifyLocalStorageCategories, category, loadingCategory, errorCategory} = useLocalStorageCategories(
        "categories",
        []
      );
    const [showModalNewCategory, setShowModalNewCategory] = useState(false)

      
    const addNewCategory = (newCategory) => {
        modifyLocalStorageCategories([...category, newCategory])        
    }

    return (
        <ContextCategories.Provider
            value={{
                addNewCategory,
                category, 
                showModalNewCategory, 
                setShowModalNewCategory
            }}
        >
            {children}
        </ContextCategories.Provider>
    )
};

export {ContextCategories, ProviderCategories}