import { TbRectangularPrism, TbRectangularPrismPlus } from "react-icons/tb";
import { BiBook } from "react-icons/bi";
import "./style.css"
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { ContextCategories } from "../../Context/ContextCategories";

const Categories = () => {

    const [showModalPortal, setShowPortal] = useState(false);
    const {setShowModal} = useContext(Context);
    const {category, setShowModalNewCategory, showModalNewCategory} = useContext(ContextCategories)

    return (
      <div className={`container-categories ${showModalPortal && "active-container-categories"}`}>
        <div className="icon-open" onClick={()=>{setShowPortal(!showModalPortal); setShowModal(false)}}>
          <TbRectangularPrism className={`${showModalPortal ? "scale" : null}`} />
        </div>
        <div className="container-cards">
          {category.map((item, index) => (
            <div key={index} className="card-category">
              <span className="name">
                <span>
                  <BiBook />
                </span>{" "}
                {item}
              </span>
              <span className="counter">1</span>
            </div>
          ))}
        </div>
        {/* <button className="add-card" title="Agregar nueva categoría" onClick={()=>setShowModalNewCategory(!showModalNewCategory)}>
          <TbRectangularPrismPlus />
        </button> */}
      </div>
    );
}

export default Categories;