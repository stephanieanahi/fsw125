import {useState} from 'react'


function ItemSearch({ clearSearch, searchItems}){
    const initialInputs = { material: '' };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchItems(inputs.material);
        setInputs(initialInputs);

        

       
    }

    return(
        <div>
            <button onClick={clearSearch}>Clear Search</button>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='material'
                value={inputs.material}
                onChange={handleChange}
                placeholder='Title' />
             
                <button>Search Item</button>

        </form>
        </div>
    )
}
export default ItemSearch;