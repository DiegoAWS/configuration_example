import React from 'react'

import { Input } from 'antd';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useConfiguration } from '../../../globalContext/ConfigurationContext'

import PersonsSelector from '../components/PersonsSelector';
import LogoSection from '../components/LogoSection';
import ComponentHolder from '../components/ComponentHolder';
import ColorPicker from '../components/ColorPicker';



const FormWrapper = styled.div`
    margin-top:42px;

  @media (max-width: 767px) {
        padding:0px 20px;
        width:100%;
    } 

    @media (min-width: 768px) {
        padding-left:40px;
        width:58%;
    } 
    @media (min-width: 1024px) {
        padding-left:80px;
        width:40%;
    } 
  
    @media (min-width: 1366px) {
        padding-left:110px;
        width:35%;
    } 

`



const InputWrapper = styled.div`
    margin-bottom: 20px;
`


const MainForm = () => {

    const { t } = useTranslation();
    const {
        // imageAsUrl,
        spaceName,
        setSpaceName,
        spaceURL,
        setSpaceURL,
        personAmountIndex,
        setPersonAmountIndex,
        optionsPersonsAmount
    } = useConfiguration()


    return (
        <FormWrapper >
            <h1>{t("Settings")}</h1>

            <ComponentHolder title={t("LogoSpace")}
                descriptions={[t('LogoDescription1'), t('LogoDescription2')]} >
                <LogoSection />
            </ComponentHolder>

            <ComponentHolder title={t("NameSpace")}>
                 <InputWrapper>
                    <Input placeholder={t('NameSpacePlaceholder')} value={spaceName} onChange={e => { setSpaceName(e.target.value) }} />
                </InputWrapper>
            </ComponentHolder>

            <ComponentHolder title={t("UrlSpace")}
                descriptions={[t('UrlDescription1'), t('UrlDescription2')]} >
                 <InputWrapper>
                    <Input placeholder={t('UrlSpacePlaceholder')} value={spaceURL} onChange={e => { setSpaceURL(e.target.value.replace(/[^a-zA-Z0-9-_]/g, '')) }} />
                </InputWrapper>
            </ComponentHolder>

            <ComponentHolder title={t("PersonAmountName")}
                descriptions={[t('LogoDescription1'), t('LogoDescription2')]} >
                <PersonsSelector
                    optionsTitle={optionsPersonsAmount}
                    personAmountIndex={personAmountIndex}
                    setPersonAmountIndex={setPersonAmountIndex}
                />
            </ComponentHolder>

            <ComponentHolder title={t("ThemeColor")} >
                <ColorPicker/>
            </ComponentHolder>


        </FormWrapper>
    )
}
export default MainForm