
import { useState } from "react";
import ItemFormHandler from "./ItemFormHandler";




function Item({ deleteItem, editItem, material, amount, id }) {
    const [editToggle, setEditToggle] = useState(false)
    function editHandler(item, id){
        editItem(item,id)
        setEditToggle(false)
    }
    return (
        <div className='item'>
            {!editToggle ?
                <>
                    <h1>Material: {material}</h1>
                    <p>Amount: {amount}</p>
                    <button onClick={() => deleteItem(id)} className="delete-btn">Delete</button>
                    <button onClick = {() => setEditToggle(prevToggle => !prevToggle)} className="edit-btn">Edit</button>
                </>
                :
                <>
                <ItemFormHandler 
                material ={material}
                amount={amount}
                id={id}
                btnText='Submit Edit'
                submit={editHandler}/>
                <button onClick= {() => setEditToggle(prevToggle=> !prevToggle)}>Close</button>
                </>
                
            }
        </div>
    );
}

export default Item;