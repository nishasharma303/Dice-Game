
import styled from "styled-components"

const RollDice = ({rollDice, currentDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`dice_${currentDice}.png`} alt="dice"></img>
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
align-items: center;
flex-direction: column;
display: flex;

p{
font-size: 24px;
}

.dice{
    cursor: pointer;
}
    
`
