import React from 'react';
// import Feedback from '../Feedback/Feedback';
// import Statistics from '../Statistics/Statistics';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,

  }
  countTotalFeedback = event => {    
    this.setState(prevState => ({
     total: prevState.good + prevState.bad + prevState.neutral,    
    }))};
    countPositiveFeedbackPercentage = () => {
     this.setState(prevState => ({
       positiveFeedback: Math.round(prevState.good / prevState.total * 100),    
      }))
    };
  
  countGoodFeedback = event => {
    this.setState(prevState => ({
      good: prevState.good + 1,
     }))
  };
  countBadFeedback = event => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
     }))
  };
  countNeutralFeedback = event => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
     }))
  }
  

   render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
            <h1>
                Please leave feedback
            </h1>
            <button type='button' onClick={this.countGoodFeedback }>Good</button>
            <button type='button' onClick={this.countNeutralFeedback}>Neutral</button>
            <button type='button' onClick={this.countBadFeedback}>Bad</button>
            <button type='button' onClick={this.countTotalFeedback}>Bad</button>
            <button type='button' onClick={this.countPositiveFeedbackPercentage}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {this.state.total}</p>
          </li>
          <li>
            <p>Positive feedback: {this.state.positiveFeedback}%</p>
          </li>
        </ul>
      </div>    
    </div>
    )
   }}

export default App;