import "./note.css"

const Notes = ({note, noteTwo, data}) => {
    return (
        <>
            <p className={`note ${data ? "item" : ""}`}>{note}<br/>{noteTwo}</p>
        </>
    );
}
 
export default Notes;