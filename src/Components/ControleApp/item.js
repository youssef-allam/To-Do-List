import React from 'react'

var i = -1;

function Item(props){

   let checked = (e) => {
     let ele = e.target;  
     
        ele.parentElement.classList.toggle("done");
    }

    
    let SelectItem = () => {
      const items = document.getElementsByTagName('li');
      const desc = document.getElementsByClassName("desc")[0];
      const title = document.getElementsByClassName("title")[0];
         
         for (let i = 0; i < items.length; i++) {
            
            items[i].onclick = function() {
            for (let i = 0; i < items.length; i++) {
               items[i].classList.remove("selected");
            }
            desc.innerHTML= this.getAttribute("data-desc");
           
            this.classList.toggle("selected");
            
            let value = this.firstElementChild.textContent
        
            this.setAttribute("data-title" , value);
            
            title.innerHTML = this.getAttribute("data-title");
            
                         
           
            }
            
         }
   }
 
    


    return (
        
       <>
       <li onClick={SelectItem} data-desc={props.item.description} data-title={props.item.name} data-id = {props.state.items.indexOf(props.item)}> 
            <span> {props.item.name} </span>
            <input type="checkbox" onClick={checked}  />  
        </li>
      
       </>
    )
   }


export default Item