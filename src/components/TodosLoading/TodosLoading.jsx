import "./TodosLoading.css"

const TodosLoading = () => {
    return (
        <div className="container-Skeletons">
            {[1,2,3].map((index)=>(
                <div key={index} className="skeleton">
                    <span className="circle"></span>
                    <p></p>
                    <span className="circle circleTwo"></span>
                </div>
            ))}
        </div>
    );
}
 
export default TodosLoading;