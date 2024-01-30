import React from 'react';
import { Wrapper, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button key={option} type="button" onClick={() => onFeedback(option)}>
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};
