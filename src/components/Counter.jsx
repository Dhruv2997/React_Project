import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
    constructor(props) { 
    super(props);
    this.state = { 
        clicks: 0
     }
    this.Mystyle = {
        color:'green',
        fontSize: 40,
     };
    }

     IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
    render() { 
        return ( 
            <div className="counter">
                <span style={this.Mystyle} className="badge">{ this.state.clicks }</span>
                <button className="btn btn-secondary" onClick={this.IncrementItem}>Incease me</button>
                <button className="btn btn-secondary" onClick={this.DecreaseItem}>Dcrease me</button> 
            </div>
         );
    }

    formcount(){
        const{count} = this.state;
        return count===0 ? "zero" : count;
    }
}
 
export default Counter;