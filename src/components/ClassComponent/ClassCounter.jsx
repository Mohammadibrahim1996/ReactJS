import React, { Component} from "react";
 class ClassCount extends Component{
  constructor(props){
      super(props);
      this.state={count:0};
  }
//   handleIncrement=()=>{
//         this.setState((prevState)=>({count:prevState.count+1}))
//   };
// //   handleDecrement=()=>{
//       this.setState((prevState)=>({count:prevState.count-1}))
//   };
//   handleReset=()=>{
//       this.setState((prevState)=>({count:prevState.count*0}))
//   }
 
  render(){
      return(
          <div>
              <h1> Class Component Counter</h1>
              <h4>Count:{this.state.count}
              </h4>
            <button onClick={()=> this.setState((prevState)=>({count:prevState.count+1}))} disabled={this.state.count<=10}>increament</button>
            <button onClick={()=> this.setState((prevState)=>({count:prevState.count-1}))} disabled={this.state.count >  0}>Decreament</button>
            <button onClick={()=> this.setState((prevState)=>({count:prevState.count*0}))}>Reset</button>

          </div>
      )
  }
 }
 export default ClassCount
