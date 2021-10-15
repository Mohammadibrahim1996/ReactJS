import React, { Component} from "react";
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
  render(){
      return(
          <div>
              <h1> Class Component Counter</h1>
              <h4>Count:{this.state.count}
              </h4>
            <button onClick={()=> this.state.count <= 9&& this.handleIncrement()}>increament</button>
            <button onClick={()=> this.state.count >  0 && this.handleDecrement()}>Decreament</button>

          </div>
      )
  }
 }
 export default ClassCount
