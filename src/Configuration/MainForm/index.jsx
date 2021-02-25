import React from 'react'
import { Input } from 'antd';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useConfiguration } from '../../GlobalContext/ConfigurationContext'
import Description from './Description';
import PersonsSelector from './PersonsSelector';


const FormWrapper = styled.div`
    margin-top:42px;



    @media (min-width: 1366px) {
        padding-left:110px;
        width:30%;
    } 
    @media (min-width: 1024px) {
        padding-left:80px;
        width:40%;
    } 
    @media (min-width: 768px) {
        padding-left:40px;
        width:58%;
    } 
    @media (max-width: 767px) {
        padding-left:20px;
        width:100%;
    } 

`

const SectionTitle = styled.div`
font-size:14px;

`

const LogoHolder = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    height:34px;
    width:34px;
    border-radius:999px;
    background-color:#343C4A;

`

const SectionContainer = styled.div`
    padding:5px;
    margin:5px;
`
const DetailsContainer = styled.div`
    color:#00000080;
    margin-bottom: 20px;

`

const MainForm = ({ ...props }) => {

    const { t } = useTranslation();
    const { spaceName, setSpaceName,
        spaceURL, setSpaceURL,
        personAmountIndex, setPersonAmountIndex
    } = useConfiguration()

    const optionsPersonsAmount = [t('JustMe'), '2-10', '11-25', '26-50', '51-100', '101-500', '500+']


    return (
        <FormWrapper >

            <h1>{t("Configuration")}</h1>

            <SectionContainer>
                <SectionTitle>{t("LogoSpace")}</SectionTitle>

                <div>
                    <LogoHolder>B</LogoHolder>
                </div>
            </SectionContainer>
            <SectionContainer>
                <Description>
                    <DetailsContainer>{t('LogoDescription1')}</DetailsContainer>
                    <DetailsContainer>{t('LogoDescription2')}</DetailsContainer>
                </Description>
            </SectionContainer>
            <SectionContainer>
                <SectionTitle>{t("NameSpace")}</SectionTitle>

                <div>
                    <Input placeholder={t('NameSpacePlaceholder')} value={spaceName} onChange={e => { setSpaceName(e.target.value) }} />
                </div>
            </SectionContainer>
            <SectionContainer>
                <SectionTitle>{t("UrlSpace")}</SectionTitle>

                <div>
                    <Input placeholder={t('UrlSpacePlaceholder')} value={spaceURL} onChange={e => { setSpaceURL(e.target.value) }} />
                </div>
                <Description>
                    <DetailsContainer>{t('UrlDescription1')}</DetailsContainer>
                    <DetailsContainer>{t('UrlDescription2')}</DetailsContainer>
                </Description>
            </SectionContainer>
            <SectionContainer>
                <SectionTitle>{t("PersonAmountName")}</SectionTitle>

                <PersonsSelector
                    optionsTitle={optionsPersonsAmount}
                    personAmountIndex={personAmountIndex}
                    setPersonAmountIndex={setPersonAmountIndex}
                />

                <Description>
                    <DetailsContainer>{t('LogoDescription1')}</DetailsContainer>
                    <DetailsContainer>{t('LogoDescription2')}</DetailsContainer>
                </Description>

            </SectionContainer>
        </FormWrapper>
    )
}
export default MainForm