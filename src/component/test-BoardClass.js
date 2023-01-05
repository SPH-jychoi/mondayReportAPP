import React from "react";
import { useState } from "react";
import GroupColumnValuesQuery from "../query/GroupColumnValuesQuery"

class Board extends React.Component{
  
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      data: ""
    };

  }

componentDidMount() {

  console.log(this.state)

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : APItoken
   },
   body: JSON.stringify({
     query : query
   })
  })
   .then(res => res.json())
   .then(res => {
      let temp = JSON.stringify(res, null, 2)
      console.log(temp);
      this.setState({data: temp.data})    
    });
}

render() {
    return (
      <div className="App">
      testing right now
      {this.state.data}
      </div>
    );
  }
}

export default Board;