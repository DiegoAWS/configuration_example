import React, { useState } from 'react'

import { Input } from 'antd';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useConfiguration } from '../../../globalContext/ConfigurationContext'
import Description from '../components/Description';
import PersonsSelector from '../components/PersonsSelector';
import { storage } from '../../../services/firebase';

import loadingGif from '../../../assets/icons/loadinGif.gif'

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
    height:67px;
    width:67px;
    font-size:37px;
    border-radius:999px;
    background-color:#343C4A;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const SectionContainer = styled.div`

    margin:5px;
  
`
const DetailsContainer = styled.div`
    color:#00000080;
    margin-bottom: 20px;

`
const InputWrapper = styled.div`
    margin-bottom: 20px;
`

const MainForm = ({ ...props }) => {

    const { t } = useTranslation();
    const {
        imageAsUrl,
        setImageAsUrl,
        spaceName,
        setSpaceName,
        spaceURL,
        setSpaceURL,
        personAmountIndex,
        setPersonAmountIndex
    } = useConfiguration()

    const [loadingImage, setLoadingImage] = useState(false)
    const optionsPersonsAmount = [t('JustMe'), '2-10', '11-25', '26-50', '51-100', '101-500', '500+']





    const handleImageAsFile = (e) => {

        const image = e.target.files[0]
        if (image?.name) {
            console.log(image)
            const imageTitle = Date.now() + '_' + image.name
            setLoadingImage(true)


            const uploadTask = storage.ref(`/images/${imageTitle}`).put(image)



            uploadTask.on('state_changed',
                (snapShot) => {
                    //Future Implementation... See the Upload Progress
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    console.log('Paso x Aqui')
                    storage.ref('images').child(imageTitle).getDownloadURL()
                        .then(fireBaseUrl => {
                            setLoadingImage(false)
                            setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                        })
                })
        }
    }



    return (
        <FormWrapper >

            <h1>{t("Configuration")}</h1>

            <SectionContainer>
                <SectionTitle>{t("LogoSpace")}</SectionTitle>

                <div style={{ display: 'flex' }}>
                    <LogoHolder image={loadingImage? loadingGif:imageAsUrl.imgUrl}> {!imageAsUrl.imgUrl&&!loadingImage ?  "B" : ""} </LogoHolder>



                    <input type="file"
                        onChange={handleImageAsFile}
                    />
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

                <InputWrapper>
                    <Input placeholder={t('NameSpacePlaceholder')} value={spaceName} onChange={e => { setSpaceName(e.target.value) }} />
                </InputWrapper>
            </SectionContainer>
            <SectionContainer>
                <SectionTitle>{t("UrlSpace")}</SectionTitle>

                <InputWrapper>
                    <Input placeholder={t('UrlSpacePlaceholder')} value={spaceURL} onChange={e => { setSpaceURL(e.target.value.replace(/[^a-zA-Z0-9-_]/g, '')) }} />
                </InputWrapper>
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