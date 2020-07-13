import React from "react"





function ControlApp(props){

    let checked = (e) => {
        let ele = e.target;  
           ele.parentElement.classList.toggle("done");
       }
   
    /////////////////////////////////////////////////////// 
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

    /////////////////////////////////////////////////
     
        
     return (
           <div className="Control-App">
                    <ul className="list-container"> 
                    
                        {
                          
                            props.items.map(singleItem =>  
                                <li onClick={SelectItem} data-desc={singleItem.description} data-title={singleItem.name} data-id = {props.items.indexOf(singleItem)} > 
                                <span> {singleItem.name} </span>
                                <input type="checkbox" onClick={checked}  />  
                                </li>
                            )
                        }
                            

                    </ul>

                    <aside>
                        <button onClick= {() => props.Edit("Desc", props.items)}> Add descrip :) </button>
                        <button onClick= {() => props.Edit("Edit" ,props.items)}> Edit  0.o </button>
                        <button onClick= {() => props.Edit("Del" ,props.items )}> Delete :( </button>
                    </aside>

                    <div className="description">
                      <h3 className="title"> Name OF the Item </h3>
                      <p className="desc"> ;jdsamfl amkjwe fkl nwieo klnfejeo  knel
                           nla ka nls nlen lksf md kle nlksn mlsek fn
                           kdlsn  nklen l fklem sl md fkel am lmlek 
                           mlekmlfm ke mlsdmk lemk smlf msaekl mlfmel </p>
                    </div>
                  

            </div>
        )
    }



export default ControlApp 