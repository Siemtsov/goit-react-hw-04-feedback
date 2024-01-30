import React from 'react';
import { List } from './stats.styled';

export const Statistics = ({
  good,
  netural,
  bad,
  total,
  positivePercetange,
}) => {
  return (
    <List>
      <li>Good:{good}</li>
      <li>Neutral:{netural}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback:{positivePercetange}%</li>
    </List>
  );
};
