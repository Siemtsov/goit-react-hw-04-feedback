import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/section';
import { FeedbackOptions } from './FeedBackOptions/feedbackOptions';
import { Statistics } from './Stats/stats';
import { Notification } from './Notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedback = state => {
    this.setState(prev => ({ [state]: prev[state] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPrecentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions onFeedback={this.onFeedback} options={options} />
        </Section>
        <Section title="Statistic">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercetange={totalPrecentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
