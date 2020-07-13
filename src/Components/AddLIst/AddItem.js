import React from 'react'



function AddItem(props){

        return(
            <>
                <form onSubmit={props.handleSubmit}>

                    <input type="text" onChange={props.handleChange} value={props.value}/>
                    
                    <button type="submit" > Add :) </button>
                </form>
            
            </>
        )

}

export default AddItem