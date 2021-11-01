import styled from "styled-components";

export const CardContainer = styled.div`
    border:  1px solid rgba(192, 192, 192, 0.5);
    border-radius: 0.5rem;
    width: ${props => props.width ? props.width : '100%'};
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const CardImage = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

export const CardBody = styled.div`
    padding: 1em;
`;

export const CardPrice = styled.h5`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
`;

export const CardProductName = styled.h6`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
    color: gray;
`;

export const FlexContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
`;