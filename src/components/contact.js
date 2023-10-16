import React,{Component} from "react";

class details extends Component{
    
    
    state = {
        email: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div className="formBox">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email" >email:</label>
                    <input type="text" id="email" onChange={this.handleChange}/>
                    <button >press</button>
                </form>
            </div>
        )
    }
}

export default details;