import React from "react"





class ControlApp extends React.Component {
    constructor(props){
        super();
        this.props = props;
      
    }

    render(){
        return (
            <div className="Control-App">
                    <ul className="list-container"> 
                        {this.props.list}
                    </ul>

                    <aside>
                        <button onClick= {() => Edit("Desc", this.props.items)}> Add descrip :) </button>
                        <button onClick= {() => Edit("Edit" ,this.props.items)}> Edit  0.o </button>
                        <button onClick= {() => Edit("Del" ,this.props.items )}> Delete :( </button>
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
}
function Edit(proof , items ){
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


export default ControlApp 