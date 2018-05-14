import React, { Component } from 'react';
class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 0};
  }


componentDidMount: function() {
   var intervalId = setInterval(this.timer, 1000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
},

componentWillUnmount: function() {
   // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
},

timer: function() {
   // setState method is used to update the state
   this.setState({ currentCount: this.state.currentCount -1 });
},

render: function() {
    // You do not need to decrease the value here
    return (
      <section>
       {this.state.currentCount}
      </section>
    );
}

});
