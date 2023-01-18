import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  }
  countTotalFeedback = () => {   
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;   
    };
    countPositiveFeedbackPercentage = () => {
     return this.countTotalFeedback() >= 1/
  Math.round(good / total * 100),    
      }
    };
  
    onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
     }))
  };


   render() {
    const { good, neutral, bad } = this.state;
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
      <Section title ="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
      <Section title ="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} /> 
      </Section>
      </div>
    )}}

export default App;