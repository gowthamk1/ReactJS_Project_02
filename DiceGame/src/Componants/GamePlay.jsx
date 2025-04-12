import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'

const GamePlay = () => {

const [selectedNumber, setSelectedNumber] = useState();
const [dice, setDice] = useState(1);

  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore />
            <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber} />
        </div>
        <RollDice dice = {dice} setDice = {setDice} />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;