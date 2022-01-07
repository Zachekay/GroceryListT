import './App.css';
import image from './shopping.jpg';
import imageTwo from './shopMen.jpg';
import { GroceryListT } from './GroceryListT.js';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={image} width="250px" alt="shopping"/>
      </div>

      <div className='container'> 
        <h1>Grocery List</h1>
      </div>

      <GroceryListT />
      <div className='container'>
        <img src={imageTwo} width="250px" alt="shopping"/>
      </div>
    </div>
  );
  }

export default App;
