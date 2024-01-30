import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border: none;
  box-shadow: 0 0.75px 10px rgba(255, 255, 255, 0, 75);

  &:hover,
  &:focus {
    color: white;
    background-color: aqua;
    cursor: pointer;
  }
`;
