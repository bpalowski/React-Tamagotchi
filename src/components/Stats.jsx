import React from 'react';
//import { Link } from 'react-router-dom';

class Stats extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 100,
      activityLevel: 100,
      sleepLevel: 100
    };
     this.handleFoodLevel = this.handleFoodLevel.bind(this);
     this.handleActivityLevel = this.handleActivityLevel.bind(this);
     this.handleSleepLevel = this.handleSleepLevel.bind(this);
     this.startGame = this.startGame.bind(this);
  }

  handleFoodLevel() {
    var newFoodLevel = this.state.foodLevel;
    newFoodLevel += 1;
    this.setState({foodLevel: newFoodLevel});
    console.log("FOOD:" + this.state.foodLevel);
  }

  handleActivityLevel() {
    var newActivityLevel = this.state.activityLevel;
    newActivityLevel += 1;
    this.setState({activityLevel: newActivityLevel});
    console.log("Activity" + this.state.activityLevel);
  }

  handleSleepLevel() {
    var newSleepLevel = this.state.sleepLevel;
    newSleepLevel += 1;
    this.setState({sleepLevel: newSleepLevel});
    console.log("SLEEP:" + this.state.sleepLevel);
  }

  startGame(){
    const countDown = setInterval(() => {

      var lowerFoodLevel = this.state.foodLevel;
      lowerFoodLevel -= 1;

      var lowerActivityLevel = this.state.activityLevel;
      lowerActivityLevel -= 1;

      var lowerSleepLevel = this.state.sleepLevel;
      lowerSleepLevel -= 1;

      this.setState({foodLevel: lowerFoodLevel, activityLevel: lowerActivityLevel, sleepLevel: lowerSleepLevel});

    }, 100);
    }



render(){


  return (
    <div>
      <h1>TxvdsbSbdbgdlkhvds lkvsd hkshv</h1>
        <p id="test"></p>
        <p onClick={this.startGame}>STARTTTTTT</p>
        <p onClick={this.handleFoodLevel}>Food</p>
        <p onClick={this.handleActivityLevel}>Activity</p>
        <p onClick={this.handleSleepLevel}>Sleep</p>

    </div>
  );
}
}

export default Stats;
