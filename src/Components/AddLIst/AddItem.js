import React from 'react'



class AddItem extends React.Component {
    constructor(props){
        super();
        this.props = props;
    }

    

    render(){
        return(
            <>
                <form onSubmit={this.props.handleSubmit}>

                    <input type="text" onChange={this.props.handleChange} value={this.props.value}/>
                    
                    <button type="submit" > Add :) </button>
                </form>
            
            </>
        )
    }

}

export default AddItem