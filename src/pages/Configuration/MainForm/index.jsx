import React, { useEffect } from 'react'
import { storage, configStorage } from '../../../services/firebase';

import { Input, Button } from 'antd';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useConfiguration } from '../../../globalContext/ConfigurationContext'

import PersonsSelector from '../components/PersonsSelector';
import LogoSection from '../components/LogoSection';
import ComponentHolder from '../components/ComponentHolder';
import ColorPicker from '../components/ColorPicker';
import PrivacySelector from '../components/PrivacySelector';
import LanguageSelector from '../components/LanguageSelector';



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

const TitleWrapper = styled.div`
   display:flex;
   justify-content:space-between;
`


const Title = styled.div`
    color:#000000D6;
    font-size:18px;
    font-weight: 900;
`

const InputWrapper = styled.div`
    margin-bottom: 20px;
`

const ButtonsWrapper = styled.div`
   display:flex;
   margin-top: 30px;

   button{
    border-radius: 5px;
    margin: 10px;
   }
   button.colored{
       background-color:#48B5FE;
       color:white;
   }
   button.colored:hover{
       color:black;
   }
`

const MainForm = () => {




    const { t } = useTranslation();
    const {
        imageAsUrl,
        setImageAsUrl,
        spaceName,
        setSpaceName,
        spaceURL,
        setSpaceURL,
        personAmountIndex,
        setPersonAmountIndex,
        optionsPersonsAmount,
        imagePreview,
        setImagePreview,
        imageName,
        setImageName,
        colorThemeIndex,
        setColorThemeIndex,
        privacyIndex,
        setPrivacyIndex
    } = useConfiguration()

    useEffect(() => {

        const loadData = configStorage.on('value', (snapshot) => {

            const data = snapshot.val();
            if (data) {
                try {
                    setImageAsUrl(data.imageAsUrl)
                    setImagePreview(data.imageAsUrl)
                    
                    setImageName(data.imageName)
                    setSpaceName(data.spaceName)
                    setSpaceURL(data.spaceURL)
                    setPersonAmountIndex(data.personAmountIndex)
                    setColorThemeIndex(data.colorThemeIndex)
                    setPrivacyIndex(data.privacyIndex)
                }
                catch (e) {
                    console.log(e)
                }
            }
        });

        return () => {
            configStorage.off("value", loadData);
        }
        // eslint-disable-next-line
    }, []);



    const saveChangesHandler = async () => {


        configStorage.update({
            imageAsUrl,
            imageName,
            spaceName,
            spaceURL,
            personAmountIndex,
            colorThemeIndex,
            privacyIndex
        })




    }

    const discardChangesHandler = () => {

        spaceName && setSpaceName('')
        spaceURL && setSpaceURL('')
        setPersonAmountIndex && setPersonAmountIndex(0)

        imagePreview && setImagePreview('')
        colorThemeIndex && setColorThemeIndex(0)
        privacyIndex && setPrivacyIndex(0)

        if (imageName) {
            const imageToDelete = storage.ref('images').child(imageName);

            imageToDelete.delete().then(function () {
                setImageName('')
            })
        }

    }

    return (
        <FormWrapper >
            <TitleWrapper>
                <Title>{t("Settings")} </Title>
                <LanguageSelector />
            </TitleWrapper>

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
                <ColorPicker />
            </ComponentHolder>

            <ComponentHolder title={t("PrivacyTitle")} style={{ marginTop: '30px' }}>
                <PrivacySelector />
            </ComponentHolder>

            <ButtonsWrapper>
                <Button className="colored" onClick={saveChangesHandler}>{t('SaveChanges')}</Button>
                <Button onClick={discardChangesHandler}>{t('Discard')}</Button>
            </ButtonsWrapper>
        </FormWrapper>
    )
}
export default MainForm