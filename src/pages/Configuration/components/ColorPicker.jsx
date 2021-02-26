import React from 'react'
import styled from 'styled-components'
import { useConfiguration } from '../../../globalContext/ConfigurationContext'

const ColorWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

`
const ColorSphere = styled.div`
    height: 32px;
    width:32px;
    background-color:${props =>  props.color };
    border-radius:999px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
   
  
    @media (max-width: 1366px) {
        height: 30px;
        width:30px;
    } 
    @media (max-width: 768px) {
        height: 35px;
        width:35px;
    } 
`

const InternalSphere = styled.div`
    height: 22px;
    width:22px;
    border-radius:999px;
    border:3px solid white;
    background-color:transparent;
    @media (max-width: 1366px) {
        height: 20px;
        width:20px;
    } 
    @media (max-width: 768px) {
        height: 25px;
        width:25px;
    } 
`

export default function ColorPicker() {

    const { colors, colorThemeIndex, setColorThemeIndex } = useConfiguration()

    const colorSelect = (index) => {
        setColorThemeIndex(index)
    }
    return (
        <ColorWrapper>
            {colors.map((item, index) =>

                <ColorSphere
                    key={index}
                    color={item}
                    selected={colorThemeIndex === index}
                    onClick={() => { colorSelect(index) }}>
                    {(colorThemeIndex === index) && <InternalSphere  />}
                </ColorSphere>

            )}
        </ColorWrapper>
    )
}
