
import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import Item from './components/Item';
import ItemFormHandler from './components/ItemFormHandler';

function App() {
   const [items, setItems] = useState([]);

   const getItems = () => {
    axios.get('/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
   }

   const addItem = (newItem) => {
    axios.post('/items', newItem)
    .then(res => {
      setItems(prevItems => [...prevItems, res.data])
    })
    .catch(err => console.log(err))
   };

   const deleteItem = (itemId) => {
    axios.delete(`/items/${itemId}`)
    .then(res=>{
      setItems(res.data)
    } )
    .catch(err => console.log(err))
   }

   const editItem =(updates, itemId) => {
    axios.put(`/items/${itemId}`, updates)
    .then(res => {
      setItems(prevItems => prevItems.map(item => item.id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
   }

   useEffect(() => {
    getItems();
   }, []);

   const itemsList = items.map(item => <Item {...item} deleteItem={deleteItem} editItem={editItem} key={item.material}/>)

   return (
    <div className='items-container'>
      <ItemFormHandler 
      btnText='Add Item'
      submit={addItem}/>
      {itemsList}
    </div>
   );
}

export default App;
