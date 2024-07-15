
import styled from "styled-components"

const NumberSelector = ({ setError,error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) => {
      setSelectedNumber(value)
      selectedNumber("")
    }
    

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
    <div className="flex">
    {
        arrNumber.map((value, i) => (
            <Box 
            isSelected={value === selectedNumber}
            key={i} 
            onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

display: flex;
align-items: end;
flex-direction: column;

  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
  .error{
    color: red;
    font-weight: 300;
  }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    font-size: 24px;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};

`
