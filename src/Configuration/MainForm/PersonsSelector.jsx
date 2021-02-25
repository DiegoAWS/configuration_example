import React from 'react'
import styled from 'styled-components'
const BottonSelect = styled.div`
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
`

export default function PersonsSelector({ optionsTitle, personAmountIndex, setPersonAmountIndex, ...props }) {

    const handleClick = (index) => {
        setPersonAmountIndex(index)
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'nowrap' }} {...props}>
            {
                optionsTitle.map((item, index) => <BottonSelect selected={index === personAmountIndex} onClick={() => { handleClick(index) }}>{item}</BottonSelect>)
            }
        </div>
    )
}
