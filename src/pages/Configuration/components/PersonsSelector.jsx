import React from 'react'
import styled from 'styled-components'


const BottonSelect = styled.div`
    text-align:center;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #E4E4E4;
    border-radius:5px;
    height:45px;
    width:75px;
    cursor: pointer;
    font-size:14px;
    border-color:${props => props.selected ? '#48B5FE' : '#E4E4E4'};
    box-shadow: ${props => props.selected ? '0px 0px 5px #48B5FE' : 'none'};

    @media (max-width: 767px) {
        font-size:10px;
    } 

    @media (min-width: 768px) {
        font-size:12px;
    } 
    @media (min-width: 1024px) {
        font-size:12px;
    } 
    @media (min-width: 1366px) {
        font-size:14px;
    } 
`

export default function PersonsSelector({ optionsTitle, personAmountIndex, setPersonAmountIndex, ...props }) {

    const handleClick = (index) => {
        setPersonAmountIndex(index)
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'nowrap' }} {...props}>
            {
                optionsTitle.map((item, index) => <BottonSelect key={index} selected={index === personAmountIndex} onClick={() => { handleClick(index) }}>{item}</BottonSelect>)
            }
        </div>
    )
}
