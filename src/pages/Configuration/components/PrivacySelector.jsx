import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useConfiguration } from '../../../globalContext/ConfigurationContext'

const SelectorWrapper = styled.div`
    display:flex;
`

const SelectorOption = styled.div`
    flex:1;

    padding:5px;
    border: 1px solid ${props => props.selected ? '#48B5FE' : '#E4E4E4'};
    box-shadow:${props => props.selected ? '0px 0px 5px 1px #48B5FE' : 'none'} ;

    border-radius:5px;
    cursor: pointer;
    display:flex;
    margin:5px;
`

const ColorSphere = styled.div`
    height: 20px;
    min-width:20px;
    margin:0px 10px;
    background-color:${props => props.selected ? '#48B5FE' : 'white'};
    border:1px solid ${props => props.selected ? '#48B5FE' : '#CFD0D2'};
    border-radius:999px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const InternalSphere = styled.div`
    height: 14px;
    width:14px;
    border-radius:999px;
    border:3px solid white;
    background-color:transparent;
`

const TextHolder = styled.div`
    font-size:12px;
    color:#00000080;
`

const TextTitle = styled.div`
    color:${props => props.selected ? '#48B5FE' : '#000000'};
`

const SelectorItem = ({ selected, title, text, ...props }) => {
    return (
        <SelectorOption selected={selected} {...props}>
            <ColorSphere selected={selected}>
                <InternalSphere />
            </ColorSphere>
            <TextHolder>
                <TextTitle selected={selected}>{title} </TextTitle>
                {text}
            </TextHolder>
        </SelectorOption>
    )
}


export default function PrivacySelector() {
    const { t } = useTranslation();
    const { privacyOptions,
        privacyIndex, setPrivacyIndex } = useConfiguration()

    const descriptionsOptions = [t('PrivateDescription'), t('PublicDescription')]

    return (
        <SelectorWrapper>
            {privacyOptions.map((item, index) =>
                <SelectorItem
                    key={index}
                    title={t(item)}
                    text={descriptionsOptions[index]}
                    onClick={() => { setPrivacyIndex(index) }}
                    selected={privacyIndex === index}
                />
            )
            }


        </SelectorWrapper>
    )
}
