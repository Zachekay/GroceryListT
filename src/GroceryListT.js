import {Component} from 'react';
import shoppingBag from './shopping-bag.png';

export class GroceryListT extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

        addItem(input) {
            if (input === '') {
                alert ("Please, enter an item")
            } 
            else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''}) /*userInput: "" делает так, что после ввода input опустошается */
        }
    }

        deleteItem() {
            let listArray = this.state.groceryList; /*то есть хотим получить доступ к тому, что у нас находится в массиве */
            listArray = []; /*опустошаем массив */
            this.setState({groceryList: listArray}) /*работаем с состоянием */
        }

        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }

        onFormSubmit(e) {
            e.preventDefault();            
        }

    render() {
        return(
            <div>
             <form onSubmit={this.onFormSubmit}>  
            <div className='container'>
                <input type="text" 
                placeholder="What do you want to buy?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/> {/*то, что пишет пользователь в данный момент */}
                </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={shoppingBag} width="20px" alt="shopping bag"/>
                    {item}</li>
                    ))}

                </ul>
                 <div className='container'>         
                    <button onClick={() => this.deleteItem()} className='delete'>Delete</button>
                 </div> 
                 </form> 
            </div>
        )
    }
}