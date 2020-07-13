import React from 'react';
import ControlApp from "./Components/ControleApp/ControlApp"
import AddItem from "./Components/AddLIst/AddItem"


class App extends React.Component{
 
    state = {
      items : [
        {name: "item 1" , description: "description 1 " },
        {name: "item 2" , description: "description 2 " },
        {name: "item 3" , description: "description 3 " },
        {name: "item 4" , description: "description 4 " },
      ],
      current:" " , 

    }


///////////////////////////////////////////////////////////////////

  
  handleChange = (e) =>{
    let value = e.target.value;
    this.setState({
      current: value,
    })
     
  }  
/////////////////////////////////////////////////////////////////
  handleSubmit = (e) =>{
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

    
  }
/////////////////////////////////////////////////////////////////////////////

Edit = (proof , items) => {
  const listItems = document.getElementsByTagName('li');    
  const ele = document.getElementsByClassName("selected")[0];
  const desc = document.getElementsByClassName("desc")[0];
  
 if(ele){
         if(proof === "Desc" ){

         let c = prompt("write description" );
             ele.setAttribute("data-desc" , c );

             desc.innerHTML= ele.getAttribute("data-desc");

         }else if(proof === "Edit"){
             for (let i = 0; i < listItems.length; i++) {
                 listItems[i].firstElementChild.setAttribute("contenteditable" , false);
             }
             
             ele.firstElementChild.setAttribute("contenteditable" , true);
         
             
         }else{

             let index = ele.getAttribute("data-id");
            items.splice(index,1);
             
             ele.classList.add("Hide");
         }

     }else{
         alert("select item to manage it");
     }
 

}
/////////////////////////////////////////////////////////////////////////////
  render(){
    return (
      <>
      <h1 className = "resetMargin"> TO DO LIST </h1>   
      <div className ="App" >
        
        <AddItem handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} value = {this.state.current}/>

        <ControlApp  items = { this.state.items} Edit = {this.Edit}/>
           
      </div>
        
      </>
    )
  }
}


export default App;
