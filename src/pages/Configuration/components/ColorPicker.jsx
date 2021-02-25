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
    margin:5px;
    background-color:${props => !props.selected ? props.color : 'white'};
    border-radius:999px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border:1px solid ${props => props.color};
    box-shadow: ${props => props.selected ? '0px 0px 1px 3px ' + props.color : 'none'}; 
    
  
    @media (min-width: 1366px) {
        height: 30px;
        width:30px;
    } 
  @media (min-width: 768px) {
        height: 28px;
        width:28px;
    } 
`

const InternalSphere = styled.div`
    height: 25px;
    width:25px;
    border-radius:999px;
    background-color:${props => props.color};
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
                    {(colorThemeIndex === index) && <InternalSphere color={item} />}
                </ColorSphere>

            )}
        </ColorWrapper>
    )
}
