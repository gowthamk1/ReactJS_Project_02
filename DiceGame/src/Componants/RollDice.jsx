import styled from 'styled-components';

const RollDice = ({ rollDice, dice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/Dice/dice_${dice}.png`} alt={`dice-${dice}`} />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    font-weight: 500;
  }
`;
