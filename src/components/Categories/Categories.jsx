import { TbRectangularPrism, TbRectangularPrismPlus } from "react-icons/tb";
import { BiBook } from "react-icons/bi";
import "./style.css"

const Categories = () => {
    return (
      <div className="container-categories">
        <div className="icon-open">
          <TbRectangularPrism className="icon" />
        </div>
        <div className="container-cards">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1].map(() => (
            <div className="card-category">
              <span className="name">
                <span>
                  <BiBook />
                </span>{" "}
                Estudios
              </span>
              <span className="counter">1</span>
            </div>
          ))}
        </div>
        <button className="add-card">
          <TbRectangularPrismPlus />
        </button>
      </div>
    );
}

export default Categories;