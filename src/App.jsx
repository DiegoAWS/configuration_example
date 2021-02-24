import React from 'react'
import { ConfigurationContextProvider } from './GlobalContext/ConfigurationContext'
import Configuration from './Configuration'

const App = () => {
    return (
        <ConfigurationContextProvider>
            <Configuration />
        </ConfigurationContextProvider>
    )
}
export default App