import React, { Component} from "react";
import { ClassCountChild } from "./ClassCountChild";
 class ClassCount extends Component{
  constructor(props){
      super(props);
      this.state={count:0};
  }
  handleIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
  };
  handleDecrement=()=>{
      this.setState((prevState)=>({count:prevState.count-1}))
  };
  handleReset=()=>{
      this.setState((prevState)=>({count:prevState.count*0}))
  }
 
  render(){
      return(
          <div>
            <ClassCountChild showCounter={this.state.count} CountIncrement={this.handleIncrement} CountDecrement={this.handleDecrement} CountReset={this.handleReset} />
            {/* <button onClick={()=> this.setState((prevState)=>({count:prevState.count+1}))}>increament</button>
            <button onClick={()=> this.setState((prevState)=>({count:prevState.count-1}))} >Decreament</button>
            <button onClick={()=> this.setState((prevState)=>({count:prevState.count*0}))}>Reset</button> */}

          </div>
      )
  };
 };
 export default ClassCount
