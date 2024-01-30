import React, { useState } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/section';
import { FeedbackOptions } from './FeedBackOptions/feedbackOptions';
import { Statistics } from './Stats/stats';
import { Notification } from './Notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();
  const stateNames = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateNames}
          onFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            netural={neutral}
            bad={bad}
            total={total}
            positivePercetange={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback left" />
        )}
      </Section>
    </Container>
  );
};
