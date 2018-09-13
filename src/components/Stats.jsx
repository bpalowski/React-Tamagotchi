import React from 'react';
import PropTypes from 'prop-types';
import Sleep from './Sleep';
import Food from './Food';
import Activity from './Activity';
//import { Link } from 'react-router-dom';

class Stats extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 100,
      activityLevel: 100,
      sleepLevel: 100,
      dead: "Alive and well",
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
  }

  handleActivityLevel() {
    var newActivityLevel = this.state.activityLevel;
    newActivityLevel += 1;
    this.setState({activityLevel: newActivityLevel});
  }

  handleSleepLevel() {
    var newSleepLevel = this.state.sleepLevel;
    newSleepLevel += 1;
    this.setState({sleepLevel: newSleepLevel});
  }

  startGame(){
    const countDown = setInterval(() => {
      var aliveOrDead = this.state.dead;

      var lowerFoodLevel = this.state.foodLevel;
      lowerFoodLevel -= 1;

      var lowerActivityLevel = this.state.activityLevel;
      lowerActivityLevel -= 1;

      var lowerSleepLevel = this.state.sleepLevel;
      lowerSleepLevel -= 1;

      if (this.state.foodLevel === 1) {
        clearInterval(countDown);
        aliveOrDead = "Ate to much or not enough? You be dead fool!"
      } else if (this.state.activityLevel === 1) {
        clearInterval(countDown);
        aliveOrDead = "Not enough activity. Gain weight and died!"
      } else if (this.state.sleepLevel === 1) {
        clearInterval(countDown);
        aliveOrDead = "Died from lack of sleep"
      }

      this.setState({foodLevel: lowerFoodLevel, activityLevel: lowerActivityLevel, sleepLevel: lowerSleepLevel, dead: aliveOrDead});

    }, 100);
  }



  render(){


    return (
      <div>
        <h1>TxvdsbSbdbgdlkhvds lkvsd hkshv</h1>


        <p onClick={this.startGame}>STARTTTTTT</p>
        <p>{this.state.foodLevel}</p><span><Food addFood={this.handleFoodLevel}/></span>
        <p>{this.state.activityLevel}</p><span><Activity addActivity={this.handleActivityLevel}/></span>
        <p>{this.state.sleepLevel}</p><span><Sleep addSleep={this.handleSleepLevel}/></span>
        <p>{this.state.dead}</p>

      </div>
    );
  }
}

export default Stats;
