import {useState} from 'react'


function ItemFormHandler({ submit, btnText, material, amount, _id}){
    const initialInputs = { material: material || '', amount: amount || ''};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);

        

        setInputs(initialInputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='material'
                value={inputs.material}
                onChange={handleChange}
                placeholder='Title' />
             <input
                type='text'
                name='amount'
                value={inputs.amount}
                onChange={handleChange}
                placeholder='Amount' />
                <button>Add Item</button>

        </form>
    )
}
export default ItemFormHandler;