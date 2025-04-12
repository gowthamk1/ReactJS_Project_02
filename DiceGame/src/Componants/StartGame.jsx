import React from 'react'
import styled from 'styled-components'  

const StartGame = ({toggleGame}) => {
  return (
    <Container>
        <div>
        <img src="./images/dices.png" alt="Dices" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggleGame}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;

        }
    }
`;

const Button = styled.button`
    display: flex;
    flex-direction: column; justify-content: center;
    align-items: center;
    padding: 10px 18px;
    min-width: 220px;
    background: black; 
    color: white;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;

    &:hover{
        cursor: pointer;
        background: white;
        border: 1px solid black;
        color: black;
        transition: 0.2s background ease-in;
    }
`;

  