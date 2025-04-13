import styled from "styled-components";

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

const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        cursor: pointer;
        background: black;
        border: 1px solid transparent;
        color: white;
    }
`;

export default Button;
export { OutlineButton };