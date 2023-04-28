// import { Component } from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import css from './App.module.css';


const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (feedback) => {setFeedback(prevState => ({
      ...prevState, [feedback]: prevState[feedback] + 1,
    })); };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

 const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = feedback.good;
    return total === 0 ? 0 : Math.round((positiveFeedback / total) * 100);
  }
  
  const { good, neutral, bad } = feedback;

  return (
      <div className={css.root}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
}

export default App;
