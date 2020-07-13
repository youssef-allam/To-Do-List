import React from 'react';
import ControlApp from "./Components/ControleApp/ControlApp"
import AddItem from "./Components/AddLIst/AddItem"
import Item from "./Components/ControleApp/item"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items : [
        {name: "item 1" , description: "description 1 " },
        {name: "item 2" , description: "description 2 " },
        {name: "item 3" , description: "description 3 " },
        {name: "item 4" , description: "description 4 " },
      ],
      current:" " , 

    }

    this.list = this.state.items.map( singlitem =>{
      return ( <Item item= {singlitem} key={Math.random()} state ={this.state} id={this.state.items.indexOf(singlitem)}/>)
    })

    this.handleChange = (e) =>{
      let value = e.target.value;
      this.setState({
        current: value,
      })
      
   
    }  

    this.handleSubmit = (e) =>{
      e.preventDefault();
      let value = this.state.current;
      if(value.trim() === "" ){
        return false
      }else{
        let obj = {name: value , description: " " };
        let items =  this.state.items;
        items.push(obj);
        
        this.setState({
         items,
          current : ""
        });
        
    
        
        }

        this.list = this.state.items.map(singlitem => {
          return(
              <Item item= {singlitem} key={Math.random() * 10} state ={this.state}/> 
          )

        });

      
    }

    this.handleDelete= (index) => {
      console.log("CAT")
    }
   

  }
  
  render(){
    return (
      <>
      <h1 className = "resetMargin"> TO DO LIST </h1>   
      <div className ="App" >
        
        <AddItem handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} value = {this.state.current}/>

        <ControlApp list = { this.list } items = { this.state.items}/>
           
      </div>
        
      </>
    )
  }
}

  



export default App;
