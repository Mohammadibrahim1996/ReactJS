import React,{Component} from "react";

export class ClassCountChild extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <h1> Class Component Counter Value From Child</h1>
              <h4>Count:{this.props.showCounter}</h4>
              <button onClick={this.props.CountIncrement}>Increment</button>
              <button onClick={this.props.CountDecrement}>Decrement</button>
              <button onClick={this.props.CountReset}>Reset</button>

            </div>
        )
    };
};