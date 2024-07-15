import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice";
import TotalScore from "./TotalScore"
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const rollDice = () => {
  if(!selectedNumber) {
    setError("You have not selected any Number")
    return;
  }
  setError("")
  const randomNumber = generateRandomNumber(1, 6);
  setCurrentDice((prev) => randomNumber);

  if(!selectedNumber) return;

  if(selectedNumber === randomNumber)
    setScore((prev) => prev + randomNumber);

else{
  setScore((prev) => prev - 2);

}

setSelectedNumber(undefined);
};

const resetScore = () =>{
  setScore(0);
}

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore  score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}
        />
      </div>
        <RollDice currentDice={currentDice} 
        rollDice={rollDice}
        />

        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
        </div>
        {showRules && <Rules />}
    <Rules 
    showRules={showRules}
    setShowRules={setShowRules}
    />
    </MainContainer>
    
  )
};


export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
  
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

.btns{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 220px;  
  gap: 10px;
  height: 200px;
  cursor: pointer;
  margin: 0 auto;

}
`
