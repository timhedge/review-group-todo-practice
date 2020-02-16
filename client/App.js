import React from 'react';
import GroceryItem from './GroceryItem.jsx'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      groceryInput: '',
      groceryList: ['broccoli', 'queso', 'oreos']
    }
  }

  deleteItem(event){
    let tempArry = this.state.groceryList
    tempArry.splice(event.target.value,1)
    this.setState({
      groceryList: tempArry
    })
  }

  handleChange(event){
    this.setState({groceryInput: event.target.value})
  }

  submitItem(){
    if(this.state.groceryInput===''){
      return
    }
    let temp = this.state.groceryList;
    temp = temp.push(this.state.groceryInput)
    this.setState({
      groceryInput: temp,
      groceryInput: ''
    })
  }



  render(){
    return (
      <div>
        <h1>Grocery List</h1>
        <input onChange={this.handleChange.bind(this)} value={this.state.groceryInput}></input>
        <button onClick={this.submitItem.bind(this)}>Submit Item</button>
        {this.state.groceryList.map((item,index) => (
          <GroceryItem key={index} indexValue={index} oneItem={item} deleteItem={this.deleteItem.bind(this)}/>
        ))}
      </div>
    )
  }
}