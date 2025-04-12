import React from 'react';
import styled from 'styled-components';

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) =>{
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
      <div className='flex'>
        {arrNumber.map((value, index) => (
          <Box
            key={index}
            isSelected={selectedNumber === value}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
  }

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 12px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  cursor: pointer;
  transition: all 0.2s ease;
`;
