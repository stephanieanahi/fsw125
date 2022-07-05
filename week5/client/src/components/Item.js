
import { useState } from "react";
import ItemFormHandler from "./ItemFormHandler";




function Item({ deleteItem, editItem, material, amount, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='item'>
            {!editToggle ?
                <>
                    <h1>Material: {material}</h1>
                    <p>Amount: {amount}</p>
                    <button onClick={() => deleteItem(_id)} className="delete-btn">Delete</button>
                    <button onClick = {() => setEditToggle(prevToggle => !prevToggle)} className="edit-btn">Edit</button>
                </>
                :
                <>
                <ItemFormHandler 
                material ={material}
                amount={amount}
                _id={_id}
                btnText='Submit Edit'
                submit={editItem}/>
                <button onClick= {() => setEditToggle(prevToggle=> !prevToggle)}>Close</button>
                </>
                
            }
        </div>
    );
}

export default Item;