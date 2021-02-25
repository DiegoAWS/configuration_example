import React, { createContext, useContext, useState } from "react";


const ConfigurationContext = createContext();

const ConfigurationContextProvider = props => {

  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: '' })
  const [spaceName, setSpaceName] = useState('')
  const [spaceURL, setSpaceURL] = useState('')
  const [personAmountIndex, setPersonAmountIndex] = useState(0)
  const [colorTheme, setColorTheme] = useState("#48B5FE")
  
  const instanceConfig = {
    imageAsUrl, setImageAsUrl,
    spaceName, setSpaceName,
    spaceURL, setSpaceURL,
    personAmountIndex, setPersonAmountIndex,
    colorTheme, setColorTheme
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