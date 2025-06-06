import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
            How to play dice game
        </h2>
        <div className='text'>
            <p>Select any number.</p>
            <p>Click on dice image.</p>
            <p>After clicking on dice, if selected number is equal to the dice number you will get same points as dice.{" "} </p>
            <p>If you get wrong guess then two points will bw deducted.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
        text-align: center;
    }
    .text{
        margin-top: 24px;
    }
`;