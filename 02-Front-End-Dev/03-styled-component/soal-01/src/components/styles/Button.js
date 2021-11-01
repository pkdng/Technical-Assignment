import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    padding: 0.5em 1.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: ${props => props.outline ? '1px solid lightblue' : '1px solid white'};
    background-color: ${props => props.outline ? 'white' : 'lightblue'};
    color: ${props => props.outline ? 'lightblue' : 'white'};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    &:hover {
        border: ${props => props.outline ? '1px solid lightblue' : '1px solid cornflowerblue'};
        background-color: ${props => props.outline ? 'lightblue' : 'cornflowerblue'};
        color: white;
    } 
`;

export default StyledButton