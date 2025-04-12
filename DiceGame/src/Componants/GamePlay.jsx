import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState('');

  const rollDice = () => {

    if(!selectedNumber) {
        setError("You have not selected any number")
        return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);

    if(selectedNumber===randomNumber){
        setScore(prev => prev + randomNumber)
    }else{
        setScore(prev => prev - 2)
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
            error = {error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice dice={dice} rollDice={rollDice} />
      <div className="btns">
        <Button>Reset</Button>
        <Button></Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
