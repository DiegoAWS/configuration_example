import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";


const ConfigurationContext = createContext();

const ConfigurationContextProvider = props => {

  const { t } = useTranslation();
  const [imageAsUrl, setImageAsUrl] = useState('')
  const [spaceName, setSpaceName] = useState('')
  const [spaceURL, setSpaceURL] = useState('')
  const [personAmountIndex, setPersonAmountIndex] = useState(0)
  const [colorThemeIndex, setColorThemeIndex] = useState(0)
  const [privacyIndex, setPrivacyIndex] = useState(0)

  const [imagePreview, setImagePreview] = useState('')
  const [imageName, setImageName] = useState('')


  const optionsPersonsAmount = [t('JustMe'), '2-10', '11-25', '26-50', '51-100', '101-500', '500+']

  const colors = [
    '#39B0FF',
    '#04B58B',
    '#3E9C4B',
    '#B6BC00',
    '#E59100',
    '#E55C00',
    '#EE1F50',
    '#D6198A',
    '#B321F1',
    '#48B5FE'
  ]
  const privacyOptions = ['Private', 'Public']


  const instanceConfig = {
    imageAsUrl, setImageAsUrl,
    spaceName, setSpaceName,
    spaceURL, setSpaceURL,
    personAmountIndex, setPersonAmountIndex,
    colorThemeIndex, setColorThemeIndex,
    optionsPersonsAmount,
    colors, privacyOptions,
    privacyIndex, setPrivacyIndex,
    imagePreview, setImagePreview,
    imageName, setImageName
  };

  return (
    <ConfigurationContext.Provider value={instanceConfig}>
      {props.children}
    </ConfigurationContext.Provider>
  )
};

const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  if (context === undefined) {
    return {}
  }
  return context
};

export {
  ConfigurationContextProvider,
  ConfigurationContext,
  useConfiguration
};